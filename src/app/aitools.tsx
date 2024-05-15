"use client";

import Locate from "@/assets/locate.svg";
import AICard from "@/components/aicard";
import { motion } from "framer-motion";
import Link from "next/link";
export default function AITools() {
  const aiToolsNavData = [
    {
      title: "文本",
      content: [
        {
          title: "chatGPT",
          cover: "/chatgpt.webp",
          describe: "ChatGPT可以通过对用户输入的语句",
          tag: ["AI聊天与助手"],
        },
        {
          title: "Aivesa 智聊",
          cover: "/aivesa.png",
          describe: "免费的国内直连chatGPT网站",
          tag: ["AI", "AI写作", "ChatGPT", "人工智能"],
        },
        {
          title: "OpenAI",
          cover: "/openai.webp",
          describe: "OpenAI是一家进行AGI(通用人工智能)",
          tag: ["ChatGPT", "OpenAI", "人工智能", "机器学习"],
        },
        {
          title: "Hayo",
          cover: "/hayo.png",
          describe: "Hayo是一款综合AI平台，提供AI艺术",
          tag: ["AI聊天与助手"],
        },
        {
          title: "AI论文出稿",
          cover: "/paper.svg",
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
          cover: "/relight.svg",
          tag: ["AI图像工具", "Cleanup", "Image upscaler", "Relight"],
        },
        {
          title: "BigJPG",
          describe: "BigJPG是一个免费的在线图片无损放",
          cover: "/BIGJPG.png",
          tag: ["4K", "BigJPG", "PhotoZoom", "人工智能"],
        },
        {
          title: "Midjourney",
          describe: "Midjourney是一个探索新媒体以扩展",
          cover: "/midjourney.png",
          tag: ["人工智能", "艺术"],
        },
        {
          title: "Openart",
          describe: "Openart是一个AI艺术项目，它汇集",
          cover: "/openart.png",
          tag: ["AI Art Generator", "AI Avatar Generator"],
        },
        {
          title: "Fotor",
          describe: "Fotor是一个在线AI图像生成工具，用",
          cover: "/fotor.png",
          tag: ["AI图像生成器", "艺术风格", "免费", "DeepAI"],
        },
      ],
    },
  ];
  return (
    <motion.div
      className="flex flex-col"
      initial={{ opacity: 0, transform: "translateY(1rem)" }}
      whileInView={{
        opacity: 1,
        transform: "translateY(0)",
        transition: { duration: 0.4 },
      }}
      viewport={{ once: true }}
    >
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
                {usageCategory.content.map((item, i) => (
                  <motion.li
                    key={item.title}
                    viewport={{ once: true }}
                    initial={{
                      opacity: 0,
                      transform: "translate(-40%,20%) scale(0.5)",
                    }}
                    whileInView={{
                      opacity: 1,
                      transform: "scale(1) translate(0,0)",
                      transition: { delay: i * 0.08, duration: 0.4 },
                    }}
                  >
                    <Link href="/nav">
                      <AICard
                        title={item.title}
                        describe={item.describe}
                        cover={item.cover}
                        tags={item.tag}
                      ></AICard>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
