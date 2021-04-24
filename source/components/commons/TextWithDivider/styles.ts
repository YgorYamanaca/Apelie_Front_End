import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display:flex;
  width: 100%;
  position: relative;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
  & > hr {
    position: absolute;
    color: ${({ theme }) => theme.colors.divider};
    width: 100%;
    z-index: 1;
  }
`;

const TextBox = styled.div`
  width: fit-content;
  background-color: ${({ theme }) => theme.colors.background.paper};
  ${breakpointsMedia({
    md: css`
      background-color: ${({ theme }) => theme.colors.background.default};
    `,
  })}
  z-index: 2;
  padding: 15px;
  user-select: none;
`;

const TextWithDividerStyle = {
  Container,
  TextBox,
};

export default TextWithDividerStyle;
