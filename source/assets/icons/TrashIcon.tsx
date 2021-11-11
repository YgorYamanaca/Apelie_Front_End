import React from 'react';
import { withTheme, StyledProps } from 'styled-components';
import { IIcon } from '@/types/interfaces/interface-apelie-icon';

const TrashIcon: React.FC<StyledProps<IIcon>> = ({
  id,
  width = '18',
  height = '18',
  theme,
  fill = theme.colors.error.main,
}) => (
  <svg
    id={id}
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path d="M3 6l3 18h12l3-18h-18zm19-4v2h-20v-2h5.711c.9 0 1.631-1.099 1.631-2h5.316c0 .901.73 2 1.631 2h5.711z" />
  </svg>
);

export default withTheme(TrashIcon);
