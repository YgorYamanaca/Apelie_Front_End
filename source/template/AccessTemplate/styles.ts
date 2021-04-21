/* eslint-disable indent */
import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  overflow-x: hidden;
  overflow-y: hidden;
  flex-direction: column;
  padding: 15px;
  ${breakpointsMedia({
    sm: css`
      flex-direction: row;
      padding: 0 15px;
    `,
  })}
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  user-select: none;
  background-size: auto;
  background-position: center;
  background-repeat: no-repeat;
  background-clip: content-box;
  flex: 1;
  margin-bottom: 20px;

  ${breakpointsMedia({
    sm: css`
      flex: 2;
    `,
  })}

&:before {
    content: '';
    width: 250px;
    height: 250px;
    filter: blur(15px);
    ${breakpointsMedia({
      md: css`  
        width: 600px;
        height: 600px;
      `,
      sm: css`  
        width: 350px;
        height: 350px;
      `,
    })}
    z-index: 1;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary.alternative};
    border-radius: 100%;
    top: 50%;
    left: 50%;  
    transform: translate(-50%, -50%);
    transition: size 5s ease-in-out;
  }
  
  & > img {
    z-index: 10;
    align-self: center;
    max-width: 400px;
    max-height: 450px;
    user-select: none;
    ${breakpointsMedia({
      md: css`
        position: absolute;
      `,
      sm: css`
        max-width: 700px;
        max-height: 750px;
      `,
    })}
  }
`;

const ChildrenContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: auto;
  flex: 3;
  z-index: 5;
  ${breakpointsMedia({
    sm: css`
      flex: 1;
    `,
  })}
`;

const ChildrenBox = styled.div`
  display: flex;
  height: 450px;
  flex-direction: column;
  & > div:first-of-type {
    display: flex;
    justify-content: center;
    padding: 15px 35px;
  }

  ${breakpointsMedia({
    md: css`
      width: 375px;
    `,
    sm: css`
      border: 1px solid ${({ theme }) => theme.colors.divider};
      background-color: ${({ theme }) => theme.colors.background.default};
      width: 285px;
      box-shadow: ${({ theme }) => theme.shadow.nivel2}
    `,
    xs: css`
      width: 100%;
    `,
  })}
`;

const AccessTemplateStyles = {
  Container,
  ImageContainer,
  ChildrenContainer,
  ChildrenBox,
};

export default AccessTemplateStyles;
