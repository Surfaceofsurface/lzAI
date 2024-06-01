"use client";
import Link from "next/link";
import useNavIndex from "@/utils/useNavIndex";
import { useRef } from "react";
import WaterFall from "@/components/waterfall";
import Loading from "@/assets/loading.svg";
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
export default function Main({ imgSrcs }: { imgSrcs: WaterFallImgs[] }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const observerOption = {
    root: rootRef.current,
    rootMargin: "-5px",
    threshold: 1,
  };
  const [asideIndex, setAsideIndex] = useNavIndex(() => [], observerOption);

  return (
    <>
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
      <main className="relative basis-0 grow-[9]" ref={rootRef}>
        {imgSrcs.length > 0 ? (
          <WaterFall imgSrcs={imgSrcs}></WaterFall>
        ) : (
          <Loading className="inline h-5 w-5 animate-spin text-white"></Loading>
        )}
      </main>
    </>
  );
}
