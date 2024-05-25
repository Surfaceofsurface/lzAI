"use client";

import Link from "next/link";
import { FormEvent, MouseEvent, use, useEffect, useRef, useState } from "react";
import StepOne from "./step1";
import StepTwo from "./step2";
import { handleRegister } from "@/app/actions/handleRegister";
import SubmitButton from "./submitBtn";
import { useFormState } from "react-dom";

const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const pswRegex = /^.+$/;
const codeRegex = /^\d{6}$/;
enum FormState {
  UNTOUCH,
  ERR,
  CORRECT,
}
enum FormActionState {
  INIT = 1,
  CODE_OK,
  CODE_UNKNOWN,
  REG_OK,
}
export default function Login() {
  /*TODO: 
  -.后端返回失败结果的处理
  2.验证码发送成功后的倒计时
  3.注册功能
   */
  const [formMsg, setFormMsg] = useState("");
  const regForm = useRef<StepOneRef>(null);

  const agreeCheckbox = useRef<HTMLInputElement | null>(null);
  const [{ msg: formActionState }, formAction] = useFormState(handleRegister, {
    msg: FormActionState.INIT,
  });
  useEffect(() => {
    if (formActionState === FormActionState.CODE_UNKNOWN) {
      setFormMsg("无法连接到服务器，请稍后再试");
    }
    if (formActionState === FormActionState.CODE_OK) {
      setFormMsg("");
    }
  }, [formActionState]);

  function handleSubmitClick(e: MouseEvent) {
    if (formActionState === FormActionState.CODE_OK) {
      //注册
      if (
        !(
          regForm.current &&
          regForm.current.getAccount() &&
          regForm.current.getPsw()
        )
      ) {
        return setFormMsg("发生了意料之外的错误，请刷新页面");
      }
      //默认会使用html的原生表单功能发送数据
      return;
    } else {
      //发送验证码
      if (!regForm.current) {
        return setFormMsg("错误：页面中找不到邮箱输入框，请刷新页面");
      }
      const account = regForm.current.getAccount();
      const psw = regForm.current.getPsw();

      if (!regForm.current.getAccount()) {
        return setFormMsg("错误：页面中找不到账号输入框，请刷新页面");
      }
      if (!regForm.current.getPsw()) {
        return setFormMsg("错误：页面中找不到密码输入框，请刷新页面");
      }

      if (!emailRegex.test(account)) {
        return setFormMsg("请输入格式正确的邮箱");
      }
      if (!pswRegex.test(psw)) {
        return setFormMsg("密码不能为空");
      }
    }
  }
  return (
    <div className="h-screen w-screen flex items-center ">
      <div className="flex flex-col gap-4 p-9 m-auto bg-stone-900 w-full md:w-3/5 lg:w-2/5 h-[80vh] min-h-[420px] rounded-3xl">
        <header className="space-y-2">
          <h2 className="text-3xl font-bold">注册Prompt Flow</h2>
          <p className="text-sm">
            <span>已有账号？</span>
            <span className="text-sky-400">立即登录</span>
          </p>
        </header>

        <form action={formAction} className="flex flex-col gap-4">
          {
            <StepOne
              setFormMsg={setFormMsg}
              display={
                formActionState !== FormActionState.CODE_OK &&
                formActionState !== FormActionState.REG_OK
              }
              ref={regForm}
            />
          }
          {formActionState === FormActionState.CODE_OK && (
            <StepTwo account={regForm.current!.getAccount()} />
          )}
          <div className="text-xs text-red-500">{formMsg}</div>
          <SubmitButton onClick={handleSubmitClick}>
            {formActionState !== FormActionState.CODE_OK &&
            formActionState !== FormActionState.REG_OK
              ? "获取验证码"
              : "注册"}
          </SubmitButton>
        </form>

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
