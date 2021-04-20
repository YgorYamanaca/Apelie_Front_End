import IColors from '@/types/interfaces/interface-colors';

const darkPalette: IColors = {
  primary: {
    main: 'rgba(0, 133, 229, 1)',
    alpha: 'rgba(0, 133, 229, 0.5)',
    dark: 'rgba(0, 93, 160, 1)',
    contrastText: '#fff',
  },
  secondary: {
    main: 'rgba(253, 190, 1, 1)',
    alpha: 'rgba(253, 190, 1, 0.5)',
    dark: 'rgba(177, 133, 0, 1)',
    contrastText: '#fff',
  },
  error: 'rgba(229, 115, 115, 1)',
  warning: 'rgba(255, 183, 77, 1)',
  info: 'rgba(100, 181, 246, 1)',
  success: 'rgba(129, 199, 132, 1)',
  background: 'rgba(48, 48, 48, 1)',
  divider: 'rgba(255, 255, 255, 0.12)',

  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
};

export default darkPalette;
