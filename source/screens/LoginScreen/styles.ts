import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display:flex;
  flex: 1;
  flex-direction: column;
  padding: 15px 35px;
  ${breakpointsMedia({
    md: css`
      padding: 15px 55px;
    `,
  })}
`;

const LoginBox = {
  Container,
};

export default LoginBox;
