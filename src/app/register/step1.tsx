import {
  useRef,
  useState,
  forwardRef,
  useImperativeHandle,
  FormEvent,
  Dispatch,
  SetStateAction,
} from "react";
enum FormState {
  UNTOUCH,
  ERR,
  CORRECT,
}
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const pswRegex = /^.+$/;
export default forwardRef<StepOneRef, StepOneProps>(function StepOne(
  {
    setFormMsg,
    display = true,
  }: {
    setFormMsg: Dispatch<SetStateAction<string>>;
    display: boolean;
  },
  ref
) {
  const accoutForm = useRef<HTMLInputElement | null>(null);
  const pswForm = useRef<HTMLInputElement | null>(null);
  const [accoutState, setAccoutState] = useState(FormState.UNTOUCH);
  const [pswState, setPswState] = useState(FormState.UNTOUCH);
  useImperativeHandle(ref, () => {
    return {
      getAccount() {
        return accoutForm.current!.value;
      },
      getPsw() {
        return pswForm.current!.value;
      },
    };
  });
  function handleAccountInput(e: FormEvent<HTMLInputElement>) {
    const value = e.currentTarget.value;
    if (!emailRegex.test(value)) {
      setFormMsg("请输入格式正确的邮箱");
      setAccoutState(FormState.ERR);
    } else {
      setFormMsg("");
      setAccoutState(FormState.CORRECT);
    }
  }
  function handlePswInput(e: FormEvent<HTMLInputElement>) {
    const psw = e.currentTarget.value;
    if (!pswRegex.test(psw)) {
      setFormMsg("请输入密码");
      setPswState(FormState.ERR);
    } else {
      setFormMsg("");
      setPswState(FormState.CORRECT);
    }
  }
  return (
    <>
      <div className={`${display ? "" : "hidden"}`}>
        <input
          ref={accoutForm}
          name="account"
          type="text"
          placeholder="输入邮箱"
          onInput={handleAccountInput}
          className={`rounded-full w-full p-2 pl-4 pr-4 bg-stone-900 outline outline-1 outline-gray-500 transition-colors ${
            accoutState === FormState.ERR
              ? "outline-red-500 focus-within:outline-red-500 focus-visible:outline-red-500"
              : accoutState === FormState.CORRECT
              ? "outline-green-500 focus-within:outline-green-500 focus-visible:outline-green-500"
              : ""
          }`}
        />
      </div>

      <div
        className={`relative flex flex-col gap-4 ${display ? "" : "hidden"}`}
      >
        <input
          ref={pswForm}
          name="psw"
          type="password"
          placeholder="输入密码"
          onInput={handlePswInput}
          className={`rounded-full w-full p-2 pl-4 pr-4 bg-stone-900 outline outline-1 outline-gray-500 transition-colors ${
            pswState === FormState.ERR
              ? "outline-red-500 focus-within:outline-red-500 focus-visible:outline-red-500"
              : pswState === FormState.CORRECT
              ? "outline-green-500 focus-within:outline-green-500 focus-visible:outline-green-500"
              : ""
          }`}
        />
      </div>
    </>
  );
});
