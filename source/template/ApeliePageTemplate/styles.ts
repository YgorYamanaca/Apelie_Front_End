import styled from 'styled-components';

const Container = styled.div`
  display:flex;
  flex: 1;
  background-color: ${({ theme }) => theme.colors.background};
`;

const PageStyles = {
  Container,
};

export default PageStyles;
