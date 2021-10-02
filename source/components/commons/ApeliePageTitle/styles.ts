import styled from 'styled-components';

const Container = styled.header`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  & > hr {
    margin-top: 5px;
    color: ${({ theme }) => theme.colors.divider};
    width: 100%;
  }
`;

const ApeliePageTitleStyle = {
  Container,
};

export default ApeliePageTitleStyle;
