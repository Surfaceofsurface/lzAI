import { Dispatch, RefObject, SetStateAction, useState } from "react";
import { useIntersectionObserver } from "@reactuses/core";
export default function useNavIndex(observereeEls: RefObject<HTMLElement>[],options?: IntersectionObserverInit | undefined) :[number,Dispatch<SetStateAction<number>>]{
  const [asideIndex, setAsideIndex] = useState(0);
  for (let i=0; i<observereeEls.length; i++) {
    useIntersectionObserver(observereeEls[i], (entry) => {
      //判断被观测者的位置
      const viewPortH = entry[0].rootBounds!.height;
      const observereeTop = entry[0].intersectionRect.top;
      //计算被观察者离视口顶端与视口高度的占比
      const topRatio = observereeTop / viewPortH;
      console.log(entry)
      if (topRatio > 0.8) return; //从下面出现(或消失)
      //从上面出现(或消失)
      // if (entry[0].intersectionRatio !== 1) {}//从上面出现  
      setAsideIndex(i);
    },options);
  }
  return [asideIndex, setAsideIndex];
}
