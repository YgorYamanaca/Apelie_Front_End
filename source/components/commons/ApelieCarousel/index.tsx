import LeftArrow from '@/assets/icons/LeftArrow';
import RightArrow from '@/assets/icons/RightArrow';
import React, {
  useMemo, ReactNode, useState, useEffect,
} from 'react';
import CarouselStyle from './styles';
import IconButton from '../ApelieIconButton';
import ApelieTextBase from '../ApelieTextBase';

interface ICarousel {
  carouselTitle?: string,
  elementsList: ReactNode[],
}

const ApelieCarousel: React.FC<ICarousel> = ({
  carouselTitle,
  elementsList,
}) => {
  const FIRST_INDEX = 1;
  const LAST_INDEX = elementsList.length;
  const [selectedFlow, setSelectedFlow] = useState(FIRST_INDEX);

  const CarouselItem = useMemo(() => (
    <CarouselStyle.CardsContainer>
      {elementsList.map((itens, index) => (
        <CarouselStyle.Card
          key={`Card-${index + 1}`}
          id={`Card-${index + 1}`}
        >
          {itens}
        </CarouselStyle.Card>
      ))}
    </CarouselStyle.CardsContainer>
  ), [elementsList]);

  function handleArrowClick(command: 'PREV' | 'NEXT') {
    if (command === 'PREV') {
      const prevNumber = selectedFlow - 1;
      setSelectedFlow(prevNumber < FIRST_INDEX ? LAST_INDEX : prevNumber);
    } else {
      const nextNumber = selectedFlow + 1;
      setSelectedFlow(nextNumber > LAST_INDEX ? FIRST_INDEX : nextNumber);
    }
  }

  useEffect(() => {
    const element = document.getElementById(`Card-${selectedFlow}`);
    element?.scrollIntoView({
      inline: selectedFlow === LAST_INDEX || selectedFlow === FIRST_INDEX ? 'start' : 'center',
      behavior: 'smooth',
    });
  }, [selectedFlow]);

  return (
    <CarouselStyle.Container>
      <CarouselStyle.TextContainer>
        {carouselTitle && (
          <ApelieTextBase variant="title">
            {carouselTitle}
          </ApelieTextBase>
        )}
      </CarouselStyle.TextContainer>
      <CarouselStyle.CarouselContainer>
        <IconButton
          className="First_Arrow"
          onClick={() => handleArrowClick('PREV')}
        >
          <LeftArrow />
        </IconButton>
        <CarouselStyle.BaseContainer className="BaseContainer">
          {CarouselItem}
        </CarouselStyle.BaseContainer>
        <IconButton
          className="Last_Arrow"
          onClick={() => handleArrowClick('NEXT')}
        >
          <RightArrow />
        </IconButton>
      </CarouselStyle.CarouselContainer>
    </CarouselStyle.Container>
  );
};

export default ApelieCarousel;
