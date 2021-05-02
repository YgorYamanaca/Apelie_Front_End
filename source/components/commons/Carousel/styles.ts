import Animations from '@/utils/animations';
import styled, { css } from 'styled-components';

interface IContainer{
  selected: number;
}

let prevSelected = 1;

const Container = styled.div<IContainer>`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;

  & > div.BaseContainer > :not(div.CardsContainer-${({ selected }) => selected}){
    ${({ selected }) => (
    // eslint-disable-next-line no-nested-ternary
    selected === prevSelected
      ? css`display: none`
      : selected > prevSelected
        ? css`
          animation: ${Animations.outOfScreenLeft} 0.3s ease-in-out forwards;
        `
        : css`
        animation: ${Animations.outOfScreenRight} 0.3s ease-in-out forwards;
      `)};
  }

  & > div.BaseContainer > div.CardsContainer-${({ selected }) => selected} {
    ${({ selected }) => (
    // eslint-disable-next-line no-nested-ternary
    selected === prevSelected
      ? css`animation: ${Animations.fadein} 0.3s ease-in-out`
      : selected > prevSelected
        ? css`
          animation: ${Animations.rightToLeft} 0.3s ease-in-out;
        `
        : css`
        animation: ${Animations.leftToRight} 0.3s ease-in-out;
      `)};
  }

  // eslint-disable-next-line no-return-assign
  ${({ selected }) => { prevSelected = selected; return ''; }}
`;

const BaseContainer = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  flex-direction: row;
  height: 100%;
  justify-content: center;
  align-items: center;
  overflow-x: hidden;
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  position: absolute;
`;

const Card = styled.div`
  margin: 25px;
  & > div {
    background-color: yellow;
    width: 350px;
    height: 250px;
  }
`;

const CarouselStyle = {
  Container,
  Card,
  BaseContainer,
  CardsContainer,
};

export default CarouselStyle;
