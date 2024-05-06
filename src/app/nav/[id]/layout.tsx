"use client";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
export default function DynamicNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const params = useSearchParams();
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
    <main className="flex flex-1 overflow-hidden">
      <aside className="basis-0 grow-[1]">
        <ul className="flex flex-col pt-4 gap-4 text-sm font-semibold">
          {navAsideData.map((item, i) => (
            <li
              key={item.href}
              className={`flex justify-center ${
                String(i) === params.get("i")
                  ? "bg-gradient-to-r from-[#0000ff]"
                  : ""
              }`}
            >
              <Link href={item.href}>{item.title}</Link>
            </li>
          ))}
        </ul>
      </aside>
      <main className="basis-0 grow-[9] h-full overflow-y-scroll scroll-smooth bg-neutral-900 p-3 text-gray-400">
        {children}
      </main>
    </main>
  );
}
