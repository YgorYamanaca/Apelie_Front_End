import styled, { css } from 'styled-components';

interface IContainer {
  disabled: boolean
}

const Container = styled.div<IContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 35px;
  width :35px;
  cursor: pointer;
  &:hover{
    filter: brightness(1.5);
  };
  
  & > svg {
    width: 25px;
    height: 25px;
    fill: ${({ theme }) => theme.colors.primary.alternative};
    transition: filter 0.3s ease-in-out;
  };

  &:active{
    transform: scale(0.97,0.97);
  }

  ${({ disabled }) => disabled && css`
    filter: brightness(0.5);
    pointer-events: none;
  `}
`;

const IconButtonStyle = {
  Container,
};

export default IconButtonStyle;
