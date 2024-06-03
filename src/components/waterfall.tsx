"use client";
import Image from "next/image";
import {
  useRef,
  useState,
  useEffect,
  memo,
  SyntheticEvent,
  useCallback,
} from "react";
import { motion } from "framer-motion";
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
const MemoizedListItem = memo(function ListItem({
  i,
  id,
  src,
  position,
  isSelected,
  setSelectedId,
  colW,
  cardContent,
  imgOnLoad,
}: WaterFallLiItemProps) {
  const [optimizedImgUrl, setOptimizedImgUrl] = useState("");
  return (
    <motion.div
      layout
      transition={isSelected ? openSpring : closeSpring}
      key={id}
      className={`flex overflow-hidden transition-[width] duration-300 bg-neutral-900 ${
        isSelected ? "fixed z-20 m-auto " : "absolute z-0"
      }`}
      onClick={() => setSelectedId(id)}
      style={{
        left: `${isSelected ? 0 : position[0] + "px"}`,
        top: `${isSelected ? 0 : position[1] + "px"}`,
        width: `${isSelected ? "80vw" : colW + "px"}`,
        height: `${
          isSelected ? "80vh" : (colW / position[2]) * position[3] + "px"
        }`,
        marginLeft: `${isSelected ? "10vw" : ""}`,
        marginTop: `${isSelected ? "10vh" : ""}`,
      }}
    >
      <motion.div
        layout
        style={{
          backgroundImage: `url(${optimizedImgUrl})`,
        }}
        className="flex flex-shrink-0 items-center"
      >
        <div className="flex flex-shrink-0 items-center h-full backdrop-blur">
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
                setOptimizedImgUrl(e.currentTarget.src);
                imgOnLoad(e, i);
              }}
            ></Image>
          </motion.span>
        </div>
      </motion.div>
      {cardContent(id, isSelected, setSelectedId)}
    </motion.div>
  );
});
export default function WaterFall({ imgSrcs, cardContent }: WaterFallProps) {
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
  const imgOnLoad = useCallback(
    (e: SyntheticEvent<HTMLImageElement, Event>, i: number) => {
      //find min col to insert
      const shouldInsertCol = getMinHeightCol.current();
      shouldInsertCol.add([e.currentTarget.width, e.currentTarget.height], i);
    },
    []
  );
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
        <MemoizedListItem
          i={i}
          id={id}
          src={src}
          position={positions[i]}
          isSelected={selectedId === id}
          setSelectedId={setSelectedId}
          colW={colW}
          cardContent={cardContent}
          imgOnLoad={imgOnLoad}
        ></MemoizedListItem>
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
