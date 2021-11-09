import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${breakpointsMedia({
    md: css`
      padding: 15px 5px;
    `,
  })}
`;

const StoreInfoContainer = styled.div`
  display: flex;
  width: 100%;
  background-color: transparent;
  margin: 35px 0;

  & > #store-info-container {
    display: flex;
    flex-direction: column;
    width: 100%;
    & > #store-detail-and-rating {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      gap: 15px;
      width: 100%;
      & > #store-name-and-state {
        display: flex;
        flex-direction: column;
      }

      & > #store-rating {
        margin-left: auto;
      }
    }
    
    & > #store-description {
      padding: 15px 5px;
      text-indent: 15px;
    }
  }

  ${breakpointsMedia({
    md: css`
      width: 25%;
      margin: 50px 15px;
      & > #store-info-container {
      & > #store-description {
        margin-left: 75px;
      }
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
