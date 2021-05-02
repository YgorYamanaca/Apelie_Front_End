import LeftArrow from '@/assets/icons/LeftArrow';
import RightArrow from '@/assets/icons/RightArrow';
import React, { useMemo, ReactNode, useState } from 'react';
import _ from 'lodash';
import CarouselStyle from './styles';
import IconButton from '../IconButton';

interface ICarousel {
  elementsList: ReactNode[],
}

const Carousel: React.FC<ICarousel> = ({
  elementsList,
}) => {
  const FIRST_INDEX = 1;
  const [selectedFlow, setSelectedFlow] = useState(FIRST_INDEX);

  const CarouselItem = useMemo(() => _.chunk(elementsList, 3).map((element, index) => (
    <CarouselStyle.CardsContainer
      key={`CardsContainer-${index + 1}`}
      className={`CardsContainer-${index + 1}`}
    >
      {element.map((itens) => (
        <CarouselStyle.Card
          key={`Card-${index + Math.random()}`}
        >
          {itens}
        </CarouselStyle.Card>
      ))}
    </CarouselStyle.CardsContainer>
  )), [elementsList]);

  const LAST_INDEX = CarouselItem.length;

  return (
    <CarouselStyle.Container
      selected={selectedFlow}
    >
      <IconButton
        disabled={selectedFlow === FIRST_INDEX}
        className="First_Arrow"
        onClick={
          () => setSelectedFlow(selectedFlow !== FIRST_INDEX ? selectedFlow - 1 : LAST_INDEX)
        }
      >
        <LeftArrow />
      </IconButton>
      <CarouselStyle.BaseContainer className="BaseContainer">
        {CarouselItem}
      </CarouselStyle.BaseContainer>
      <IconButton
        disabled={selectedFlow === LAST_INDEX}
        className="Last_Arrow"
        onClick={
          () => setSelectedFlow(selectedFlow !== LAST_INDEX ? selectedFlow + 1 : FIRST_INDEX)
        }
      >
        <RightArrow />
      </IconButton>
    </CarouselStyle.Container>
  );
};

export default Carousel;
