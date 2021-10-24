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
  height: 250px;
  background-color: red;
  ${breakpointsMedia({
    md: css`
      width: 50%;
    `,
  })}
`;

const StoreScreenStyle = {
  Container,
  StoreInfoContainer,
};

export default StoreScreenStyle;
