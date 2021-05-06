import Animations from '@/utils/animations';
import styled from 'styled-components';

interface IContainer{
  selected: number;
}

const Container = styled.div<IContainer>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BaseContainer = styled.div`
  scroll-snap-type: x mandatory; 
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: row;
  height: 100%;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
`;

const Card = styled.div`
  animation: ${Animations.fadein} 0.3s ease-in-out;
`;

const CarouselStyle = {
  Container,
  Card,
  BaseContainer,
  CardsContainer,
};

export default CarouselStyle;
