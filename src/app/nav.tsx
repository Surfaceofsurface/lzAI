import Link from "next/link";
import Search from "@/assets/search.svg";
import Triangle from "@/assets/triangle.svg";
import ActiveLogo from "@/components/activelogo";
export default function Nav({ highlightIndex }: { highlightIndex: number }) {
  const navLinks = [
    { title: "首页", href: "/" },
    {
      title: "AI导航站",
      href: "/nav",
    },
    {
      title: "提示词",
      href: "/prompt",
      subLinks: [
        { title: "AI写作与文本", href: "/" },
        { title: "AI图像与设计", href: "/" },
        { title: "AI音频与视频", href: "/" },
      ],
    },
    {
      title: "AI学院",
      href: "/",
      subLinks: [
        { title: "chatGPT教程", href: "/" },
        { title: "Midjourney教程", href: "/" },
        { title: "stable Diffusion教程", href: "/" },
        { title: "sora教程", href: "/" },
      ],
    },
  ];
  return (
    <nav className="flex items-center p-10 pt-3 pb-3 bg-black/50 gap-6 md:gap-8 lg:gap-12 z-10">
      <div className="flex md:flex-col gap-4 md:gap-1 justify-center items-center">
        <ActiveLogo></ActiveLogo>
        <span>
          <b>Prompt Flow</b>
        </span>
      </div>
      <main className="flex-grow hidden md:flex">
        <ul className="flex items-stretch justify-center gap-4 w-full">
          {navLinks.map((link, i) => (
            <li
              key={link.title}
              className="group relative p-2 pt-1 pb-1 flex-grow-[1]  flex items-center justify-center hover:scale-105 group transition-transform duration-500 ease-in-out z-10"
            >
              <Link
                href={link.href}
                className={`p-2 pt-1 pb-1 flex items-center justify-center ${
                  i === highlightIndex
                    ? "h-12 bg-gradient-to-r from-[#0000ff] clip-path-polygon-[15%_0%,0%_100%,85%_100%,100%_0%] text-lg"
                    : ""
                }`}
              >
                <b className={i === highlightIndex ? "p-3" : ""}>
                  {link.title}
                </b>
                {link.subLinks && (
                  <span className="mx-8">
                    <Triangle width="9" height="9" className="fill-white" />
                  </span>
                )}
              </Link>
              {link.subLinks && (
                <ul className="group-hover:flex flex-col gap-2 hidden bg-neutral-900 absolute top-10 text-zinc-50 p-5 z-10">
                  {link.subLinks.map((subLink) => (
                    <li
                      key={subLink.title}
                      className="text-nowrap hover:text-orange-400"
                    >
                      <Link href={subLink.href}>{subLink.title}</Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}

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
