import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

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
  & > div {
    margin: 0 15px;
    background-color: yellow;
    width: 200px;
    height: 200px;
    ${breakpointsMedia({
    md: css`
        margin: 0 35px;
        width: 300px;
        height: 250px;
      `,
  })}
  }
`;

const CarouselStyle = {
  Container,
  Card,
  BaseContainer,
  CardsContainer,
};

export default CarouselStyle;
