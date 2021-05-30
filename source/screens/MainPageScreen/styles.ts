import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const PageSection = styled.section`
  display: flex;
  padding-bottom: 5px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.divider};
  margin-top: 20px;
  ${breakpointsMedia({
    md: css`
        padding-bottom: 15px;
      `,
  })
}
`;

const MainPageScreenStyle = {
  Container,
  PageSection,
};

export default MainPageScreenStyle;
