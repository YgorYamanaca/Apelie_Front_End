import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  align-items: center;
  & > :last-child {
    color: ${({ theme }) => theme.colors.text.primary}
  }
`;

const StyleApelieRating = {
  Container,
};

export default StyleApelieRating;
