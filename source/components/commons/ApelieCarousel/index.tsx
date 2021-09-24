import React, {
  useMemo, ReactNode,
} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
import Carousel, { consts, RenderArrowProps } from 'react-elastic-carousel';
import LeftArrowIcon from '@/assets/icons/LeftArrowIcon';
import RightArrowIcon from '@/assets/icons/RightArrowIcon';
import CarouselStyle from './styles';
import IconButton from '../ApelieIconButton';
import ApelieTextBase from '../ApelieTextBase';

interface ICarousel {
  id: string;
  carouselTitle?: string;
  elementsList: ReactNode[];
}

interface IBreakpoints {
  width: number,
  itemsToShow: number,
  itemsToScroll?: number
}

const ApelieCarousel: React.FC<ICarousel> = ({
  id,
  carouselTitle,
  elementsList,
}) => {
  const breakPointsArray: IBreakpoints[] = [
    { width: 0, itemsToShow: 1 },
    { width: 450, itemsToShow: 2 },
    { width: 960, itemsToShow: 3 },
    { width: 1280, itemsToShow: 3 },
    { width: 1920, itemsToShow: 3 },
  ];

  const CarouselItem = useMemo(
    () => (
      elementsList.map((storeComponent, index) => (
        <React.Fragment key={`StoreComponent-${index + 1}`}>
          {storeComponent}
        </React.Fragment>
      ))
    ),
    [elementsList],
  );

  const EmpetyItems = useMemo(
    () => (
      <ApelieTextBase variant="title">
        Não foi encontrado nenhum item
      </ApelieTextBase>
    ),
    [],
  );

  const CustomArrows = ({
    type, onClick, isEdge,
  }: RenderArrowProps) => {
    const pointer = type === consts.PREV ? <LeftArrowIcon /> : <RightArrowIcon />;

    return (
      <IconButton onClick={onClick} disabled={isEdge}>
        {pointer}
      </IconButton>
    );
  };

  return (
    <CarouselStyle.Container id={`${id}-Carousel`}>
      <CarouselStyle.TextContainer>
        {carouselTitle && (
          <ApelieTextBase variant="title" tag="h1">
            {carouselTitle}
          </ApelieTextBase>
        )}
      </CarouselStyle.TextContainer>
      {elementsList.length > 0
        ? (
          <CarouselStyle.CarouselContainer>
            <Carousel
              easing="ease"
              transitionMs={500}
              pagination={false}
              itemsToShow={3}
              isRTL={false}
              renderArrow={CustomArrows}
              itemPadding={[10, 20]}
              breakPoints={breakPointsArray}
            >
              {CarouselItem}
            </Carousel>
          </CarouselStyle.CarouselContainer>
        )
        : EmpetyItems}
    </CarouselStyle.Container>
  );
};

export default ApelieCarousel;
