"use client";
import WaterFall from "@/components/waterfall";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import useNavIndex from "../nav/useNavIndex";
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

export default function Page() {
  const rootRef = useRef<HTMLDivElement>(null);
  const observerOption = {
    root: rootRef.current,
    rootMargin: "-5px",
    threshold: 1,
  };
  //有问题！！！
  const [asideIndex, setAsideIndex] = useNavIndex(() => [], observerOption);
  const [imgSrcs, setImageSrcs] = useState<PromptInfo[]>([]);
  useEffect(() => {
    fetch("http://121.196.237.175:61087/api/creator/search?input&page", {
      headers: {
        "Cache-Control": "no-cache",
      },
    })
      .then((res) => res.json())
      .then((data: PromptListFromApi) => {
        setImageSrcs(
          data.map(({ id, url }) => {
            return { id, src: url };
          })
        );
      });
  }, []);
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
          {imgSrcs.length > 0 ? (
            <WaterFall imgSrcs={imgSrcs}></WaterFall>
          ) : (
            <Loading className="inline h-5 w-5 animate-spin text-white"></Loading>
          )}
        </main>
      </main>
    </>
  );
}
