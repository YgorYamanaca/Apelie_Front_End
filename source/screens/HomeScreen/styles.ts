import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ImageBox = styled.div`
  display: flex;
  flex: 1.35;
  flex-direction: column;
  & > img {
    align-self: center;
    max-width: 400px;
    max-height: 400px;
  }

  ${breakpointsMedia({
    md: css`
      flex: 1.4;
    `,
  })}
  background-color: ${({ theme }) => theme.colors.background.default};
`;

const StoresBox = styled.div`
  display: flex;
  flex: 1;
  max-height: 100%;
`;

const HomeBox = {
  Container,
  ImageBox,
  StoresBox,
};

export default HomeBox;
