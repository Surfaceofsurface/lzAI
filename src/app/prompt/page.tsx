"use client";
import { motion, AnimatePresence } from "framer-motion";
import { IoClose, IoStar } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { TbThumbUp } from "react-icons/tb";
import { IoIosShareAlt } from "react-icons/io";
import Triangle from "@/assets/triangle.svg";
import { useRef, useState } from "react";
import Image from "next/image";
import useNavIndex from "../nav/useNavIndex";
import Link from "next/link";
export default function PromptPage() {
  const navAsideData = [
    {
      title: "精选",
      href: "#select",
    },
    {
      title: "最新",
      href: "#latest",
    },
    {
      title: "周排行",
      href: "#weekly",
    },
  ];
  const d = [
    "/artwoman.png",
    "/vilain.png",
    "/elephant.png",
    "/bears.png",
    "/warf.png",
    "/coca.png",
    "/paint.png",
    "/soldier.png",
  ];
  const [selectedId, setSelectedId] = useState("");
  const rootRef = useRef<HTMLDivElement>(null);
  const observerOption = {
    root: rootRef.current,
    rootMargin: "-5px",
    threshold: 1,
  };
  //有问题！！！
  const [asideIndex, setAsideIndex] = useNavIndex(() => [], observerOption);
  return (
    <>
      <main className="flex flex-1 overflow-auto" ref={rootRef}>
        <aside className="basis-0 grow-[1]">
          <ul className="flex flex-col pt-4 gap-4 text-sm font-semibold">
            {navAsideData.map((item, i) => (
              <li
                key={item.href}
                className={`flex justify-center ${
                  asideIndex === i ? "bg-gradient-to-r from-[#0000ff]" : ""
                }`}
              >
                <Link href={item.href}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </aside>
        <ul className="relative basis-0 grow-[9] flex flex-wrap lg:flex-row">
          {d.map((src) => (
            <li
              key={src}
              className={"overflow-hidden grow-0 shrink-0 basis-1/3"}
            >
              <motion.div
                layout
                onClick={() => setSelectedId(src)}
                className={`bg-neutral-900 ${
                  selectedId === src
                    ? "fixed left-0 top-0 z-10 m-12 flex items-center rounded-xl overflow-hidden"
                    : ""
                }`}
              >
                <motion.div layout className={`flex`}>
                  <motion.div
                    layout
                    className={`${
                      selectedId === src
                        ? "basis-0 grow-[1] h-[75vh]"
                        : "basis-full flex-shrink-0"
                    }`}
                  >
                    <Image
                      height={999}
                      width={999}
                      alt="next"
                      src={src}
                      className="h-full object-cover"
                    ></Image>
                  </motion.div>

                  <main
                    className={`flex-col ${
                      selectedId === src ? "flex basis-0 " : "hidden"
                    } flex-shrink-0 grow-[1]`}
                  >
                    <header className="flex flex-col border-b gap-1 p-4 pb-1">
                      <button
                        className="ml-auto hover:bg-red-700 rounded-md"
                        onClick={() => setSelectedId("")}
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
              </motion.div>
              <div
                className={`invisible ${
                  selectedId === src ? "block" : "hidden"
                }`}
              >
                {/* 为了防止动画发生时内容由于绝对定位坍塌 */}

                <Image height={999} width={999} alt="next" src={src}></Image>
              </div>
            </li>
          ))}
        </ul>
      </main>
      <div>
        {selectedId && (
          <div
            className="fixed left-0 top-0 w-full h-full"
            onClick={() => setSelectedId("")}
          ></div>
        )}
      </div>
    </>
  );
}
