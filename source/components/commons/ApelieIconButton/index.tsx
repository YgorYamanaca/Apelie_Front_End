import React, { ReactNode } from 'react';
import IconButtonStyle from './styles';

type IconButtonType = {
  disabled?: boolean;
  color?: string;
  className?: string;
  children: ReactNode;
  onClick?: Function;
}

const ApelieIconButton: React.FC<IconButtonType> = ({
  disabled = false,
  color,
  className,
  children,
  onClick,
}) => (
  <IconButtonStyle.Container
    disabled={disabled}
    className={className}
    color={color}
    onClick={() => onClick && onClick()}
  >
    {children}
  </IconButtonStyle.Container>
);

export default ApelieIconButton;
