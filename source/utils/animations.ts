import { keyframes } from 'styled-components';

const fadein = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

const leftToRight = keyframes`
  from {
    left: -50%;
    opacity: 0;
  }

  to {
    left: 0;
    opacity: 1;
  }
`;

const rightToLeft = keyframes`
  from {
    right: -50%;
    opacity: 0;
  }

  to {
    right: 0;
    opacity: 1;
  }
`;

const Animations = {
  fadein,
  leftToRight,
  rightToLeft,
};

export default Animations;
