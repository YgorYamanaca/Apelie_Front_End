import React from 'react';
import { withTheme, StyledProps } from 'styled-components';
import { ISimpleIcon } from '@/types/interfaces/interface-apelie-simple-icon';

const MoonIcon: React.FC<StyledProps<ISimpleIcon>> = ({
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
    <path d="M0 12c0 6.627 5.373 12 12 12s12-5.373 12-12-5.373-12-12-12-12 5.373-12 12zm2 0c0-5.292 4.113-9.612 9.315-9.965-3.205 2.154-5.315 5.813-5.315 9.965s2.11 7.811 5.315 9.965c-5.202-.353-9.315-4.673-9.315-9.965z" />
  </svg>
);

export default withTheme(MoonIcon);
