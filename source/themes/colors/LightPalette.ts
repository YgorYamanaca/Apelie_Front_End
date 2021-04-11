import IColors from '@/types/interfaces/interface-colors';

const lightPalette: IColors = {
  primary: {
    main: 'rgba(0, 133, 229, 1)',
    alpha: 'rgba(0, 133, 229, 0.5)',
    light: 'rgba(51, 157, 234, 1)',
    contrastText: '#000',
  },
  secondary: {
    main: 'rgba(253, 190, 1, 1)',
    alpha: 'rgba(253, 190, 1, 0.5)',
    light: 'rgba(253, 203, 51, 1)',
    contrastText: '#000',
  },
  error: {
    main: 'rgba(229, 115, 115, 1)',
  },
  warning: {
    main: 'rgba(255, 183, 77, 1)',
  },
  info: {
    main: 'rgba(100, 181, 246, 1)',
  },
  success: {
    main: 'rgba(129, 199, 132, 1)',
  },

  background: {
    default: 'rgba(250, 250, 250, 1)',
  },

  text: {
    primary: 'rgba(255, 255, 255, 1)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
  },
};
export default lightPalette;
