import Animations from '@/utils/animations';
import styled from 'styled-components';

const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const CarouselContainer = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const TextContainer = styled.div`
  padding: 0 35px;
  padding-top: 10px;
`;

interface IBaseContainer {
  baseSize: number;
}

const BaseContainer = styled.div<IBaseContainer>`
  scroll-snap-type: x mandatory; 
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: row;
  height: ${({ baseSize }) => baseSize}px;
  overflow: hidden;
  justify-content: flex-start;
  align-items: center;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
  height: 100%;
`;

const Card = styled.div`
  margin: 15px;
  animation: ${Animations.fadein} 0.3s ease-in-out;
`;

const CarouselStyle = {
  Container,
  Card,
  CarouselContainer,
  BaseContainer,
  CardsContainer,
  TextContainer,
};

export default CarouselStyle;
