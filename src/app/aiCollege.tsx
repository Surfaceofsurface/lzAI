export default function AICollege() {
  return (
    <section>
      <hgroup className="flex">
        <h2 className="text-6xl font-bold tracking-widest mb-8">AI学院</h2>
        <p className="tracking-widest mb-8 ml-auto text-right">
          掌握 AI 软件的精髓
          <br />
          在 AI 学院！我们的课程覆盖各类AI软件的基础知识和高级应用
          <br />
          让您轻松掌握人工智能工具，实现您的创意和目标
        </p>
      </hgroup>

      <main className="flex flex-col gap-8 relative">
        <div
          className="hover:scale-105 group transition-transform duration-500 ease-in-out 
          flex justify-between bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/promptAstro.png')] bg-no-repeat bg-top bg-cover p-16 
          "
        >
          <h2 className="transition-colors duration-500 group-hover:text-orange-400 text-5xl font-bold">
            chatGPT
          </h2>
          <p>
            适用于任何文本AI的各类玩法 <br />
            以及基础知识到专业知识
          </p>
        </div>
        <div
          className="hover:scale-105 group transition-transform duration-500 ease-in-out 
          flex justify-between bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/promptAstro.png')] bg-no-repeat bg-top bg-cover p-16 
          "
        >
          <h2 className="transition-colors duration-500 group-hover:text-orange-400 text-5xl font-bold">
            MidjourneyiI
          </h2>
          <p>
            AI图片的各类玩法
            <br />
            以及基础知识到专业知识
          </p>
        </div>
        <div
          className="hover:scale-105 group transition-transform duration-500 ease-in-out 
          flex justify-between bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/promptAstro.png')] bg-no-repeat bg-top bg-cover p-16 
          "
        >
          <h2 className="transition-colors duration-500 group-hover:text-orange-400 text-5xl font-bold">
            stable Diffusion
          </h2>
          <p>
            图片生成各类玩法
            <br />
            以及基础知识到专业知识
          </p>
        </div>
        <div
          className="hover:scale-105 group transition-transform duration-500 ease-in-out 
          flex justify-between bg-[linear-gradient(rgba(0,0,0,0.7),rgba(0,0,0,0.7)),url('/prompt3.png')] bg-no-repeat bg-center bg-cover p-16 
          "
        >
          <h2 className="transition-colors duration-500 group-hover:text-orange-400 text-5xl font-bold">
            sora
          </h2>
          <p>
            图片生成各类玩法
            <br />
            以及基础知识到专业知识
          </p>
        </div>
      </main>
    </section>
  );
}
