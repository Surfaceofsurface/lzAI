export default function Banner() {
  return (
    <header className="flex justify-between bg-black h-6 p-10 pt-8 pb-8">
      <div className="flex flex-col justify-center text-sm md:text-base">
        <b>让每一个使用AI的人事半功倍</b>
        <b>sfdafjaijfajpf fdafaffa dfadaaw</b>
      </div>
      <div className="items-center gap-2 hidden sm:flex">
        <span>
          <div className="bg-slate-200 rounded-full w-8 h-8"></div>
        </span>
        <button>登录</button>
        <span>|</span>
        <button>注册</button>
      </div>
    </header>
  );
}
