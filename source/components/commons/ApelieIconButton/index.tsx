import React, { ReactNode } from 'react';
import IconButtonStyle from './styles';

type IconButtonType = {
  id?: string;
  disabled?: boolean;
  isPadding?: boolean;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
};

const ApelieIconButton: React.FC<IconButtonType> = ({
  id,
  disabled = false,
  isPadding = false,
  className,
  children,
  onClick,
}) => (
  <IconButtonStyle.Container
    id={id}
    disabled={disabled}
    className={className}
    isPadding={isPadding}
    onClick={() => onClick && onClick()}
  >
    {children}
  </IconButtonStyle.Container>
);

export default ApelieIconButton;
