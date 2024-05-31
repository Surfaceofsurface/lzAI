"use client";
import AccountAndPsw from "@/components/form/accountAndPsw";
import SubmitButton from "@/components/form/submitBtn";
import { handleLogin } from "@/app/actions/handleLogin";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
import { useLocalStorage } from "@reactuses/core";
const LOGIN_NO_USR = 1;
const LOGIN_E_PSW = 2;
const LOGIN_E_NET = 3;
const LOGIN_INIT = 4;
export default function Login() {
  const [formMsg, setFormMsg] = useState("");
  const [localLogin, setLocalLogin] = useLocalStorage("login", false);
  const [__, setUserInfo] = useLocalStorage<UserLoginRes>("info", null, {
    serializer: {
      read: JSON.parse,
      write: JSON.stringify,
    },
  });
  const loginForm = useRef<AccountAndPswRef>(null);
  const [loginRes, formAction] = useFormState(handleLogin, {
    ok: false,
    cause: LOGIN_INIT,
  });
  useEffect(() => {
    if (localLogin) return redirect("/");
    if (loginRes.ok) {
      setLocalLogin(true);
      setUserInfo(loginRes.payload);
      return redirect("/");
    }

    if (loginRes.cause === LOGIN_INIT) return setFormMsg("");
    if (loginRes.cause === LOGIN_NO_USR) return setFormMsg("该用户尚未注册");
    if (loginRes.cause === LOGIN_E_PSW) return setFormMsg("密码错误");
    if (loginRes.cause === LOGIN_E_NET) return setFormMsg("无网络连接");
    setFormMsg("无网络连接");
  }, [loginRes, localLogin]);

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

        <form action={formAction} className="flex flex-col gap-4">
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
