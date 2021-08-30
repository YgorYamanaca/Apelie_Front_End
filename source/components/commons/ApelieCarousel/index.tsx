import React, {
  useMemo, ReactNode, useState, useLayoutEffect,
} from 'react';
import LeftArrowIcon from '@/assets/icons/LeftArrowIcon';
import RightArrowIcon from '@/assets/icons/RightArrowIcon';
import CarouselStyle from './styles';
import IconButton from '../ApelieIconButton';
import ApelieTextBase from '../ApelieTextBase';

interface ICarousel {
  id: string;
  carouselTitle?: string;
  elementsList: ReactNode[];
  baseSizes?: number;
}

const ApelieCarousel: React.FC<ICarousel> = ({
  id,
  carouselTitle,
  elementsList,
  baseSizes = 275,
}) => {
  const FIRST_INDEX = 1;
  const LAST_INDEX = elementsList.length;
  const [selectedFlow, setSelectedFlow] = useState(FIRST_INDEX);

  const CarouselItem = useMemo(
    () => (
      <CarouselStyle.CardsContainer>
        {elementsList.map((itens, index) => (
          <CarouselStyle.Card
            key={`Carousel-Card-${index + 1}`}
            id={`${id}-Card-${index + 1}`}
          >
            {itens}
          </CarouselStyle.Card>
        ))}
      </CarouselStyle.CardsContainer>
    ),
    [elementsList, id],
  );

  const EmpetyItems = useMemo(
    () => (
      <ApelieTextBase variant="title">
        Não foi encontrado nenhum item
      </ApelieTextBase>
    ),
    [],
  );

  function handleArrowClick(command: 'PREV' | 'NEXT') {
    if (command === 'PREV') {
      const prevNumber = selectedFlow - 1;
      setSelectedFlow(prevNumber < FIRST_INDEX ? LAST_INDEX : prevNumber);
    } else {
      const nextNumber = selectedFlow + 1;
      setSelectedFlow(nextNumber > LAST_INDEX ? FIRST_INDEX : nextNumber);
    }
  }

  useLayoutEffect(() => {
    const element = document.getElementById(`${id}-Card-${selectedFlow}`);
    if (element) {
      element.scrollIntoView({
        block: 'center',
        inline:
          selectedFlow === LAST_INDEX || selectedFlow === FIRST_INDEX
            ? 'start'
            : 'center',
        behavior: 'smooth',
      });
    }
  }, [selectedFlow, id, LAST_INDEX]);

  return (
    <CarouselStyle.Container id={`${id}-Carousel`}>
      <CarouselStyle.TextContainer>
        {carouselTitle && (
          <ApelieTextBase variant="title" tag="h1">
            {carouselTitle}
          </ApelieTextBase>
        )}
      </CarouselStyle.TextContainer>
      <CarouselStyle.CarouselContainer length={elementsList.length}>
        <IconButton
          className="First_Arrow"
          onClick={() => handleArrowClick('PREV')}
        >
          <LeftArrowIcon />
        </IconButton>
        <CarouselStyle.BaseContainer
          className="BaseContainer"
          baseSize={baseSizes}
          length={elementsList.length}
        >
          {elementsList.length > 0 ? CarouselItem : EmpetyItems}
        </CarouselStyle.BaseContainer>
        <IconButton
          className="Last_Arrow"
          onClick={() => handleArrowClick('NEXT')}
        >
          <RightArrowIcon />
        </IconButton>
      </CarouselStyle.CarouselContainer>
    </CarouselStyle.Container>
  );
};

export default ApelieCarousel;
