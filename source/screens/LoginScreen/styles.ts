import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.section`
  background-color: ${({ theme }) => theme.colors.background};
  height: 450px;
  ${breakpointsMedia({
    md: css`
      width: 375px;
    `,
    sm: css`
      width: 300px;
    `,
    xs: css`
      width: 100%;
    `,
  })}
`;

const LoginBox = {
  Container,
};

export default LoginBox;
