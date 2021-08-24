import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  & > form {
    text-align: center;
    margin-top: 35px;
  }
  ${breakpointsMedia({
    md: css`
      margin-top: 40px;
    `,
  })}
`;

const LoginBox = {
  Container,
};

export default LoginBox;
