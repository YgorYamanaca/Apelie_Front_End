import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  position: relative;
  flex: 1;
  align-items: center;
  & > svg:not(:first-child),
  svg:not(:last-child) {
    margin: 0 2.5px;
  }

  & > div {
    transition: opacity 0.3s ease-in-out;
  }

  & > div:last-child {
    display: flex;
    position: absolute;
    opacity: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    user-select: none;
    white-space: nowrap;
  }

  :hover {
    & > div :first-child {
      opacity: 0;
    }
    & > div :last-child {
      opacity: 1;
    }
  }
`;

const StyleApelieRating = {
  Container,
};

export default StyleApelieRating;
