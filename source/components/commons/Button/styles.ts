import get from 'lodash/get';
import styled from 'styled-components';

interface IButtonStyle {
  readonly ghost: boolean,
  readonly color: 'primary' | 'secondary'
}

const Container = styled.button<IButtonStyle>`
  width: 100%;
  outline: none;
  border: 0;
  color: ${({ theme, color }) => get(theme, `colors.${color}.contrastText`)};
  background-color: ${({ theme, color }) => get(theme, `colors.${color}.alternative`)};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 6.5px;
  cursor: pointer;
  :hover {
    filter: brightness(0.9);
  }
  :active {
    transform: scale(0.97, 0.97);
  }
  transition: filter 0.3s ease-in-out, transform 0.3s ease-in-out;
`;

const ButtonStyle = {
  Container,
};

export default ButtonStyle;
