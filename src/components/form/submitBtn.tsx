"use client";

import { MouseEventHandler } from "react";
import { useFormStatus } from "react-dom";
import Loading from "@/assets/loading.svg";
export default function SubmitButton({
  onClick,
  children,
}: {
  onClick?: MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
}) {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type="submit"
      className="bg-sky-600 rounded-full w-full p-2"
      onClick={onClick}
    >
      {pending ? (
        <span className="m-auto space-x-2">
          <Loading className="inline h-5 w-5 animate-spin text-white"></Loading>
        </span>
      ) : (
        children
      )}
    </button>
  );
}
