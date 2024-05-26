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

export default forwardRef<AccountAndPswRef, AccountAndPswProps>(
  function StepOne(
    {
      setFormMsg,
      display = true,
      onPswInput,
      onAccountInput,
    }: {
      setFormMsg: Dispatch<SetStateAction<string>>;
      onPswInput?: (
        psw: FormEvent<HTMLInputElement>,
        setPswState: Dispatch<SetStateAction<FormState>>
      ) => any;
      onAccountInput?: (
        account: FormEvent<HTMLInputElement>,
        setAccoutState: Dispatch<SetStateAction<FormState>>
      ) => any;
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

    return (
      <>
        <div className={`${display ? "" : "hidden"}`}>
          <input
            ref={accoutForm}
            name="account"
            type="text"
            placeholder="输入邮箱"
            onInput={(e) => onAccountInput && onAccountInput(e, setAccoutState)}
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
            onInput={(e) => onPswInput && onPswInput(e, setPswState)}
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
  }
);
