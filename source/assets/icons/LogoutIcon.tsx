import React from 'react';
import { withTheme, StyledProps } from 'styled-components';

interface IIcon {
  width?: string;
  height?: string;
}

const LogoutIcon: React.FC<StyledProps<IIcon>> = ({
  width = '18',
  height = '18',
  theme,
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    fill={theme.colors.text.contrastText}
    viewBox="0 0 24 24"
  >
    <path d="M16 10v-5l8 7-8 7v-5h-8v-4h8zm-16-8v20h14v-2h-12v-16h12v-2h-14z" />
  </svg>
);

export default withTheme(LogoutIcon);
