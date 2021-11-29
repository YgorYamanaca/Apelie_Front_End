import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  padding: 10px 15px;
  margin-bottom: 15px;
  height: fit-content;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.nivel1};

  & > #add-tracking-button {
    display: flex;
    position: absolute;
    bottom: 15px;
    right: 15px;
  }

  & > div#product-name-and-id {
    display: flex;
    flex-direction: column;
    margin-bottom: 25px;
    & > span > label {
      font-weight: 600;
    }
    & > #split {
      display: none;
    }
    ${breakpointsMedia({
    md: css`
      flex-direction: row;
      & > #split {
        display: flex;
      }
      
      & > #add-tracking-button {
        top: 15px;
      }
    `,
  })}
  };

  & > #has-more-info > div {
    transform: rotate(90deg);
  }

  & > #hasent-more-info > div {
    transform: rotate(270deg);
  }

  ${breakpointsMedia({
    md: css`
      display: flex;
      width: 100%;
      padding: 15px 10px;
    `,
  })}
`;

const OrderResume = styled.div`
  display: grid;
  width: 100%;
  & > div > label {
    font-weight: 600;
  }

  & > div#order_date {
    grid-area: 'order_date';
  }

  & > div#order_status {
    grid-area: 'order_status';
    & > span#Finished {
      color: ${({ theme }) => theme.colors.success.main};
    }
    & > span#CANCELED {
      color: ${({ theme }) => theme.colors.error.main};
    }
    & > span {
      color: ${({ theme }) => theme.colors.info.main};
    }
  }

  & > div#payment_method {
    grid-area: 'payment_method';
  }

  & > div#total_price {
    grid-area: 'total_price';
  }

    ${breakpointsMedia({
    md: css`
      display: grid; 
      grid-template-columns: repeat(2, auto); 
      grid-template-rows: repeat(2, auto);
      grid-template-areas: 
      "order_date order_status"
      "payment_method total_price";
      justify-content: space-around;
      gap: 15px 0;
    `,
  })}
`;

interface IItemsListWrapper {
  hasMoreInfo: boolean,
}

const ItemsListWrapper = styled.div<IItemsListWrapper>`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: ${({ hasMoreInfo }) => (hasMoreInfo ? '100%' : '0')};
  overflow: hidden;
  animation: height 1s ease-in-out;
  justify-content: space-evenly;
  width: 100%;
  margin-top: 15px;
  gap: 15px;
  ${breakpointsMedia({
    md: css`
      flex-direction: row;
      gap: 0px;
    `,
  })}
`;

const ItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 100%;
  ${breakpointsMedia({
    md: css`
      flex-direction: row;
      gap: 15px;
      width: 75%;
      max-width: 750px;
    `,
  })}
`;

const AddressToSendProductWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 15px;
  & > div#address-detail {
    display: flex;
    flex-direction: column;

    & > div > label {
      font-weight: 600;
    }
  }

  & > label {
    font-weight: 600;
  }
`;

const OrderProductWrapper = styled.div`
  display: flex;
  flex: 1;
  padding: 10px;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.default};
  border-radius: 5px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  justify-content: center;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  gap: 10px;
  & > #product-description {
      display: flex;
      flex-direction: column;
      word-break: break-all;
      & > :last-child {
          text-indent: 10px;
      }
    }

  & > span > label {
    font-weight: 600;
  }

  ${breakpointsMedia({
    md: css`
      display: flex;
      padding: 15px;
      gap: 15px;
    `,
  })}
`;

const ImageContainer = styled.div`
  display: flex;
  padding: 10px;
  place-items: center;
  min-height:100px;
  min-width: 150px;
  ${breakpointsMedia({
    md: css`
      display: flex;
      padding: 15px;
      place-items: center;
      min-height:150px;
      min-width: 200px;
      border: 1px solid ${({ theme }) => theme.colors.divider};
    `,
  })}
`;

const ApelieStoreOrderStyles = {
  Container,
  OrderResume,
  ItemsListWrapper,
  ItemWrapper,
  OrderProductWrapper,
  AddressToSendProductWrapper,
  ImageContainer,
};

export default ApelieStoreOrderStyles;
