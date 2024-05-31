"use client";
import Banner from "@/app/banner";
import Nav from "@/app/nav";
import AITools from "@/app/aitools";
import PromptShare from "@/app/promptShare";
import AICollege from "@/app/aiCollege";
import { FaAnglesDown } from "react-icons/fa6";
import Arc from "@/assets/arc.svg";
import { useState, useRef } from "react";

export default function Home() {
  const [homeIndex, setHomeIndex] = useState(1);

  const homeBgImgURLs = useRef([
    "/prompt3.png",
    "/homeAstro.png",
    "/promptAstro.png",
  ]);
  return (
    <div>
      <div
        className="bg-[url('/homeAstro.png')] h-screen bg-cover flex flex-col"
        style={{ backgroundImage: `url(${homeBgImgURLs.current[homeIndex]})` }}
      >
        <Banner></Banner>
        <Nav highlightIndex={0}></Nav>

        <hgroup className="flex-1 ml-14 mr-14 overflow-hidden">
          <div
            className="flex h-full items-stretch transition-transform"
            style={{
              transform: `translate(-${homeIndex * 100}%, 0)`,
            }}
          >
            <section className="basis-full flex-shrink-0 m-auto space-y-4">
              <h2 className="font-bold text-4xl">提示词功能</h2>
              <p className="leading-8">
                提示词创造你想要的
                <br /> 帮助用户更快速、准确地表达他们的意图
                <br />
                并充分利用人工智能工具的功能和潜力
              </p>
            </section>

            <section className="basis-full flex-shrink-0 flex items-stretch justify-center gap-12">
              <div className="flex flex-col basis-0 flex-1 justify-center gap-4   center">
                <h3 className="font-bold text-2xl">
                  满足用户使用AI多元化，差异化
                </h3>
                <h2 className="font-bold text-4xl">
                  让每一个使用AI的人事半功倍探索无限可能。
                </h2>
                <p className="text-lg">
                  Satisfy users&apos; diverse and differentiated AI needs,
                  Enable every AI user to achieve twice the results with half
                  the effort, Explore endless possibilities.
                </p>
              </div>

              <div className="relative basis-0 flex-1 flex items-center justify-center flex-col gap-4">
                <h1 className="font-bold text-6xl">Prompt Flow</h1>
                <h3 className="font-bold text-2xl">AI users</h3>
                <Arc className="absolute w-full h-full"></Arc>
              </div>
            </section>

            <section className="basis-full flex-shrink-0 m-auto space-y-4 text-end">
              <h2 className="font-bold text-4xl">AI学院</h2>
              <p className="leading-8">
                掌握 AI 软件的精髓
                <br />
                在AI学院！我们的课程覆盖各类AI软件的基础知识和高级应用
                <br />
                让您轻松掌握人工智能工具，实现您的创意和目标
              </p>
            </section>
          </div>
        </hgroup>

        <div className="flex justify-between ml-14 mr-14 mb-10">
          <button
            onClick={() =>
              setHomeIndex(
                (i) =>
                  (i - 1 + homeBgImgURLs.current.length) %
                  homeBgImgURLs.current.length
              )
            }
            className="w-12 h-12 font-bold text-5xl rounded-full from-[#0000ff] to-transparent bg-gradient-to-r"
          >
            &lt;
          </button>
          <button className="rounded-full p-1 leading-none from-[#0000ff] to-transparent bg-gradient-to-b">
            <span className="text-xs">
              下<br />滑
            </span>
            <FaAnglesDown />
          </button>
          <button
            onClick={() =>
              setHomeIndex((i) => (i + 1) % homeBgImgURLs.current.length)
            }
            className="w-12 h-12 font-bold text-5xl rounded-full from-[#0000ff] to-transparent bg-gradient-to-l"
          >
            &gt;
          </button>
        </div>
      </div>

      <main className="p-12 flex flex-col gap-12">
        <AITools></AITools>
        <PromptShare></PromptShare>
        <hr className="block border-t-0 mt-12 w-4/5 h-1 from-transparent via-[#0000ff]  to-transparent bg-gradient-to-r m-auto clip-path-polygon-[50%_0,100%_50%,50%_100%,0_50%]" />
        <AICollege></AICollege>
      </main>
    </div>
  );
}
