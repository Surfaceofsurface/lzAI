import Link from "next/link";
import {
  useRef,
  useState,
  useEffect,
  useImperativeHandle,
  forwardRef,
} from "react";

export default forwardRef(function StepTwo(
  { account }: { account: string },
  ref
) {
  const countDownRecordRef = useRef();
  const vrfCodeForm = useRef<HTMLInputElement | null>(null);
  const agreeCheckbox = useRef<HTMLInputElement | null>(null);
  const [agreeAnimate, setAgreeAnimate] = useState(false);
  const [countDown, setCountDown] = useState(60);
  const countDownTimer = useRef<number | null>(null);
  useEffect(() => {
    countDownTimer.current = window.setInterval(() => {
      setCountDown((countDown) => {
        if (countDown <= 0) {
          window.clearInterval(countDownTimer.current!);
          return 0;
        }
        return countDown - 1;
      });
    }, 1000);
    return () => {
      window.clearInterval(countDownTimer.current!);
    };
  }, undefined);
  useImperativeHandle(ref, () => {
    return {
      getCode() {
        return vrfCodeForm.current!.value;
      },
      getAgree() {
        return agreeCheckbox.current!.value;
      },
    };
  });
  return (
    <>
      <div>
        <span>
          已向
          <span className="font-semibold ml-1 mr-1">{account}</span>
          发送验证码
        </span>
      </div>

      <div className="relative flex flex-col gap-4">
        <input
          ref={vrfCodeForm}
          name="vrfCode"
          type="text"
          placeholder="输入验证码"
          className="rounded-full w-full p-2 pl-4 pr-4 bg-stone-900 border-gray-500 border"
        />
        <button
          className={`absolute top-1/2 right-0 -translate-y-1/2 mr-3 transition-colors
              ${
                countDown === 0
                  ? "text-sky-400"
                  : "text-slate-500 cursor-not-allowed"
              }`}
          type="button"
        >
          重新发送{countDown === 0 ? null : `(${countDown})`}
        </button>
      </div>

      <div className={`text-center ${agreeAnimate && "animate-pulse"}`}>
        <input
          type="checkbox"
          id="agree"
          className="mr-2"
          ref={agreeCheckbox}
          onChange={(e) => {
            if (e.currentTarget.value) setAgreeAnimate(false);
          }}
        />
        <label htmlFor="agree">
          注册表示同意
          <Link className="text-sky-400" href="#">
            服务条款
          </Link>
        </label>
      </div>
    </>
  );
});
