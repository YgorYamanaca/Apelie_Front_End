import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TextContainer = styled.div`
  padding: 0 5px;
  ${breakpointsMedia({
    md: css`
      padding-top: 10px;
      padding: 0 35px;
    `,
  })}
`;

const ChildrenContainer = styled.div`
  display: flex;

  flex-wrap: wrap;
  justify-content: center;
  & > div {
    margin: 25px 15px;
  }
  ${breakpointsMedia({
    sm: css`
      padding: 20px 75px;
      & > div {
        margin: 25px 15px;
      }
    `,
  })}
`;

const ApelieFlexBoxStyle = {
  Container,
  TextContainer,
  ChildrenContainer,
};

export default ApelieFlexBoxStyle;
