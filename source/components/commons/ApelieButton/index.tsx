import React, { ButtonHTMLAttributes } from 'react';
import ITextColor from '@/types/interfaces/interface-text-color';
import ITypographyVariants from '@/types/interfaces/interface-typography-variants';
import ApelieTextBase from '../ApelieTextBase';
import ButtonStyle from './styles';

interface IButton {
  id?: string;
  disabled?: boolean;
  ghost?: boolean;
  onClick?: VoidFunction;
  buttonColor?: 'primary' | 'secondary';
  buttonType?: 'primary' | 'secondary';
  textColor?: keyof ITextColor | 'none';
  textVariant?: keyof ITypographyVariants;
  type?: ButtonHTMLAttributes<HTMLButtonElement>['type'];
  icon?: React.ReactNode;
}

const ApelieButton: React.FC<IButton> = ({
  id,
  disabled = false,
  ghost = false,
  onClick = () => '',
  buttonColor = 'primary',
  buttonType = 'primary',
  type = 'button',
  textVariant,
  textColor = 'contrastText',
  children,
  icon,
}) => (
  <ButtonStyle.Container
    id={id}
    disabled={disabled}
    ghost={ghost}
    buttonColor={buttonColor}
    buttonType={buttonType}
    type={type}
    onClick={() => !disabled && onClick && onClick()}
  >
    {icon}
    <ApelieTextBase variant={textVariant} color={ghost ? 'none' : textColor}>
      {children}
    </ApelieTextBase>
  </ButtonStyle.Container>
);

export default ApelieButton;
