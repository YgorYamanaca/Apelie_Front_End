import LeftArrow from '@/assets/icons/LeftArrow';
import RightArrow from '@/assets/icons/RightArrow';
import React, {
  useMemo, ReactNode, useState, useEffect,
} from 'react';
import useIsMobile from '@/theme/useIsMobile';
import CarouselStyle from './styles';
import IconButton from '../IconButton';

interface ICarousel {
  elementsList: ReactNode[],
}

const Carousel: React.FC<ICarousel> = ({
  elementsList,
}) => {
  const mobile = useIsMobile('sm');
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
      if (mobile) {
        setSelectedFlow(prevNumber < FIRST_INDEX ? LAST_INDEX : prevNumber);
      } else {
        setSelectedFlow(prevNumber <= FIRST_INDEX ? LAST_INDEX - 1 : prevNumber);
      }
    } else {
      const nextNumber = selectedFlow + 1;
      if (mobile) {
        setSelectedFlow(nextNumber > LAST_INDEX ? FIRST_INDEX : nextNumber);
      } else {
        setSelectedFlow(nextNumber >= LAST_INDEX ? FIRST_INDEX + 1 : nextNumber);
      }
    }
  }

  useEffect(() => {
    const element = document.getElementById(`Card-${selectedFlow}`);
    element?.scrollIntoView({
      inline: 'center',
      behavior: 'smooth',
    });
  }, [selectedFlow]);

  return (
    <CarouselStyle.Container
      selected={selectedFlow}
    >
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
    </CarouselStyle.Container>
  );
};

export default Carousel;
