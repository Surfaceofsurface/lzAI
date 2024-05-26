"use client";
import AccountAndPsw from "@/components/form/accountAndPsw";
import SubmitButton from "@/components/form/submitBtn";
import { handleLogin } from "@/app/actions/handleLogin";
import { useRef, useState } from "react";
import Link from "next/link";

export default function Login() {
  const [formMsg, setFormMsg] = useState("");
  const loginForm = useRef<AccountAndPswRef>(null);
  return (
    <div className="h-screen w-screen flex items-center ">
      <div className="flex flex-col gap-4 p-9 m-auto bg-stone-900 w-full md:w-3/5 lg:w-2/5 h-[80vh] min-h-[420px] rounded-3xl">
        <header className="space-y-2">
          <h2 className="text-3xl font-bold">登录Prompt Flow</h2>
          <p className="text-sm">
            <span>还未拥有账号？</span>
            <Link className="text-sky-400" href="/register">
              立即注册
            </Link>
          </p>
        </header>

        <form action={handleLogin} className="flex flex-col gap-4">
          {
            <AccountAndPsw
              setFormMsg={setFormMsg}
              ref={loginForm}
              display={true}
            />
          }

          <div className="text-xs text-red-500">{formMsg}</div>
          <SubmitButton>登录</SubmitButton>
        </form>
        <div className="flex justify-between text-zinc-500 text-xs">
          <Link href="#" className="hover:text-sky-500 transition-colors">
            忘记密码？
          </Link>
        </div>
        <div className="flex items-center gap-2">
          <hr className="basis-0 flex-1 border-zinc-500" />
          <span>其他方式</span>
          <hr className="basis-0 flex-1 border-zinc-500" />
        </div>

        <footer className="flex justify-around">
          <div className="flex gap-2 justify-between items-center">
            <div className="bg-slate-200 rounded-full w-8 h-8"></div>
            <span>微信登录</span>
          </div>
        </footer>
      </div>
    </div>
  );
}
