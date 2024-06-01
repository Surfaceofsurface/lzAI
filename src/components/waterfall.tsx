"use client";
import Image from "next/image";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { IoIosShareAlt } from "react-icons/io";
import { IoClose, IoStar } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { TbThumbUp } from "react-icons/tb";
import Triangle from "@/assets/triangle.svg";
type LeftOffset = number;
type TopOffset = number;
type ImageWidth = number;
type ImageHeight = number;
type ImageSize = [ImageWidth, ImageHeight];
type Position = [LeftOffset, TopOffset, ImageWidth, ImageHeight];

const openSpring = {
  type: "spring",
  stiffness: 200,
  damping: 30,
  duration: 0.5,
};
const closeSpring = {
  type: "spring",
  stiffness: 300,
  damping: 35,
  duration: 0.5,
};
export default function WaterFall({ imgSrcs }: { imgSrcs: WaterFallImgs[] }) {
  const [positions, setPositions] = useState<Position[]>(
    new Array(imgSrcs.length).fill([0, 0, 0, 0])
  );
  const [colW, setColW] = useState(0);
  const [maxH, setMaxH] = useState(0); //最大高度
  const [selectedId, setSelectedId] = useState(-1);
  const cols = useRef<ColContainer[] | null>(null);
  const getMinHeightCol = useRef(() => {
    return cols.current!.reduce((hMinCol, curCol) =>
      hMinCol.h < curCol.h ? hMinCol : curCol
    );
  });

  const rootRefCall = useRef((rootEl: HTMLElement | null) => {
    if (!rootEl) return;
    const rect = rootEl.getBoundingClientRect();
    const rootWidth = rect.width;
    const nCol =
      rootWidth < 641
        ? 1
        : rootWidth < 769
        ? 2
        : rootWidth < 1025
        ? 3
        : rootWidth < 1281
        ? 4
        : 5;
    const gap = (nCol - 1) * 5;
    const colWidth = (rootWidth - (nCol - 1) * gap - 18) / nCol; //18是滚动条宽度
    setColW(colWidth);
    cols.current = Array(nCol)
      .fill(0)
      .map((_, i) => new ColContainer(i, colWidth, gap));
  });

  class ColContainer {
    n: number;
    els: Map<number, Position>;
    h: number;
    w: number;
    gap: number;
    constructor(n: number, w: number, gap: number) {
      this.n = n; //第n列
      this.h = 0; //列高
      this.w = w; //列宽
      this.gap = gap; //列间隔
      this.els = new Map(); //包含的元素宽高
    }
    add([width, height]: ImageSize, i: number) {
      const leftOffset = (this.w + this.gap) * this.n;
      const topOffset = this.w * this.h;

      if (this.els.has(i)) {
        const [w, h] = this.els.get(i)!;
        this.h -= h / w;
      }
      this.h += height / width;
      this.els.set(i, [leftOffset, topOffset, width, height]);
      setMaxH((maxH) => Math.max(maxH, topOffset + height));
      setPositions((positions) => {
        positions[i] = [leftOffset, topOffset, width, height];
        return [...positions];
      });
    }
  }

  return (
    <main className="relative" ref={rootRefCall.current}>
      {imgSrcs.map(({ src, id }, i) => (
        <motion.div
          layout
          transition={selectedId === id ? openSpring : closeSpring}
          key={id}
          className={`flex overflow-hidden transition-[width,height] duration-300 bg-neutral-900 ${
            selectedId === id ? "fixed z-20 m-auto " : "absolute z-0"
          }`}
          onClick={() => setSelectedId(id)}
          style={{
            left: `${selectedId === id ? 0 : positions[i][0] + "px"}`,
            top: `${selectedId === id ? 0 : positions[i][1] + "px"}`,
            width: `${selectedId === id ? "80vw" : colW + "px"}`,
            height: `${
              selectedId === id
                ? "80vh"
                : (colW / positions[i][2]) * positions[i][3]+"px"
            }`,
            marginLeft: `${selectedId === id ? "10vw" : ""}`,
            marginTop: `${selectedId === id ? "10vh" : ""}`,
          }}
        >
          <motion.div layout className="flex-shrink-0">
            <motion.span layout="position">
              <Image
                style={{
                  width: `${colW}px`,
                  height: "auto",
                }}
                height={999}
                width={999} // 不能改width和height，否则会导致onload触发两次
                src={src}
                alt="1"
                onLoad={(e) => {
                  //find min col to insert
                  const shouldInsertCol = getMinHeightCol.current();
                  shouldInsertCol.add(
                    [e.currentTarget.width, e.currentTarget.height],
                    i
                  );
                }}
              ></Image>
            </motion.span>
          </motion.div>

          <main
            className={`flex-col ${
              selectedId === id ? "flex basis-0 " : ""
            } flex-shrink-0 grow-[1]`}
          >
            <header className="flex flex-col border-b gap-1 p-4 pb-1">
              <button
                className="ml-auto hover:bg-red-700 rounded-md"
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedId(-1);
                }}
              >
                <IoClose />
              </button>
              <div className="flex justify-between">
                <div className="flex items-center gap-2">
                  <div className="bg-slate-200 rounded-full w-8 h-8"></div>
                  <div>用户</div>
                </div>

                <div className="flex gap-2">
                  <button className="bg-blue-700 rounded-full pl-2 pr-2">
                    关注
                  </button>
                  <button className="bg-gray-700 rounded-full pl-2 pr-2">
                    已关注
                  </button>
                </div>
              </div>
              <div>用途：小红书爆款封面</div>
            </header>
            <main className="border-b flex-1">
              <div>
                <div>标题</div>
                <div>描述</div>
              </div>
              <div>
                <button>复制</button>
              </div>
            </main>
            <footer className="p-4 pb-1">
              <div className="text-neutral-400">共14条评论</div>
              <ul className="p-2">
                <li>
                  <div className="flex gap-2 items-center">
                    <div className="bg-slate-200 rounded-full w-8 h-8"></div>
                    <div>xxx</div>
                  </div>
                  <div className="p-4 pt-1 pb-1">
                    <p>很好...</p>
                    <button className="flex items-center text-xs">
                      <span>展开一条回复</span>

                      <Triangle
                        width="6"
                        height="6"
                        className="fill-white"
                      ></Triangle>
                    </button>
                  </div>
                </li>
              </ul>
              <footer className="flex justify-between pb-2">
                <div className="relative p-4 pt-1 pb-1">
                  <div className="absolute bg-black rounded-full w-6 h-6 ml-1 top-[calc(50%-0.75rem)]"></div>
                  <input
                    type="text"
                    placeholder="说点什么..."
                    className="bg-gray-300 text-black rounded-full h-8 pl-9 pr-4 w-40"
                  />
                </div>
                <ul className="flex gap-2">
                  <li className="flex items-center">
                    <i>
                      <TbThumbUp />
                    </i>
                    <span>点赞</span>
                  </li>
                  <li className="flex items-center">
                    <i>
                      <IoStar />
                    </i>
                    <span>收藏</span>
                  </li>
                  <li className="flex items-center">
                    <i>
                      <RiSendPlaneFill />
                    </i>
                    <span>评论</span>
                  </li>
                  <li className="flex items-center">
                    <i>
                      <IoIosShareAlt />
                    </i>
                    <span>转发</span>
                  </li>
                </ul>
              </footer>
            </footer>
          </main>
        </motion.div>
      ))}
      <div>
        {selectedId >= 0 && (
          <div
            className="fixed left-0 top-0 w-full h-full z-10"
            onClick={() => setSelectedId(-1)}
          ></div>
        )}
      </div>
      {/* <div
        className="absolute bottom-0 w-8 h-8 bg-green-500"
        style={{
          top: `${maxH}px`,
        }}
        ref={bottomElRef}
      >
        123
      </div> */}
    </main>
  );
}
