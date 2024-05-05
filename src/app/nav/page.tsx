export default function NavMain() {
  return (
    <main className="flex flex-1">
      <aside className="basis-0 grow-[1]">
        <ul className="flex flex-col gap-4">
          <li>AI聊天与助手</li>
          <li>AI写作与文本</li>
        </ul>
      </aside>
      <main className="basis-0 grow-[9] bg-neutral-900 p-3">123</main>
    </main>
  );
}
