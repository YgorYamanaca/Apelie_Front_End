import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.header`
  width: 100%;
  height: 65px;
  padding: 10px;
  ${breakpointsMedia({
    sm: css`
      height: 80px;
      padding: 15px;
    `,
  })}
`;

const ApelieHeaderStyle = {
  Container,
};

export default ApelieHeaderStyle;
