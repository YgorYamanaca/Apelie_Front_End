import React from 'react';
import { withTheme, StyledProps } from 'styled-components';
import { IIcon } from '@/types/interfaces/interface-apelie-icon';

const EditIcon: React.FC<StyledProps<IIcon>> = ({
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
    <path d="M7.127 22.564l-7.126 1.436 1.438-7.125 5.688 5.689zm-4.274-7.104l5.688 5.689 15.46-15.46-5.689-5.689-15.459 15.46z" />
  </svg>
);

export default withTheme(EditIcon);
