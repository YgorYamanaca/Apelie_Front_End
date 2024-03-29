import React from 'react';
import { withTheme, StyledProps } from 'styled-components';
import { IIcon } from '@/types/interfaces/interface-apelie-icon';

const CloseIcon: React.FC<StyledProps<IIcon>> = ({
  id,
  width = '18',
  height = '18',
  theme,
  fill = theme.colors.text.primary,
}) => (
  <svg
    id={id}
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z" />
  </svg>
);

export default withTheme(CloseIcon);
