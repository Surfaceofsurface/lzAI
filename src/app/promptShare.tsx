"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function PromptShare() {
  return (
    <section className="flex justify-between gap-8 mt-12">
      <div className="flex flex-col gap-4 flex-1 text-xs">
        <header className="flex gap-2">
          {Array(3)
            .fill(
              `二、使用吸引人的标题： 1、使用惊叹号、省略号等标点符号增强表达力，营造紧迫感和惊喜感。 2、使用emoji表情符号，来增加标题的活力 3、采用具有挑战性和悬念的表述，引发读、“无敌者好奇心，例如“暴涨词汇量”了”、“拒绝焦虑”等 4、利用正面刺激和负面激，诱发读者的本能需求和动物基本驱动力，如“离离原上谱”、“你不知道的项目其实很赚”等 5、融入热点话题和实用工具，提高文章的实用性和时效性，如“2023年必知”、“chatGPT狂飙进行时”等 6、描述具体的成果和效果，强调标题中的关键词，使其更具吸引力，例如“英语底子再差，搞清这些语法你也能拿130+” 三、使用爆款关键词，选用下面1-2个词语写标题： 好用到哭，大数据，教科书般，小白必看，宝藏，绝绝子神器，都给我冲,`
            )
            .map((text, i) => (
              <div className="bg-white text-black p-8 col-span-2" key={i}>
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{
                    opacity: 1,
                    transition: { duration: 0.4 },
                  }}
                  viewport={{ once: true }}
                >
                  {text}
                </motion.span>
              </div>
            ))}
        </header>
        <div className="flex gap-2">
          <span className="relative flex flex-col basis-0 w-full grow-[2] overflow-hidden">
            <Image
              height={999}
              width={999}
              src="/artwoman.png"
              alt="AI example"
              className="object-cover h-full"
            ></Image>
            <motion.span
              className="absolute flex flex-col gap-2 w-full
                 p-2 bottom-0 bg-white rounded-t-md text-black 
                 truncate"
              initial={{ opacity: 0, transform: "translateY(1rem)" }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0)",
                transition: { duration: 0.4 },
              }}
              viewport={{ once: true }}
            >
              <p>咒语：techno Shakespearean hijabi</p>
              <div className="flex justify-between">
                <span className="flex">
                  <i className="rounded-full w-4 h-4 bg-black"></i>
                  <span>用户</span>
                </span>
                <span className="flex">
                  <i className="rounded-full w-4 h-4 bg-black"></i>
                  <span>点赞</span>
                </span>
              </div>
            </motion.span>
          </span>
          <span className="relative flex flex-col basis-0 w-full grow-[3] overflow-hidden">
            <Image
              height={999}
              width={999}
              src="/promptAstro.png"
              alt="AI example"
              className="object-cover h-full"
            ></Image>
            <motion.span
              className="absolute flex flex-col gap-2 w-full
                 p-2 bottom-0 bg-white rounded-t-md text-black 
                 truncate"
              initial={{ opacity: 0, transform: "translateY(1rem)" }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0)",
                transition: { duration: 0.4 },
              }}
              viewport={{ once: true }}
            >
              <p>咒语：techno Shakespearean hijabi</p>
              <div className="flex justify-between">
                <span className="flex">
                  <i className="rounded-full w-4 h-4 bg-black"></i>
                  <span>用户</span>
                </span>
                <span className="flex">
                  <i className="rounded-full w-4 h-4 bg-black"></i>
                  <span>点赞</span>
                </span>
              </div>
            </motion.span>
          </span>
          <span className="relative flex flex-col basis-0 w-full grow-[3] overflow-hidden">
            <Image
              height={999}
              width={999}
              src="/homeAstro.png"
              alt="AI example"
              className="object-cover h-full"
            ></Image>
            <motion.span
              className="absolute flex flex-col gap-2 w-full
                 p-2 bottom-0 bg-white rounded-t-md text-black 
                 truncate"
              initial={{ opacity: 0, transform: "translateY(1rem)" }}
              whileInView={{
                opacity: 1,
                transform: "translateY(0)",
                transition: { duration: 0.4 },
              }}
              viewport={{ once: true }}
            >
              <p>咒语：techno Shakespearean hijabi</p>
              <div className="flex justify-between">
                <span className="flex">
                  <i className="rounded-full w-4 h-4 bg-black"></i>
                  <span>用户</span>
                </span>
                <span className="flex">
                  <i className="rounded-full w-4 h-4 bg-black"></i>
                  <span>点赞</span>
                </span>
              </div>
            </motion.span>
          </span>
        </div>
        <footer className="flex gap-2">
          {Array(3).fill(
            <span className="grow-[1]">
              <Image
                height={999}
                width={999}
                src="/prompt3.png"
                alt="AI example"
              ></Image>
            </span>
          )}
        </footer>
      </div>
      <aside className="flex flex-col justify-center text-right">
        <h2 className="text-5xl font-bold mb-8">提示词分享</h2>
        <p className="flex flex-col gap-2">
          <span>提示词更明显直接创造你想要的内容</span>
          <span>帮助用户更快速、准确地表达他们的意图</span>
          <span>并充分利用人工智能工具的功能和潜力</span>
        </p>
      </aside>
    </section>
  );
}
