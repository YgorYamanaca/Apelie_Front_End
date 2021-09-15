import React from 'react';
import { withTheme, StyledProps } from 'styled-components';
import { IIcon } from '@/types/interfaces/interface-apelie-icon';

const MenuButtonIcon: React.FC<StyledProps<IIcon>> = ({
  id,
  width = '18',
  height = '18',
  theme,
}) => (
  <svg
    id={id}
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    x="0px"
    y="0px"
    viewBox="0 0 124 124"
    xmlSpace="preserve"
    width={`${width}px`}
    height={`${height}px`}
    fill={theme.colors.text.primary}
  >
    <g>
      <path d="M112,6H12C5.4,6,0,11.4,0,18s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,6,112,6z" />
      <path d="M112,50H12C5.4,50,0,55.4,0,62c0,6.6,5.4,12,12,12h100c6.6,0,12-5.4,12-12C124,55.4,118.6,50,112,50z" />
      <path d="M112,94H12c-6.6,0-12,5.4-12,12s5.4,12,12,12h100c6.6,0,12-5.4,12-12S118.6,94,112,94z" />
    </g>
  </svg>
);

export default withTheme(MenuButtonIcon);
