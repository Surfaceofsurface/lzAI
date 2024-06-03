type WaterFallImgs = { id: number; src: string };
type WaterFallProps = {
  imgSrcs: WaterFallImgs[];
  cardContent: WaterFallCardContent;
};
type WaterFallCardContent = (
  id: number,
  isSelected: boolean,
  setSelectedId: Dispatch<SetStateAction<number>>
) => JSX.Element;
type WaterFallLiItemProps = {
  i: number;
  isSelected: boolean;
  colW: number;
  src: string;
  position: [number, number, number, number];
  id: number;
  imgOnLoad: (e: SyntheticEvent<HTMLImageElement, Event>, i: number) => void;
  setSelectedId: Dispatch<SetStateAction<number>>;
  cardContent: WaterFallCardContent;
};
