import Banner from "@/app/banner";
import Nav from "@/app/nav";
import AITools from "@/app/aitools";
import PromptShare from "@/app/promptShare";
import AICollege from "@/app/aiCollege";
import { FaAnglesDown } from "react-icons/fa6";
import Arc from "@/assets/arc.svg";
export default function Home() {
  return (
    <div>
      <div className="bg-[url('/homeAstro.png')] h-screen bg-cover flex flex-col">
        <Banner></Banner>
        <Nav highlightIndex={0}></Nav>
        <hgroup className="flex flex-1 items-stretch justify-center ml-14 mr-14 gap-12">
          <div className="flex flex-col justify-center gap-4 basis-0 flex-1 center">
            <h3 className="font-bold text-2xl">满足用户使用AI多元化，差异化</h3>
            <h2 className="font-bold text-4xl">
              让每一个使用AI的人事半功倍探索无限可能。
            </h2>
            <p className="text-lg">
              Satisfy users&apos; diverse and differentiated AI needs, Enable
              every AI user to achieve twice the results with half the effort,
              Explore endless possibilities.
            </p>
          </div>

          <div className="relative basis-0 flex-1 flex items-center justify-center flex-col gap-4">
            <h1 className="font-bold text-6xl">Prompt Flow</h1>
            <h3 className="font-bold text-2xl">AI users</h3>
            <Arc className="absolute w-full h-full"></Arc>
          </div>
        </hgroup>
        <div className="flex justify-between ml-14 mr-14 mb-10">
          <button className="w-12 h-12 font-bold text-5xl rounded-full from-[#0000ff] to-transparent bg-gradient-to-r">
            &lt;
          </button>
          <button className="rounded-full p-1 leading-none from-[#0000ff] to-transparent bg-gradient-to-b">
            <span className="text-xs">
              下<br />滑
            </span>
            <FaAnglesDown />
          </button>
          <button className="w-12 h-12 font-bold text-5xl rounded-full from-[#0000ff] to-transparent bg-gradient-to-l">
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
