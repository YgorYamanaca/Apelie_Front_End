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
  error: {
    main: 'rgba(211, 47, 47, 1)',
  },
  warning: {
    main: 'rgba(245, 124, 0, 1)',
  },
  info: {
    main: 'rgba(25, 118, 210, 1)',
  },
  success: {
    main: 'rgba(56, 142, 60, 1)',
  },

  background: {
    default: 'rgba(48, 48, 48, 1)',
  },

  text: {
    primary: 'rgba(0, 0, 0, 0.87)',
    secondary: 'rgba(0, 0, 0, 0.54)',
    disabled: 'rgba(0, 0, 0, 0.38)',
  },
};

export default darkPalette;
