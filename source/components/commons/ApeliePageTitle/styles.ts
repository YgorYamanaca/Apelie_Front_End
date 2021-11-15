import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
  text-align: center;
  & > hr {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.divider};
    width: 100%;
  }

  ${breakpointsMedia({
    md: css`
      margin-bottom: 20px;
    `,
  })}
`;

const ApeliePageTitleStyle = {
  Container,
};

export default ApeliePageTitleStyle;
