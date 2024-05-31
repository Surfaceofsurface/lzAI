"use client";
import Link from "next/link";
import Image from "next/image";
import { useLocalStorage } from "@reactuses/core";
export default function Banner() {
  const [login, _] = useLocalStorage("login", false);
  const [userInfo, __] = useLocalStorage<UserLoginRes>("info", null, {
    serializer: {
      read: JSON.parse,
      write: JSON.stringify,
    },
  });
  return (
    <header className="flex justify-between bg-black h-6 p-10 pt-8 pb-8">
      <div className="flex flex-col justify-center text-sm md:text-base">
        <b>让每一个使用AI的人事半功倍</b>
        <b>sfdafjaijfajpf fdafaffa dfadaaw</b>
      </div>
      <div className="items-center gap-2 hidden sm:flex">
        <span>
          <div
            className={`bg-slate-200 rounded-full w-8 h-8 ${
              login ? "hidden" : ""
            }`}
          ></div>
          <Image
            className={`rounded-full ${login ? "" : "hidden"}`}
            height={32}
            width={32}
            alt="头像"
            src={userInfo?.avatar || ""}
          ></Image>
        </span>
        <div className={`flex gap-2 ${login ? "hidden" : ""}`}>
          <Link href="/login">登录</Link>
          <span>|</span>
          <Link href="/register">注册</Link>
        </div>
      </div>
    </header>
  );
}
