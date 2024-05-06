import Triangle from "@/assets/triangle.svg";
export default function AICard({
  title,
  cover,
  describe,
  tags,
}: {
  title: string;
  cover: React.ReactNode;
  describe: string;
  tags: string[];
}) {
  return (
    <div className="bg-neutral-800 flex flex-col gap-2 p-3 " key={title}>
      <div className="flex gap-3 border-b-[1px] border-b-neutral-600 pb-2">
        <div>{cover}</div>
        <div className="truncate">
          <h4 className="font-bold">{title}</h4>
          <span className="truncate">{describe}</span>
        </div>
      </div>

      <div className="flex gap-1 overflow-hidden">
        {tags.map((t) => (
          <span
            className="shrink-0 bg-neutral-700 text-neutral-400 rounded-full p-1 pl-2 pr-2"
            key={t}
          >
            {t}
          </span>
        ))}

        <span className="ml-auto">
          <Triangle width="9" height="9" className="fill-gray-500" />
        </span>
      </div>
    </div>
  );
}
