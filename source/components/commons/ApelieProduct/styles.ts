import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  gap: 10px;
  padding: 20px 15px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  & > #apelie-product-name-and-price {
    display: flex;
    flex-direction: column;
  }

  & > #apelie-product-edit {
    display: flex;
    margin-left: auto;
  }

  & > div#apelie-product-wrapper > div#apelie-product-list {
    display: flex;
    justify-content: space-around;
  }

  ${breakpointsMedia({
    sm: css`
       width: 350px;
       & > #apelie-product-name-and-price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
      }
    `,
  })}
`;

const ProductImageContainer = styled.img`
  width: 50px;
  height: 50px;
  ${breakpointsMedia({
    sm: css`
      width: 100px;
      height: 100px;
    `,
  })}
`;

const ApelieProductStyle = {
  Container,
  ProductImageContainer,
};

export default ApelieProductStyle;
