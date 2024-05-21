"use client";

import { motion } from "framer-motion";
import WeChatSVG from "@/assets/wechat.svg";
import AICard from "@/components/aicard";
import Link from "next/link";
import { useRef, useEffect } from "react";
import useNavIndex from "./useNavIndex";

import { navCardsData } from "./pageData";

export default function NavMain() {
  const rootRef = useRef<HTMLDivElement>(null);
  const itemsRef = useRef<Map<string, HTMLElement>>(new Map());
  const observerOption = {
    root: rootRef.current,
    rootMargin: "-5px",
    threshold: [0, 0.2, 0.4, 0.6, 0.8, 1],
  };
  const [asideIndex, setAsideIndex] = useNavIndex(
    () => Array.from(itemsRef.current.values()),
    observerOption
  );
  const navAsideData = [
    {
      title: "AI聊天与助手",
      href: "#chat",
    },
    {
      title: "AI写作与文本",
      href: "#write",
    },
    {
      title: "AI图像与设计",
      href: "#design",
    },
    {
      title: "AI音频与视频",
      href: "#media",
    },
  ];

  return (
    <main className="flex flex-1 overflow-hidden" ref={rootRef}>
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
      <main className="basis-0 grow-[9] h-full overflow-y-scroll bg-neutral-900 p-3 text-gray-400">
        {navAsideData.map((item, itemI) => (
          <section
            id={item.href.substring(1)}
            key={item.title}
            className="mb-8"
          >
            <hgroup className="flex justify-between">
              <h4
                className="flex"
                ref={(el) => {
                  const map = itemsRef.current;
                  if (el) {
                    map.set(item.title, el);
                  } else {
                    map.delete(item.title);
                  }
                }}
              >
                <WeChatSVG className="w-6 h-6 mr-2"></WeChatSVG>
                <span>{item.title}</span>
              </h4>
              <a>点击查看更多+</a>
            </hgroup>
            <div className="pt-4">
              <ul className="grid grid-cols-5 grid-rows-2 text-xs gap-4">
                {navCardsData
                  .filter((card) => card.group === item.title)
                  .map((card) => (
                    <motion.li
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      key={card.title}
                    >
                      <Link href={`/nav/${card.title}?i=` + itemI}>
                        <AICard
                          title={card.title}
                          cover={card.cover}
                          describe={card.describe.slice(0, 20) + "..."}
                          tags={card.tag}
                        ></AICard>
                      </Link>
                    </motion.li>
                  ))}
              </ul>
            </div>
          </section>
        ))}
      </main>
    </main>
  );
}
