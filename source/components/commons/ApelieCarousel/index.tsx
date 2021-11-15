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

interface IBreakpoints {
  width: number,
  itemsToShow: number,
  itemsToScroll?: number
}
interface ICarousel {
  id: string;
  carouselTitle?: string;
  breakPointsArray?: IBreakpoints[],
  elementsList: ReactNode[];
  arrowSize?: string;
  hasArrow?: boolean;
}

const ApelieCarousel: React.FC<ICarousel> = ({
  id,
  breakPointsArray = [
    { width: 0, itemsToShow: 2 },
    { width: 450, itemsToShow: 2 },
    { width: 960, itemsToShow: 3 },
    { width: 1280, itemsToShow: 3 },
    { width: 1920, itemsToShow: 3 },
  ],
  carouselTitle,
  elementsList,
  arrowSize = '35',
  hasArrow = true,
}) => {
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
    const pointer = type === consts.PREV ? <LeftArrowIcon width={arrowSize} height={arrowSize} /> : <RightArrowIcon width={arrowSize} height={arrowSize} />;

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
              showArrows={hasArrow}
              easing="ease"
              transitionMs={500}
              pagination={false}
              itemsToShow={3}
              isRTL={false}
              renderArrow={CustomArrows}
              itemPadding={[10, 20]}
              breakPoints={breakPointsArray}
              disableArrowsOnEnd
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
