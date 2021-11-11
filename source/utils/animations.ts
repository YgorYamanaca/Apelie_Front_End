import { keyframes } from 'styled-components';

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    display: none;
  }
`;

const leftToRight = keyframes`
  from {
    transform: translateX(-1000px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const rightToLeft = keyframes`
  from {
    transform: translateX(1000px);
    opacity: 0;
  }

  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

const outOfScreenLeft = keyframes`
  from {
    transform: translateX(0px);
    opacity: 1;
  }

  to {
    transform: translateX(-1000px);
    opacity: 0;
  }
`;

const outOfScreenRight = keyframes`
  from {
    transform: translateX(0px);
    opacity: 1;
  }

  to {
    transform: translateX(1000px);
    opacity: 0;
  }
`;

const rotate360 = keyframes`
  from {
    transform: rotateY(0deg);
  }

  to {
    transform: rotateY(-360deg);
  }
`;

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;

const slide = keyframes`
  from {
    transform: translateX(0);
  }

  to {
    transform: translateX(-75%);
  }
`;

const Animations = {
  fadein,
  fadeOut,
  leftToRight,
  rightToLeft,
  rotate360,
  spin,
  outOfScreenRight,
  outOfScreenLeft,
  slide,
};

export default Animations;
