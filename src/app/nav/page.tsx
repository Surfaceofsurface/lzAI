import WeChatSVG from "@/assets/wechat.svg";
import Locate from "@/assets/locate.svg";
import AICard from "@/components/aicard";
export default function NavMain() {
  let navCardsData: {
    title: string;
    cover: React.ReactNode;
    describe: string;
    tag: string[];
  }[] = [
    {
      title: "chatGPT",
      cover: (
        <Locate className="stroke-indigo-500 stroke-2" width="36" height="36" />
      ),
      describe: "ChatGPT可以通过对用户输入的语句",
      tag: ["AI聊天与助手"],
    },
    {
      title: "Aivesa 智聊",
      cover: (
        <Locate className="stroke-indigo-500 stroke-2" width="36" height="36" />
      ),
      describe: "免费的国内直连chatGPT网站",
      tag: ["AI", "AI写作", "ChatGPT", "人工智能"],
    },
    {
      title: "OpenAI",
      cover: (
        <Locate className="stroke-indigo-500 stroke-2" width="36" height="36" />
      ),
      describe: "OpenAI是一家进行AGI(通用人工智能)",
      tag: ["ChatGPT", "OpenAI", "人工智能", "机器学习"],
    },
    {
      title: "Hayo",
      cover: (
        <Locate className="stroke-indigo-500 stroke-2" width="36" height="36" />
      ),
      describe: "Hayo是一款综合AI平台，提供AI艺术",
      tag: ["AI聊天与助手"],
    },
    {
      title: "AI论文出稿",
      cover: (
        <Locate className="stroke-indigo-500 stroke-2" width="36" height="36" />
      ),
      describe: "免费论文查重_论文降重_论文检测",
      tag: ["AI聊天与助手", "AI写作与文本"],
    },
    {
      title: "Relight",
      describe: "ClipDrop是一个AI图像工具网站",
      cover: (
        <Locate className="stroke-indigo-500 stroke-2" width="36" height="36" />
      ),
      tag: ["AI图像工具", "Cleanup", "Image upscaler", "Relight"],
    },
    {
      title: "BigJPG",
      describe: "BigJPG是一个免费的在线图片无损放",
      cover: (
        <Locate className="stroke-indigo-500 stroke-2" width="36" height="36" />
      ),
      tag: ["4K", "BigJPG", "PhotoZoom", "人工智能"],
    },
    {
      title: "Midjourney",
      describe: "Midjourney是一个探索新媒体以扩展",
      cover: (
        <Locate className="stroke-indigo-500 stroke-2" width="36" height="36" />
      ),
      tag: ["人工智能", "艺术"],
    },
    {
      title: "Openart",
      describe: "Openart是一个AI艺术项目，它汇集",
      cover: (
        <Locate className="stroke-indigo-500 stroke-2" width="36" height="36" />
      ),
      tag: ["AI Art Generator", "AI Avatar Generator"],
    },
    {
      title: "Fotor",
      describe: "Fotor是一个在线AI图像生成工具，用",
      cover: (
        <Locate className="stroke-indigo-500 stroke-2" width="36" height="36" />
      ),
      tag: ["AI图像生成器", "艺术风格", "免费", "DeepAI"],
    },
  ];
  navCardsData = navCardsData.concat(navCardsData);
  return (
    <main className="flex flex-1 overflow-hidden">
      <aside className="basis-0 grow-[1]">
        <ul className="flex flex-col p-2 gap-4">
          <li>AI聊天与助手</li>
          <li>AI写作与文本</li>
          <li>AI图像与设计</li>
          <li>AI音频与视频</li>
        </ul>
      </aside>
      <main className="basis-0 grow-[9] h-full overflow-y-scroll bg-neutral-900 p-3 text-gray-400">
        <section>
          <hgroup className="flex justify-between">
            <h4 className="flex">
              <WeChatSVG className="w-6 h-6 mr-2"></WeChatSVG>
              <span>AI聊天与助手</span>
            </h4>
            <a>点击查看更多+</a>
          </hgroup>
          <div className="pt-4 ">
            <ul className="grid grid-cols-5 grid-rows-4 text-xs gap-4">
              {navCardsData.map((card) => (
                <AICard
                  title={card.title}
                  cover={card.cover}
                  describe={card.describe}
                  tags={card.tag}
                ></AICard>
              ))}
            </ul>
          </div>
        </section>

        <section className="mt-4">
          <hgroup className="flex justify-between">
            <h4 className="flex">
              <WeChatSVG className="w-6 h-6 mr-2"></WeChatSVG>
              <span>AI图像与设计</span>
            </h4>
            <a>点击查看更多+</a>
          </hgroup>
          <div className="pt-4 ">
            <ul className="grid grid-cols-5 grid-rows-4 text-xs gap-4">
              {navCardsData.map((card) => (
                <AICard
                  title={card.title}
                  cover={card.cover}
                  describe={card.describe}
                  tags={card.tag}
                ></AICard>
              ))}
            </ul>
          </div>
        </section>
      </main>
    </main>
  );
}
