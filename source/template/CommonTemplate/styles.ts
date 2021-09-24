import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ChildrenContainer = styled.div`
  display: flex;
  padding: 0 15px;
  margin-top: 70px;
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
