import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
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
  justify-content: center;
  ${breakpointsMedia({
    md: css`
      width: 50%;
      margin: 50px 0;
      justify-content: flex-start;
    `,
  })}
`;

const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > div#title-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 0;
  }

  & > div#product-items-container {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 5px;
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

const StoreReviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 25px 0;
  & > div#title-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin: 15px 0;
  }
  & > div#store-review-container {
    display: flex;
    justify-content: center;
    align-content: center;
    flex-wrap: wrap;
    padding: 5px;
    gap: 35px 45px;
  }

  ${breakpointsMedia({
    md: css`
      & > div#store-review-container {
        justify-content: flex-start;
        padding: 25px;
      }
    `,
  })}
`;

const StoreScreenStyle = {
  Container,
  StoreInfoContainer,
  ProductContainer,
  StoreReviewContainer,
};

export default StoreScreenStyle;
