import { Suspense } from "react";
import PromptContent from "./content";
export default async function ServerWaterFall() {
  const dataFromApi: PromptListFromApi = await fetch(
    "http://121.196.237.175:61087/api/creator/search?input&page",
    {
      next: { revalidate: 15 },
    }
  ).then((res) => res.json());
  const imgs = dataFromApi.map(({ id, url }) => {
    return { id, src: url };
  });
  return (
    <>
      <main className="flex flex-1">
        <Suspense fallback={"12345"}>
          <PromptContent imgSrcs={imgs}></PromptContent>
        </Suspense>
      </main>
    </>
  );
}
