import ITextColor from '@/types/interfaces/interface-text-color';
import React, { ButtonHTMLAttributes } from 'react';
import TextBase from '../TextBase';
import ButtonStyle from './styles';

interface IButton {
  disabled?: boolean,
  ghost?: boolean,
  onClick?: Function,
  buttonColor?: 'primary' | 'secondary';
  textColor?: keyof ITextColor | 'none';
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type']
}

const Button: React.FC<IButton> = ({
  disabled = false,
  ghost = false,
  onClick = () => {},
  buttonColor = 'primary',
  type = 'button',
  textColor,
  children,
}) => (
  <ButtonStyle.Container
    disabled={disabled}
    ghost={ghost}
    buttonColor={buttonColor}
    type={type}
    onClick={() => !disabled && onClick && onClick()}
  >
    <TextBase color={ghost ? 'none' : textColor}>
      {children}
    </TextBase>
  </ButtonStyle.Container>
);

export default Button;
