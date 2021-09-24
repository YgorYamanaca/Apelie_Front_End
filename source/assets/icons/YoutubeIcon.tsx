import React from 'react';
import { withTheme, StyledProps } from 'styled-components';
import { IIcon } from '@/types/interfaces/interface-apelie-icon';

const YoutubeIcon: React.FC<StyledProps<IIcon>> = ({
  id = 'YoutubeIcon',
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
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

export default withTheme(YoutubeIcon);
