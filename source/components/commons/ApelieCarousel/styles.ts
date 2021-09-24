import styled, { css } from 'styled-components';
import Animations from '@/utils/animations';
import breakpointsMedia from '@/utils/breakpointsMedia';

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
  padding: 0 5px;
  ${breakpointsMedia({
    md: css`
      padding-top: 10px;
      padding: 0 35px;
    `,
  })}
`;
interface IBaseContainer {
  baseSize: number;
  length: number;
}

const BaseContainer = styled.div<IBaseContainer>`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: row;
  height: ${({ baseSize }) => baseSize - 15}px;
  justify-content: flex-start;
  align-items: center;
  overflow-x: scroll;
  ${({ baseSize, length }) => breakpointsMedia({
    sm: css`
        height: ${baseSize}px;
        overflow: hidden;
        justify-content: ${length > 2 ? 'flex-start' : 'center'};
      `,
  })}
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
