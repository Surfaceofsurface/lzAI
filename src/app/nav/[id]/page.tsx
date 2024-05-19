import Image from "next/image";
import Link from "next/link";
import Locate from "@/assets/locate.svg";
import { IoIosArrowForward } from "react-icons/io";
import { BiScan } from "react-icons/bi";
import { MdReport } from "react-icons/md";
export default async function Page({ params }: { params: { id: string } }) {
  const d = await fetch(
    `http://121.196.237.175:61087/api/product/detail?product=${params.id}`,
    { next: { revalidate: 15 } }
  )
    .then((res) => {
      if (res.status >= 200 && res.status < 300) return res.json();
      return {
        title: "chatGPT",
        group: "AI聊天与助手",
        cover: "/chatgpt.webp",
        describe: "ChatGPT可以通过对用户输入的语句",
        link: "https://openai.com/",
        country: "美国",
        tags: ["AI聊天与助手"],
        article: [
          "ChatGPT是一种基于GPT（Generative Pre-trained Transformer）技术的自然语言处理模型，它可以进行人机交互，实现智能对话。ChatGPT可以通过对用户输入的语句进行分析和理解，生成符合语境和逻辑的自然语言回复。",
          "如果你需要在境内使用，请前往：https://aivesa.cn/",
          "ChatGPT的核心技术是GPT模型，它是一种基于深度学习的自然语言处理模型，可以通过预先训练的方式，学习自然语言的语法、语义和逻辑规则，从而实现自然语言生成和理解的功能。ChatGPT在GPT模型的基础上，通过对话数据的训练和微调，进一步提升了模型的对话能力和自然度。ChatGPT可以应用于多个领域，如智能客服、智能助手、智能问答等。它可以帮助企业提高客户服务质量和效率，减少人力成本；也可以帮助个人解决各种问题，提高生活质量和效率。ChatGPT的应用前景广阔，随着技术的不断进步和数据的不断积累，它的性能和应用范围还将不断拓展。总之，ChatGPT是一种强大的自然语言处理工具，它可以实现智能对话，为人机交互提供了更加便捷、高效、自然的方式。",
        ],
      };
    })
    .catch(() => {
      return {
        title: "chatGPT",
        group: "AI聊天与助手",
        cover: "/chatgpt.webp",
        describe: "ChatGPT可以通过对用户输入的语句",
        link: "https://openai.com/",
        country: "美国",
        tags: ["AI聊天与助手"],
        article: [
          "ChatGPT是一种基于GPT（Generative Pre-trained Transformer）技术的自然语言处理模型，它可以进行人机交互，实现智能对话。ChatGPT可以通过对用户输入的语句进行分析和理解，生成符合语境和逻辑的自然语言回复。",
          "如果你需要在境内使用，请前往：https://aivesa.cn/",
          "ChatGPT的核心技术是GPT模型，它是一种基于深度学习的自然语言处理模型，可以通过预先训练的方式，学习自然语言的语法、语义和逻辑规则，从而实现自然语言生成和理解的功能。ChatGPT在GPT模型的基础上，通过对话数据的训练和微调，进一步提升了模型的对话能力和自然度。ChatGPT可以应用于多个领域，如智能客服、智能助手、智能问答等。它可以帮助企业提高客户服务质量和效率，减少人力成本；也可以帮助个人解决各种问题，提高生活质量和效率。ChatGPT的应用前景广阔，随着技术的不断进步和数据的不断积累，它的性能和应用范围还将不断拓展。总之，ChatGPT是一种强大的自然语言处理工具，它可以实现智能对话，为人机交互提供了更加便捷、高效、自然的方式。",
        ],
      };
    });
  return (
    <main className="p-16">
      <header className="flex gap-6 mb-12 mr-44">
        <div className="basis-0 grow-[1] flex flex-col text-white text-xs bg-black rounded-lg p-4">
          <div>
            <Image
              className="rounded-lg"
              height={999}
              width={999}
              alt="chatGPT"
              src="/chatgptPage.jpg"
            ></Image>
          </div>
        </div>
        <hgroup className="basis-0 grow-[2] flex flex-col justify-between gap-4">
          <div className="flex gap-2">
            <span className="text-xs bg-red-500 text-white rounded-lg p-1 flex justify-between">
              <i>
                <Locate className="w-4 h-4 stroke-white fill-transparent stroke-2"></Locate>
              </i>
              <span>{d.country}</span>
            </span>
            <span className="text-xs bg-red-500 text-white rounded-lg p-1 flex-center justify-center">
              {d.tags.map((t: string) => (
                <Link
                  href="/nav#chat"
                  className="flex-center justify-center"
                  key={t}
                >
                  {t}
                </Link>
              ))}
            </span>
          </div>
          <h2 className="text-2xl font-bold">{d.title}</h2>
          <p>{d.describe}</p>
          <span className="text-sm">
            <i>标签：</i>
            <span>AI聊天与助手</span>
          </span>
          <ul className="flex text-neutral-300 gap-2">
            <li className="rounded-lg bg-neutral-800 hover:bg-neutral-700 p-2">
              <Link href={d.link} className="flex items-center gap-2 ">
                <span>链接直达</span>
                <i>
                  <IoIosArrowForward></IoIosArrowForward>
                </i>
              </Link>
            </li>
            <li className="rounded-lg bg-neutral-800 hover:bg-neutral-700 p-2">
              <Link href="#" className="flex items-center gap-2">
                <span>手机查看</span>
                <i>
                  <BiScan></BiScan>
                </i>
              </Link>
            </li>
            <li className="rounded-lg bg-red-500 hover:bg-red-600 p-2">
              <Link href="#" className="flex items-center gap-2">
                <i>
                  <MdReport className="w-6 h-6"></MdReport>
                </i>
              </Link>
            </li>
          </ul>
        </hgroup>
      </header>
      <article>
        {d.article.map((t: string) => {
          return <p key={t}>{t}</p>;
        })}
      </article>
    </main>
  );
}
