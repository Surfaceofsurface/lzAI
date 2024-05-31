"use client";

import Link from "next/link";
import {
  Dispatch,
  FormEvent,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { useLocalStorage } from "@reactuses/core";
import StepOne from "@/components/form/accountAndPsw";
import StepTwo from "@/components/form/vrfCode";
import { handleRegister } from "@/app/actions/handleRegister";
import SubmitButton from "@/components/form/submitBtn";
import { useFormState } from "react-dom";
import { redirect } from "next/navigation";
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
  CODE_USR_E,
  REG_OK,
  REG_CODE_E,
  REG_UNKNOWN,
}
export default function Register() {
  /*TODO: 
  -.后端返回失败结果的处理
  2.验证码发送成功后的倒计时
  3.注册功能
   */
  const [formMsg, setFormMsg] = useState("");
  const regForm = useRef<AccountAndPswRef>(null);
  const codeForm = useRef<VrfCodeRef>(null);
  const [_, setLocalLogin] = useLocalStorage("login", false);
  const [__, setUserInfo] = useLocalStorage<UserLoginRes>("info", null, {
    serializer: {
      read: JSON.parse,
      write: JSON.stringify,
    },
  });
  const [formRes, formAction] = useFormState(handleRegister, {
    msg: FormActionState.INIT,
  });

  const formActionState = formRes.msg;
  const step = [
    FormActionState.CODE_UNKNOWN,
    FormActionState.CODE_USR_E,
    FormActionState.INIT,
  ].includes(formActionState)
    ? 1
    : formActionState === FormActionState.REG_OK
    ? 3
    : 2;
  useEffect(() => {
    if (formActionState === FormActionState.CODE_UNKNOWN) {
      setFormMsg("无法连接到服务器，请稍后再试");
    } else if (formActionState === FormActionState.CODE_USR_E) {
      setFormMsg("该用户已经注册过了");
    } else if (formActionState === FormActionState.CODE_OK) {
      setFormMsg("");
    } else if (formActionState === FormActionState.REG_CODE_E) {
      setFormMsg("验证码错误");
    } else if (formActionState === FormActionState.REG_UNKNOWN) {
      setFormMsg("无法连接到服务器，请稍后再试");
    } else if (formActionState === FormActionState.REG_OK) {
      const okPayload = (formRes as { msg: 5; payload: UserLoginRes }).payload;
      setLocalLogin(true);
      setUserInfo(okPayload);
      redirect("/");
    }
  }, [formActionState]);
  function handleAccountInput(
    e: FormEvent<HTMLInputElement>,
    setAccoutState: Dispatch<SetStateAction<FormState>>
  ) {
    const value = e.currentTarget.value;
    if (!emailRegex.test(value)) {
      setFormMsg("请输入格式正确的邮箱");
      setAccoutState(FormState.ERR);
    } else {
      setFormMsg("");
      setAccoutState(FormState.CORRECT);
    }
  }
  function handlePswInput(
    e: FormEvent<HTMLInputElement>,
    setPswState: Dispatch<SetStateAction<FormState>>
  ) {
    const psw = e.currentTarget.value;
    if (!pswRegex.test(psw)) {
      setFormMsg("请输入密码");
      setPswState(FormState.ERR);
    } else {
      setFormMsg("");
      setPswState(FormState.CORRECT);
    }
  }
  function handleSubmitClick(e: MouseEvent) {
    if (formActionState === FormActionState.CODE_OK) {
      //注册
      if (
        !(
          regForm.current &&
          codeForm.current &&
          regForm.current.getAccount() &&
          regForm.current.getPsw() &&
          codeForm.current.getCode() !== void 0 &&
          codeForm.current.getAgree() !== void 0
        )
      ) {
        return setFormMsg("发生了意料之外的错误，请刷新页面");
      }
      if (!codeRegex.test(codeForm.current.getCode())) {
        e.preventDefault();
        return setFormMsg("请输入6位验证码");
      }
      if (!codeForm.current.getAgree()) {
        e.preventDefault();
        return setFormMsg("同意服务条款后即可注册");
      }
      //默认会使用html的原生表单功能发送数据
      return;
    } else {
      //发送验证码
      if (
        !(
          regForm.current &&
          regForm.current.getAccount() !== void 0 &&
          regForm.current.getAccount() !== void 0 &&
          regForm.current.getPsw() !== void 0
        )
      ) {
        e.preventDefault();
        return setFormMsg("错误：页面中找不到邮箱输入框，请刷新页面");
      }
      const account = regForm.current.getAccount();
      const psw = regForm.current.getPsw();

      if (!emailRegex.test(account)) {
        e.preventDefault();
        return setFormMsg("请输入格式正确的邮箱");
      }
      if (!pswRegex.test(psw)) {
        e.preventDefault();
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
            <Link className="text-sky-400" href="/login">
              立即登录
            </Link>
          </p>
        </header>

        <form action={formAction} className="flex flex-col gap-4">
          {
            <StepOne
              setFormMsg={setFormMsg}
              onPswInput={handlePswInput}
              onAccountInput={handleAccountInput}
              display={step === 1}
              ref={regForm}
            />
          }
          {step === 2 && (
            <StepTwo account={regForm.current!.getAccount()} ref={codeForm} />
          )}
          <div className="text-xs text-red-500">{formMsg}</div>
          <SubmitButton onClick={handleSubmitClick}>
            {formActionState !== FormActionState.CODE_OK &&
            formActionState !== FormActionState.REG_OK
              ? "获取验证码"
              : "注册并登录"}
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
