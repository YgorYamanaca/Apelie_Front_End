import React, { ReactNode } from 'react';
import IconButtonStyle from './styles';

type IconButtonType = {
  disabled?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: Function;
}

const IconButton: React.FC<IconButtonType> = ({
  disabled = false,
  className,
  children,
  onClick,
}) => (
  <IconButtonStyle.Container
    disabled={disabled}
    className={className}
    onClick={() => onClick && onClick()}
  >
    {children}
  </IconButtonStyle.Container>
);

export default IconButton;
