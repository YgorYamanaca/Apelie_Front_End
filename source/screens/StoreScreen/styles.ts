import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${breakpointsMedia({
    md: css`
      padding: 15px 0;
    `,
  })}
`;

const StoreInfoContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 35px 0;

  ${breakpointsMedia({
    md: css`
      width: 50%;
      margin: 50px 0;
    `,
  })}
`;

const ProductContainer = styled.div`

  & > div#title-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
  }

  & > div#product-items-container {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 25px;
    gap: 35px 45px;
  }

  ${breakpointsMedia({
    md: css`
      & > div#product-items-container {
        justify-content: space-evenly;
        padding: 25px;
        gap: 35px 45px;
      }
    `,
  })}
`;

const StoreScreenStyle = {
  Container,
  StoreInfoContainer,
  ProductContainer,
};

export default StoreScreenStyle;
