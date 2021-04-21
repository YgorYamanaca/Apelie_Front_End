import React, { ButtonHTMLAttributes } from 'react';
import TextBase from '../TextBase';
import ButtonStyle from './styles';

interface IButton {
  ghost?: boolean,
  color?: 'primary' | 'secondary'
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button: React.FC<IButton> = ({
  ghost = false,
  color = 'primary',
  type = 'button',
  children,
}) => (
  <ButtonStyle.Container
    ghost={ghost}
    color={color}
    type={type}
  >
    <TextBase>
      {children}
    </TextBase>
  </ButtonStyle.Container>
);

export default Button;
