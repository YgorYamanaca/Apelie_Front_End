import IColors from '@/types/interfaces/interface-colors';

const lightPalette: IColors = {
  primary: {
    main: 'rgba(0, 133, 229, 1)',
    alpha: 'rgba(0, 133, 229, 0.5)',
    alternative: 'rgba(51, 157, 234, 1)',
  },
  secondary: {
    main: 'rgba(253, 190, 1, 1)',
    alpha: 'rgba(253, 190, 1, 0.5)',
    alternative: 'rgba(253, 203, 51, 1)',
  },
  error: {
    main: 'rgba(244, 67, 54, 1)',
    alternative: 'rgba(229, 115, 115, 1)',
  },
  warning: {
    main: 'rgba(255, 152, 0, 1)',
    alternative: 'rgba(255, 183, 77, 1)',
  },
  info: {
    main: 'rgba(33, 150, 243, 1)',
    alternative: 'rgba(100, 181, 246, 1)',
  },
  success: {
    main: 'rgba(76, 175, 80, 1)',
    alternative: 'rgba(129, 199, 132, 1)',
  },
  background: {
    default: 'rgba(250, 250, 250, 1)',
    paper: 'rgba(255, 255, 255, 1)',
  },
  divider: 'rgba(0, 0, 0, 0.12)',
  text: {
    primary: 'rgba(34, 34, 34, 0.87)',
    secondary: 'rgba(34, 34, 34, 0.54)',
    disabled: 'rgba(34, 34, 34, 0.38)',
    contrastText: '#fff',
  },
};
export default lightPalette;
