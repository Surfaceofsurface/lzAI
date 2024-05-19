"use client";
import WaterFall from "@/components/waterfall";
import Link from "next/link";
import { useRef } from "react";
import useNavIndex from "../nav/useNavIndex";
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

export default function Page() {
  const rootRef = useRef<HTMLDivElement>(null);
  const observerOption = {
    root: rootRef.current,
    rootMargin: "-5px",
    threshold: 1,
  };
  //有问题！！！
  const [asideIndex, setAsideIndex] = useNavIndex(() => [], observerOption);
  const imgSrcs = [
    "/coca.png",
    "/friday.png",
    "/fotor.png",
    "/aivesa.png",
    "/next.svg",
    "/hayo.png",
    "/logo.svg",
    "/artwoman.png",
    "/vilain.png",
    "/elephant.png",
    "/bears.png",
    "/warf.png",
    "/paint.png",
    "/soldier.png",
  ];
  return (
    <>
      <main className="flex flex-1" ref={rootRef}>
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
        <main className="relative basis-0 grow-[9]">
          <WaterFall imgSrcs={imgSrcs}></WaterFall>
        </main>
      </main>
    </>
  );
}
