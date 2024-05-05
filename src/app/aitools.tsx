import Locate from "@/assets/locate.svg";
import Triangle from "@/assets/triangle.svg";
export default function AITools() {
  const aiToolsNavData = [
    {
      title: "文本",
      content: [
        {
          title: "chatGPT",
          cover: (
            <Locate
              className="stroke-indigo-500 stroke-2"
              width="36"
              height="36"
            />
          ),
          describe: "ChatGPT可以通过对用户输入的语句",
          tag: ["AI聊天与助手"],
        },
        {
          title: "Aivesa 智聊",
          cover: (
            <Locate
              className="stroke-indigo-500 stroke-2"
              width="36"
              height="36"
            />
          ),
          describe: "免费的国内直连chatGPT网站",
          tag: ["AI", "AI写作", "ChatGPT", "人工智能"],
        },
        {
          title: "OpenAI",
          cover: (
            <Locate
              className="stroke-indigo-500 stroke-2"
              width="36"
              height="36"
            />
          ),
          describe: "OpenAI是一家进行AGI(通用人工智能)",
          tag: ["ChatGPT", "OpenAI", "人工智能", "机器学习"],
        },
        {
          title: "Hayo",
          cover: (
            <Locate
              className="stroke-indigo-500 stroke-2"
              width="36"
              height="36"
            />
          ),
          describe: "Hayo是一款综合AI平台，提供AI艺术",
          tag: ["AI聊天与助手"],
        },
        {
          title: "AI论文出稿",
          cover: (
            <Locate
              className="stroke-indigo-500 stroke-2"
              width="36"
              height="36"
            />
          ),
          describe: "免费论文查重_论文降重_论文检测",
          tag: ["AI聊天与助手", "AI写作与文本"],
        },
      ],
    },
    {
      title: "图像与设计",
      content: [
        {
          title: "Relight",
          describe: "ClipDrop是一个AI图像工具网站",
          cover: (
            <Locate
              className="stroke-indigo-500 stroke-2"
              width="36"
              height="36"
            />
          ),
          tag: ["AI图像工具", "Cleanup", "Image upscaler", "Relight"],
        },
        {
          title: "BigJPG",
          describe: "BigJPG是一个免费的在线图片无损放",
          cover: (
            <Locate
              className="stroke-indigo-500 stroke-2"
              width="36"
              height="36"
            />
          ),
          tag: ["4K", "BigJPG", "PhotoZoom", "人工智能"],
        },
        {
          title: "Midjourney",
          describe: "Midjourney是一个探索新媒体以扩展",
          cover: (
            <Locate
              className="stroke-indigo-500 stroke-2"
              width="36"
              height="36"
            />
          ),
          tag: ["人工智能", "艺术"],
        },
        {
          title: "Openart",
          describe: "Openart是一个AI艺术项目，它汇集",
          cover: (
            <Locate
              className="stroke-indigo-500 stroke-2"
              width="36"
              height="36"
            />
          ),
          tag: ["AI Art Generator", "AI Avatar Generator"],
        },
        {
          title: "Fotor",
          describe: "Fotor是一个在线AI图像生成工具，用",
          cover: (
            <Locate
              className="stroke-indigo-500 stroke-2"
              width="36"
              height="36"
            />
          ),
          tag: ["AI图像生成器", "艺术风格", "免费", "DeepAI"],
        },
      ],
    },
  ];
  return (
    <section className="flex flex-col">
      <h2 className="text-4xl font-bold tracking-widest mb-8">AI导航站</h2>
      <p className="text-2xl font-bold tracking-widest mb-8">
        “AI 工具包尽在这里，一站式导航”
      </p>
      <div className="flex flex-col gap-8 text-xs">
        {aiToolsNavData.map((usageCategory) => (
          <div key={usageCategory.title}>
            <h3 className="text-3xl font-bold tracking-widest mb-4">
              {usageCategory.title}
            </h3>

            <div>
              <ul className="grid grid-cols-5 grid-row-1 gap-1">
                {usageCategory.content.map((item) => (
                  <li
                    className="bg-neutral-800 flex flex-col gap-2 p-3 "
                    key={item.title}
                  >
                    <div className="flex gap-3 border-b-[1px] border-b-neutral-600 pb-2">
                      <div>{item.cover}</div>
                      <div className="truncate">
                        <h4 className="font-bold">{item.title}</h4>
                        <span className="truncate">{item.describe}</span>
                      </div>
                    </div>

                    <div className="flex gap-1 overflow-hidden">
                      {item.tag.map((t) => (
                        <span
                          className="shrink-0 bg-neutral-700 text-neutral-400 rounded-full p-1 pl-2 pr-2"
                          key={t}
                        >
                          {t}
                        </span>
                      ))}

                      <span className="ml-auto">
                        <Triangle
                          width="9"
                          height="9"
                          className="fill-gray-500"
                        />
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
