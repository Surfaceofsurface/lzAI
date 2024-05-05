import Banner from "@/app/banner";
import Nav from "@/app/nav";
import AITools from "@/app/aitools";
import PromptShare from "@/app/promptShare";
import AICollege from "@/app/aiCollege";

export default function Home() {
  return (
    <div>
      <div className="bg-[url('/homeAstro.png')] h-screen bg-cover ">
        <Banner></Banner>
        <Nav highlightIndex={0}></Nav>
      </div>

      <main className="p-12 flex flex-col gap-12">
        <AITools></AITools>
        <PromptShare></PromptShare>
        <hr className="block border-t-0 mt-12 w-4/5 h-1 bg from-transparent via-[#0000ff]  to-transparent bg-gradient-to-r m-auto clip-path-polygon-[50%_0,100%_50%,50%_100%,0_50%]" />
        <AICollege></AICollege>
      </main>
    </div>
  );
}
