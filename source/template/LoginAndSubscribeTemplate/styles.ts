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
      sm: css`  
          width: 600px;
          height: 600px;
          filter: blur(50px);
        `,
    })}
    z-index: 1;
    position: absolute;
    background-color: ${({ theme }) => theme.colors.secondary.light};
    border-radius: 100%;
    top: 50%;
    left: 50%;  
    transform: translate(-50%, -50%);
    transition: size 5s ease-in-out;
  }
  
  & > img {
    z-index: 10;
    align-self: center;
    max-width: 700px;
    max-height: 750px;
    ${breakpointsMedia({
      md: css`
            position: absolute;
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

const LoginAndSubscribeTemplateStyles = {
  Container,
  ImageContainer,
  ChildrenContainer,
};

export default LoginAndSubscribeTemplateStyles;
