"use client";
import Link from "next/link";
import Image from "next/image";
import useNavIndex from "@/utils/useNavIndex";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import WaterFall from "@/components/waterfall";
import Loading from "@/assets/loading.svg";
import { IoIosShareAlt } from "react-icons/io";
import { IoClose, IoStar } from "react-icons/io5";
import { RiSendPlaneFill } from "react-icons/ri";
import { TbThumbUp } from "react-icons/tb";
import Triangle from "@/assets/triangle.svg";

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
const CardContent: WaterFallCardContent = function CardContent(
  id: number,
  isSelected: boolean,
  setSelectedId: Dispatch<SetStateAction<number>>
) {
  const [userInfo, setUserInfo] = useState<
    PromptListDetailFromApi["user"] | null
  >(null);
  const [baseModel, setBaseModel] = useState<
    PromptListDetailFromApi["base"] | null
  >(null);
  const [potPrompt, setPotPrompt] = useState<
    PromptListDetailFromApi["prompt"] | null
  >(null);
  const [ngtPrompt, setNgtPrompt] = useState<
    PromptListDetailFromApi["negative_prompt"] | null
  >(null);
  useEffect(() => {
    fetch(
      `http://121.196.237.175:61087/api/creator/detail?&id=${id}&type=image`
    )
      .then((res) => res.json())
      .then((data: PromptListDetailFromApi) => {
        setUserInfo(data.user);
        setBaseModel(data.base);
        setPotPrompt(data.prompt);
        setNgtPrompt(data.negative_prompt);
      });
  }, [id]);
  return (
    <main
      className={`flex-col ${
        isSelected ? "flex basis-0 " : ""
      } flex-shrink-0 grow-[1] divide-y overflow-y-auto`}
    >
      <header className="flex flex-col gap-1 p-4 ">
        <button
          className="ml-auto hover:bg-red-700 rounded-md"
          onClick={(e) => {
            e.stopPropagation();
            setSelectedId(-1);
          }}
        >
          <IoClose />
        </button>
        <div className="flex justify-between">
          <div className="flex items-center gap-2">
            <Image
              src={userInfo?.avatar || ""}
              height={999}
              width={999}
              alt="头像"
              className="rounded-full w-8 h-8"
            ></Image>
            <div>{userInfo?.nickname}</div>
          </div>

          <div className="flex gap-2">
            <button className="bg-blue-700 rounded-full pl-2 pr-2">关注</button>
            <button className="bg-gray-700 rounded-full pl-2 pr-2">
              已关注
            </button>
          </div>
        </div>
      </header>
      <main className="flex-1 grid grid-cols-2 grid-rows-[repeat(2,minmax(0,96px))] p-4 gap-4">
        <dl className="bg-neutral-800 rounded-md p-3 overflow-x-auto">
          <dt className="text-white font-semibold">基准模型</dt>
          <div className="flex justify-between gap-2">
            <dt className="flex-shrink-0">模型名称</dt>
            <dd className="p-1 pt-0 pb-0 ring-1 ring-slate-600 rounded">
              {baseModel?.name}
            </dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="flex-shrink-0">模型类型</dt>
            <dd className="text-slate-400 divide-x-2 divide-slate-400 ">
              <span className="pr-1">{baseModel?.type}</span>
              <span className="pl-1 text-sm">{baseModel?.version}</span>
            </dd>
          </div>
        </dl>
        <dl className="bg-neutral-800 rounded-md p-3 overflow-x-auto">
          <dt className="text-white font-semibold">微调模型</dt>
          <div className="flex justify-between gap-2">
            <dt className="flex-shrink-0">模型名称</dt>
            <dd className="p-1 pt-0 pb-0 ring-1 ring-slate-600 rounded">
              Fresh Ideas@Ink imagery_SDXL
            </dd>
          </div>
          <div className="flex justify-between gap-2">
            <dt className="flex-shrink-0">模型类型</dt>
            <dd className="text-slate-400 divide-x-2 divide-slate-400 ">
              <span className="pr-1">LORA</span>
              <span className="pl-1 text-sm">v1.0</span>
            </dd>
          </div>
        </dl>
        <dl className="bg-neutral-800 rounded-md p-3 overflow-x-auto">
          <dt className="text-white font-semibold">正向提示词</dt>
          <div className="flex flex-wrap gap-2">
            {potPrompt?.split(",").map((item) => (
              <dd className="p-1 pt-0 pb-0 ring-1 ring-slate-600 rounded">
                {item}
              </dd>
            ))}
          </div>
        </dl>
        <dl className="bg-neutral-800 rounded-md p-3 overflow-x-auto">
          <dt className="text-white font-semibold">负向提示词</dt>
          <div className="flex flex-wrap gap-2">
            {ngtPrompt?.split(",").map((item) => (
              <dd className="p-1 pt-0 pb-0 ring-1 ring-slate-600 rounded">
                {item}
              </dd>
            ))}
          </div>
        </dl>
      </main>
      <footer className="p-4 ">
        <div className="text-neutral-400">共14条评论</div>
        <ul className="p-2">
          <li>
            <div className="flex gap-2 items-center">
              <div className="bg-slate-200 rounded-full w-8 h-8"></div>
              <div>xxx</div>
            </div>
            <div className="p-4 pt-1 pb-1">
              <p>很好...</p>
              <button className="flex items-center text-xs">
                <span>展开一条回复</span>

                <Triangle
                  width="6"
                  height="6"
                  className="fill-white"
                ></Triangle>
              </button>
            </div>
          </li>
        </ul>
        <footer className="flex justify-between pb-2">
          <div className="relative p-4 pt-1 pb-1">
            <div className="absolute bg-black rounded-full w-6 h-6 ml-1 top-[calc(50%-0.75rem)]"></div>
            <input
              type="text"
              placeholder="说点什么..."
              className="bg-gray-300 text-black rounded-full h-8 pl-9 pr-4 w-40"
            />
          </div>
          <ul className="flex gap-2">
            <li className="flex items-center">
              <i>
                <TbThumbUp />
              </i>
              <span>点赞</span>
            </li>
            <li className="flex items-center">
              <i>
                <IoStar />
              </i>
              <span>收藏</span>
            </li>
            <li className="flex items-center">
              <i>
                <RiSendPlaneFill />
              </i>
              <span>评论</span>
            </li>
            <li className="flex items-center">
              <i>
                <IoIosShareAlt />
              </i>
              <span>转发</span>
            </li>
          </ul>
        </footer>
      </footer>
    </main>
  );
};
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
          <WaterFall imgSrcs={imgSrcs} cardContent={CardContent}></WaterFall>
        ) : (
          <Loading className="inline h-5 w-5 animate-spin text-white"></Loading>
        )}
      </main>
    </>
  );
}
