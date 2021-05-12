import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ChildrenContainer = styled.div`
  display: flex;
  padding: 0 15px;
`;

const StyleCommonTemplate = {
  Container,
  ChildrenContainer,
};

export default StyleCommonTemplate;
