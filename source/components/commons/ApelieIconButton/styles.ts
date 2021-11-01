import styled, { css } from 'styled-components';

interface IContainer {
  disabled: boolean;
  isPadding: boolean;
  color?: string;
}

const Container = styled.div<IContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  min-height: 35px;
  min-width: 35px;
  cursor: pointer;
  user-select: none;
  align-self: center;
  padding: ${({ isPadding }) => isPadding && '10px'};
  &:hover {
    filter: brightness(1.5);
  }

  & > svg {
    transition: filter 0.3s ease-in-out;
  }

  &:active {
    transform: scale(0.97, 0.97);
  }

  ${({ disabled }) => disabled
    && css`
      filter: brightness(0.5);
      pointer-events: none;
    `}
`;

const IconButtonStyle = {
  Container,
};

export default IconButtonStyle;
