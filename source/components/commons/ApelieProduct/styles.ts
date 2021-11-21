import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
  background-color: ${({ theme }) => theme.colors.background.default};
  gap: 5px;
  padding: 15px 25px;
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  user-select: none;
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  :hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.shadow.nivel3};
  }
  & > #apelie-product-name-and-price {
    display: flex;
    flex-direction: column;
    gap: 5px;
    & > :first-child {
      word-break: break-all;
    }

    & > :last-child {
      min-width: fit-content;
    }
  }
  
  & > #product-category {
    & > label {
      font-weight: bold;
    }
  }
  & > #product-quantity {
    & > label {
      font-weight: bold;
    }
  }

  & > #apelie-product-edit {
    display: flex;
    margin-left: auto;
  }

  & > div#apelie-product-wrapper > div#apelie-product-list {
    display: flex;
    justify-content: space-around;
    gap: 5px;
      ${breakpointsMedia({
    md: css`
          gap: 15px;
        }
      `,
  })}
  }

  ${breakpointsMedia({
    sm: css`
       width: 350px;
       & > #apelie-product-name-and-price {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: flex-start;
      }
    `,
  })}
`;

const ProductImageContainer = styled.img`
  width: auto;
  height: 100px;
  border: 3px solid ${({ theme }) => theme.colors.divider};
  ${breakpointsMedia({
    sm: css`
      width: auto;
      height: 125px;
    `,
  })}
`;

const ApelieProductStyle = {
  Container,
  ProductImageContainer,
};

export default ApelieProductStyle;
