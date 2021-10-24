import React, { ReactNode } from 'react';
import IconButtonStyle from './styles';

type IconButtonType = {
  id?: string;
  disabled?: boolean;
  color?: string;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

const ApelieIconButton: React.FC<IconButtonType> = ({
  id,
  disabled = false,
  color,
  className,
  children,
  onClick,
}) => (
  <IconButtonStyle.Container
    id={id}
    disabled={disabled}
    className={className}
    color={color}
    onClick={() => onClick && onClick()}
  >
    {children}
  </IconButtonStyle.Container>
);

export default ApelieIconButton;
