import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 10px;
  & > div#image-container {
    display: none;
  }
  
  ${breakpointsMedia({
    md: css`
      padding: 35px 10px;
      & > div#image-container {
        display: flex;
        position: absolute;
        justify-content: space-between;
        width: 100%;
        bottom: 0;
      };
    `,
  })}
`;

const RegisterStoreScreenStyle = {
  Container,
};

export default RegisterStoreScreenStyle;
