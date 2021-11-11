import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ChildrenContainer = styled.main`
  display: flex;
  flex: 1;
  padding: 0 15px;
  margin-top: 70px;

  & > main > div#apelie-loading {
    display: flex;
    align-items: center;
    justify-self: center;
    align-self: center;
    height: 100%;
  }

  ${breakpointsMedia({
    sm: css`
      margin-top: 95px;
    `,
  })}
`;

const StyleCommonTemplate = {
  Container,
  ChildrenContainer,
};

export default StyleCommonTemplate;
