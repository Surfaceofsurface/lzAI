"use client";
import Image from "next/image";
import Link from "next/link";
import Locate from "@/assets/locate.svg";
import { IoIosArrowForward } from "react-icons/io";
import { BiScan } from "react-icons/bi";
import { MdReport } from "react-icons/md";
import { usePathname } from "next/navigation";
export default async function Page() {
  const pathname = usePathname();
  const product = pathname.split("/")[2];
  //http://localhost:3000/nav/chatgpt?i=0
  const d = await fetch(
    `http://121.196.237.175:61087/api/system/product/detail?product=${product}`
  ).then((res) => res.json());
  return (
    <main className="p-16">
      <header className="flex gap-6 mb-12 mr-44">
        <div className="basis-0 grow-[1] flex flex-col text-white text-xs bg-black rounded-lg p-4">
          <div>
            <Image
              className="rounded-lg"
              height={999}
              width={999}
              alt="chatGPT"
              src="/chatgptPage.jpg"
            ></Image>
          </div>
        </div>
        <hgroup className="basis-0 grow-[2] flex flex-col justify-between gap-4">
          <div className="flex gap-2">
            <span className="text-xs bg-red-500 text-white rounded-lg p-1 flex justify-between">
              <i>
                <Locate className="w-4 h-4 stroke-white fill-transparent stroke-2"></Locate>
              </i>
              <span>{d.country}</span>
            </span>
            <span className="text-xs bg-red-500 text-white rounded-lg p-1 flex-center justify-center">
              {d.tag.map(t=>              <Link href="/nav#chat" className="flex-center justify-center">
                {t}
              </Link>)}

            </span>
          </div>
          <h2 className="text-2xl font-bold">{d.title}</h2>
          <p>{d.describe}</p>
          <span className="text-sm">
            <i>标签：</i>
            <span>AI聊天与助手</span>
          </span>
          <ul className="flex text-neutral-300 gap-2">
            <li className="rounded-lg bg-neutral-800 hover:bg-neutral-700 p-2">
              <Link
                href={d.link}
                className="flex items-center gap-2 "
              >
                <span>链接直达</span>
                <i>
                  <IoIosArrowForward></IoIosArrowForward>
                </i>
              </Link>
            </li>
            <li className="rounded-lg bg-neutral-800 hover:bg-neutral-700 p-2">
              <Link href="#" className="flex items-center gap-2">
                <span>手机查看</span>
                <i>
                  <BiScan></BiScan>
                </i>
              </Link>
            </li>
            <li className="rounded-lg bg-red-500 hover:bg-red-600 p-2">
              <Link href="#" className="flex items-center gap-2">
                <i>
                  <MdReport className="w-6 h-6"></MdReport>
                </i>
              </Link>
            </li>
          </ul>
        </hgroup>
      </header>
      <article>
        {d.article.map((t:string) => {        <p>
          {t}
        </p>})}

      </article>
    </main>
  );
}
