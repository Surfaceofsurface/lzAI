"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
export default function PromptPage() {
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

  return (
    <ul className="relative flex flex-col lg:flex-row gap-4">
      <section className="basis-0 grow-[1]">
        {d.slice(0, 2).map((src) => (
          <>
            <div
              className={`invisible ${selectedId === src ? "block" : "hidden"}`}
            >
              <Image height={999} width={999} alt="next" src={src}></Image>
              {/* 为了防止动画发生时内容由于绝对定位坍塌 */}
            </div>
            <motion.div
              className={
                selectedId === src
                  ? "fixed top-0 w-full h-full p-12 pl-20 pr-20 bg-black/50"
                  : "relative"
              }
              key={src}
              onClick={() => {
                setSelectedId(src);
              }}
              layoutId={src}
            >
              <main
                className={`flex justify-around bg-green-300 h-full ${
                  selectedId === src ? "rounded-2xl" : "rounded-none"
                } overflow-hidden`}
              >
                <div className="flex h-full items-center basis-0 grow-[1]">
                  <Image height={999} width={999} alt="next" src={src}></Image>
                </div>
                {selectedId === src && (
                  <div className="basis-0 grow-[2]">123456789</div>
                )}
              </main>
            </motion.div>
          </>
        ))}
      </section>
      <section className="basis-0 grow-[1]">
        {d.slice(2, 3).map((src) => (
          <>
            <div
              className={`invisible ${selectedId === src ? "block" : "hidden"}`}
            >
              <Image height={999} width={999} alt="next" src={src}></Image>
              {/* 为了防止动画发生时内容由于绝对定位坍塌 */}
            </div>
            <motion.div
              className={selectedId === src ? "fixed bottom-0" : ""}
              key={src}
              onClick={() => {
                setSelectedId(src);
              }}
              layoutId={src}
            >
              <Image height={999} width={999} alt="next" src={src}></Image>
            </motion.div>
          </>
        ))}
      </section>
      <section className="basis-0 grow-[1]">
        {d.slice(3, 5).map((src) => (
          <>
            <div
              className={`invisible ${selectedId === src ? "block" : "hidden"}`}
            >
              <Image height={999} width={999} alt="next" src={src}></Image>
              {/* 为了防止动画发生时内容由于绝对定位坍塌 */}
            </div>
            <motion.div
              className={selectedId === src ? "fixed bottom-0" : ""}
              key={src}
              onClick={() => {
                setSelectedId(src);
              }}
              layoutId={src}
            >
              <Image height={999} width={999} alt="next" src={src}></Image>
            </motion.div>
          </>
        ))}
      </section>
      <section className="basis-0 grow-[1]">
        {d.slice(5).map((src) => (
          <>
            <div
              className={`invisible ${selectedId === src ? "block" : "hidden"}`}
            >
              <Image height={999} width={999} alt="next" src={src}></Image>
              {/* 为了防止动画发生时内容由于绝对定位坍塌 */}
            </div>
            <motion.div
              className={selectedId === src ? "fixed bottom-0" : ""}
              key={src}
              onClick={() => {
                setSelectedId(src);
              }}
              layoutId={src}
            >
              <Image height={999} width={999} alt="next" src={src}></Image>
            </motion.div>
          </>
        ))}
      </section>
    </ul>
  );
}
