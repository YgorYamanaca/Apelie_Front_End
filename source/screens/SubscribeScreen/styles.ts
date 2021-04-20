import styled from 'styled-components';

const Title = styled.h1`
  color: red;
  font-size: 50px;
  background-color: ${({ theme }) => theme.colors.background};
  width: 400px;
  height: 500px;
  margin: 0;
`;

export default Title;
