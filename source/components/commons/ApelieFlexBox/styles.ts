import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const TextContainer = styled.div`
  padding: 0 35px;
  padding-top: 10px;
`;

const ChildrenContainer = styled.div`
  display: flex;
  padding: 20px;
  flex-wrap: wrap;
  justify-content: space-between;
  & > div {
    margin: 5px;
  }
`;

const ApelieFlexBoxStyle = {
  Container,
  TextContainer,
  ChildrenContainer,
};

export default ApelieFlexBoxStyle;
