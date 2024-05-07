import Image from "next/image";
import { motion } from "framer-motion";
import WeChatSVG from "@/assets/wechat.svg";
import Locate from "@/assets/locate.svg";
import AICard from "@/components/aicard";
import Link from "next/link";
import { useRef } from "react";
import useNavIndex from "./useNavIndex";

export const navCardsData: {
  title: string;
  group: string;
  cover: React.ReactNode;
  describe: string;
  tag: string[];
}[] = [
    {
      title: "chatGPT",
      group: "AI聊天与助手",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/chatgpt.webp" alt="1" />
      ),
      describe: "ChatGPT可以通过对用户输入的语句",
      tag: ["AI聊天与助手"],
    },
    {
      title: "Aivesa 智聊",
      group: "AI聊天与助手",
      cover: (
        <Image
          className="rounded-md" width={36} height={36} src="/aivesa.png" alt="1" />
      ),
      describe: "免费的国内直连chatGPT网站",
      tag: ["AI", "AI写作", "ChatGPT", "人工智能"],
    },
    {
      title: "OpenAI",
      group: "AI聊天与助手",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/openai.webp" alt="1" />
      ),
      describe: "OpenAI是一家进行AGI(通用人工智能)",
      tag: ["ChatGPT", "OpenAI", "人工智能", "机器学习"],
    },
    {
      title: "Hayo",
      group: "AI聊天与助手",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/hayo.png" alt="1" />
      ),
      describe: "Hayo是一款综合AI平台，提供AI艺术",
      tag: ["AI聊天与助手"],
    },
    {
      title: "AI论文出稿",
      group: "AI聊天与助手",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/paper.svg" alt="1" />
      ),
      describe: "免费论文查重_论文降重_论文检测",
      tag: ["AI聊天与助手", "AI写作与文本"],
    },
    {
      title: "BigJPG",
      group: "AI聊天与助手",
      describe: "BigJPG是一个免费的在线图片无损放",
      cover: (
        <Image className="rounded-md bg-white" width={36} height={36} src="/BIGJPG.png" alt="1" />
      ),
      tag: ["4K", "BigJPG", "PhotoZoom", "人工智能"],
    },
    {
      title: "Midjourney",
      group: "AI聊天与助手",
      describe: "Midjourney是一个探索新媒体以扩展",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/midjourney.png" alt="1" />
      ),
      tag: ["人工智能", "艺术"],
    },
    {
      title: "Openart",
      group: "AI聊天与助手",
      describe: "Openart是一个AI艺术项目，它汇集",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/openart.png" alt="1" />
      ),
      tag: ["AI Art Generator", "AI Avatar Generator"],
    },
    {
      title: "Fotor",
      group: "AI聊天与助手",
      describe: "Fotor是一个在线AI图像生成工具，用",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/fotor.png" alt="1" />
      ),
      tag: ["AI图像生成器", "艺术风格", "免费", "DeepAI"],
    },
    {
      title: "WriteGPT",
      group: "AI写作与文本",
      describe: "WriteGPT能够快速地处理工程问题，有效地阅读研究任何内容。",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/writegpt.png" alt="1" />
      ),
      tag: ["productivitysummarizer"]
    },
    {
      title: "NovelAI",
      group: "AI写作与文本",
      describe: "NovelAI是一个由人工智能驱动的故事创作平台，它可以构建独特的故事、惊险的故事、诱人的浪漫故事，或者只是随便玩玩。这个项目使用GPT技术，让你可以轻松地创作出令人惊叹的故事，而且任何主题都可以。无论你是想写一部科幻小说，还是想写一部浪漫小说，NovelAI都可以帮助你实现。",
      cover: (
        <Image
          className="rounded-md"
          width={36}
          height={36}
          src="/novelai.png"
          alt="1"
        />
      ),
      tag: ["adventureAIai dungeonaidungeon"]
    },
    {
      title: "Friday AI",
      group: "AI写作与文本",
      describe: "Friday AI是一款AI写作助手，可以帮助您快速完成博客、广告或创意故事的构思和创作，节省时间和金钱。",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/friday.png" alt="1" />
      ),
      tag: ["AI免费内容营销写作"]
    },
    {
      title: "GPT3 Playground",
      group: "AI写作与文本",
      describe: "GPT3 Playground是一个非常有趣的项目，它可以根据你提供的指令或选择的预设，自动回应一个完整的句子，尽可能地与你提供的上下文或模式匹配。你可以通过更改模型来控制API的响应，以获得更好的结果。这个项目非常紧凑，让人感到非常有趣和好玩。",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/openai.webp" alt="1" />
      ),
      tag: ["人工智能写作生产力"]
    },
    {
      title: "ChatGPT for Google",
      group: "AI写作与文本",
      describe: "ChatGPT for Google是一个与Google搜索引擎结合的AI响应生成器。它能够基于用户的查询生成更加深入、全面的回答，从而提供更好的搜索体验。",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/googlegpt.png" alt="1" />
      ),
      tag: ["AI搜索引擎", "GPT技术"]
    },
    {
      title: "Relight",
      group: "AI图像与设计",
      describe: "Relight是一个基于AI的图像增强工具，它可以自动调整图像的光照，使其看起来更加生动和真实。无论是为了提升摄影作品的质量，还是为了改善日常生活中的照片，Relight都是一个非常有用的工具。",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/relight.svg" alt="1" />
      ),
      tag: ["AI图像增强", "摄影工具"]
    },
    {
      title: "ClipDrop",
      group: "AI图像与设计",
      describe: "ClipDrop是一款创新的AR应用，它可以让你从现实世界中“剪下”任何东西，并将其“粘贴”到你的电脑上。无论你是想制作一份演示文稿，还是想设计一张海报，ClipDrop都能让你以前所未有的方式创作。",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/ClipDrop.png" alt="1" />
      ),
      tag: ["AR应用", "创新设计"]
    },
    {
      title: "DeepArt",
      group: "AI图像与设计",
      describe: "DeepArt是一个使用神经网络将您的照片转换为艺术品的服务。只需上传您的图片，选择一个艺术风格，DeepArt的AI就会创建一幅新的艺术品，风格与您选择的艺术风格相同。",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/DeepArt.png" alt="1" />
      ),
      tag: ["AI艺术", "图片编辑"]
    },
    {
      title: "DeepL",
      group: "AI翻译与语言",
      describe: "DeepL是一款强大的翻译工具，使用最先进的机器学习技术为用户提供准确的翻译。不论是单词、句子还是整篇文章，DeepL都能提供流畅、自然的翻译。",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/DeepL.jpg" alt="1" />
      ),
      tag: ["AI翻译", "语言学习"]
    },
    {
      title: "Artbreeder",
      group: "AI图像与设计",
      describe: "Artbreeder是一个基于AI的图像创作平台，用户可以混合、修改现有的图像，或者从头开始创作新的图像。它是一款强大的工具，让艺术创作变得更加容易和有趣。",
      cover: (
        <Image className="rounded-md" width={36} height={36} src="/midjourney.png" alt="1" />
      ),
      tag: ["AI艺术", "图像创作"]
    }
  ];