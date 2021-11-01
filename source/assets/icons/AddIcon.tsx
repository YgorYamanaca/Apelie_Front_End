import React from 'react';
import { withTheme, StyledProps } from 'styled-components';
import { IIcon } from '@/types/interfaces/interface-apelie-icon';

const AddIcon: React.FC<StyledProps<IIcon>> = ({
  id,
  width = '18',
  height = '18',
  theme,
  fill = theme.colors.text.contrastText,
}) => (
  <svg
    id={id}
    xmlns="http://www.w3.org/2000/svg"
    width={`${width}px`}
    height={`${height}px`}
    fill={fill}
    viewBox="0 0 24 24"
  >
    <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm6 13h-5v5h-2v-5h-5v-2h5v-5h2v5h5v2z" />
  </svg>
);

export default withTheme(AddIcon);
