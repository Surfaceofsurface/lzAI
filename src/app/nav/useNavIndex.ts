import { Dispatch, SetStateAction, useState, useEffect } from "react";

type observereeElsFn = () => HTMLElement[];
export default function useNavIndex(
  getObserverees: observereeElsFn,
  options?: IntersectionObserverInit
): [number, Dispatch<SetStateAction<number>>] {
  const [asideIndex, setAsideIndex] = useState(0);
  useEffect(() => {
    const observereeEls = getObserverees();
    const observers: IntersectionObserver[] = [];
    observereeEls.forEach((el, i) => {
      const observer = new IntersectionObserver((entries) => {
        const entry = entries[0];

        if (entry.intersectionRatio === 0) return; //不在视口内
        //判断被观测者的位置
        console.log(entry, i);
        const viewPortH = entry.rootBounds!.height;
        const viewPortOffsetTop = entry.rootBounds!.top;
        const observereeTop = entry.intersectionRect.top;
        const observereeInViewportTop = observereeTop - viewPortOffsetTop;
        //计算被观察者离视口顶端与视口高度的占比
        const topRatio = observereeInViewportTop / viewPortH;
        if (topRatio > 0.5) return; //从下面出现(或消失)
        //从上面出现(或消失)
        // if (entry.intersectionRatio !== 1) {}//从上面出现
        setAsideIndex(i);
      }, options);
      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((observer) => {
        observer.disconnect();
      });
    };
  }, [options, getObserverees]);

  return [asideIndex, setAsideIndex];
}
