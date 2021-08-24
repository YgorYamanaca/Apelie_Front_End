import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  & > :first-child {
    text-align: center;
    margin: 15px 0;
  }

  & > :last-child > :last-child {
    text-align: center;
    margin: 25px 10px 0 10px;
    ${breakpointsMedia({
    md: css`
      margin: 25px 15px 0 15px;
    `,
  })}
  }
`;

const SubscribeBox = {
  Container,
};

export default SubscribeBox;
