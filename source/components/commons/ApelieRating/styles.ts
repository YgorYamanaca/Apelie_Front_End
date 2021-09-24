import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  align-items: center;
  & > :last-child {
    color: ${({ theme }) => theme.colors.secondary.main};
    margin-left: 5px;
  }
`;

const StyleApelieRating = {
  Container,
};

export default StyleApelieRating;
