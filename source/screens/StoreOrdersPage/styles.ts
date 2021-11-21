import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 10px;
  ${breakpointsMedia({
    md: css`
      padding: 15px 35px;
    `,
  })}
`;

const OrdersContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 15px;
`;

const StoreOrdersScreenStyles = {
  Container,
  OrdersContainer,
};

export default StoreOrdersScreenStyles;
