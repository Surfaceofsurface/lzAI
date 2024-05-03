import Image from "next/image";
import Link from "next/link";
import Search from "@/assets/search.svg";
import Triangle from "@/assets/triangle.svg";
export default function Nav() {
  return (
    <nav className="flex items-center p-10 pt-3 pb-3 bg-black/50 gap-6 md:gap-8 lg:gap-12 ">
      <div className="flex md:flex-col gap-4 md:gap-1 justify-center items-center">
        <Image src="/logo.svg" alt="OurLogo" height={55} width={55} />
        <span>
          <b>Prompt Flow</b>
        </span>
      </div>
      <main className="flex-grow hidden md:flex">
        <ul className="flex items-stretch justify-center gap-4 w-full">
          <li
            className="h-12 p-2 pt-1 pb-1 text-lg  flex items-center justify-center
              bg-gradient-to-r from-[#0000ff] clip-path-polygon-[15%_0%,0%_100%,85%_100%,100%_0%]
              flex-grow-[2]"
          >
            <Link href="/" className="">
              <b>首页</b>
            </Link>
          </li>
          <li className="p-2 pt-1 pb-1 flex-grow-[1] flex items-center justify-center">
            <Link href="/" className="">
              <b>AI导航站</b>
            </Link>
          </li>
          <li className="group relative p-2 pt-1 pb-1 flex-grow-[1]  flex items-center justify-center">
            <Link href="/" className="flex items-center justify-center flex-1">
              <b>提示词</b>
              <span className="ml-auto">
                <Triangle width="9" height="9" className="fill-white" />
              </span>
            </Link>
            <ul className="group-hover:flex flex-col gap-2 hidden bg-neutral-900 absolute top-10 text-zinc-50 p-5  ">
              <li className="text-nowrap hover:text-orange-400">
                <Link href="/">AI写作与文本</Link>
              </li>
              <li className="text-nowrap hover:text-orange-400">
                <Link href="/">AI图像与设计</Link>
              </li>
              <li className="text-nowrap hover:text-orange-400">
                <Link href="/">AI音频与视频</Link>
              </li>
            </ul>
          </li>
          <li className="group relative p-2 pt-1 pb-1 flex-grow-[1] flex items-center justify-center">
            <Link href="/" className="flex items-center justify-center flex-1">
              <b>AI学院</b>
              <span className="ml-auto">
                <Triangle width="9" height="9" className="fill-white" />
              </span>
            </Link>
            <ul className="group-hover:flex flex-col gap-2 hidden bg-neutral-900 absolute top-10 text-zinc-50 p-5  ">
              <li className="text-nowrap hover:text-orange-400">
                <Link href="/">chatGPT教程</Link>
              </li>
              <li className="text-nowrap hover:text-orange-400">
                <Link href="/">Midjourney教程</Link>
              </li>
              <li className="text-nowrap hover:text-orange-400">
                <Link href="/">stable Diffusion教程</Link>
              </li>
              <li className="text-nowrap hover:text-orange-400">
                <Link href="/">sora教程</Link>
              </li>
            </ul>
          </li>
          <li className="p-2 pt-1 pb-1 flex-grow-[1] flex items-center justify-center">
            <Link href="/" className="flex items-center justify-center">
              <b>AI提词器</b>
            </Link>
          </li>
          <li className="bg-gradient-to-r from-[#0000ff] p-2 pt-1 pb-1 flex-grow-[1] flex items-center justify-center">
            <Link href="/" className="flex items-center justify-center">
              <b>发布</b>
            </Link>
          </li>
        </ul>
      </main>
      <div className="relative ml-auto hidden lg:block max-w-64">
        <form action="">
          <button
            type="submit"
            className="absolute left-3 top-[calc(50%-10px)]"
          >
            <i>
              <Search height="20" width="20" />
            </i>
          </button>
          <input
            type="search"
            placeholder="搜索"
            className="bg-gray-200 h-10 rounded-3xl pl-10 pr-28 text-black w-full"
          />
          <div className="absolute right-3 top-0 h-full">
            <i className="absolute left-[-1rem] top-[calc(50%-4.5px)]">
              <Triangle width="9" height="9" className="fill-gray-500" />
            </i>
            <button className="text-black text-sm border-l-2 h-full pl-4 border-gray-500">
              SEARCH
            </button>
          </div>
        </form>
      </div>
      <div className="md:hidden ml-auto">更多</div>
    </nav>
  );
}
