import get from 'lodash/get';
import styled, { css } from 'styled-components';

interface IButtonStyle {
  readonly ghost: boolean,
  readonly buttonColor: 'primary' | 'secondary';
}

const Container = styled.button<IButtonStyle>`
  width: 100%;
  outline: none;
  border: 0;
  user-select: none;
  background-color: ${({ theme, buttonColor, ghost }) => (
    ghost ? 'transparent' : get(theme, `colors.${buttonColor}.alternative`)
  )};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 8px;

  ${({ disabled, ghost }) => (
    disabled ? css`
    cursor: not-allowed;
    filter: brightness(0.5);
  ` : css`
    cursor: pointer;
    :active {
      transform: scale(0.98, 0.98);
    }
    ${!ghost ? css`
      :hover {
        filter: brightness(0.9);
      }`
      : css`
      :hover {
        text-decoration: underline;
      }`
    }
  `)};
  
  color: ${({ theme, ghost, buttonColor }) => (ghost
    && get(theme, `colors.${buttonColor}.alternative`)
  )};

  transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const ButtonStyle = {
  Container,
};

export default ButtonStyle;
