import IColors from '@/types/interfaces/interface-colors';

const darkPalette: IColors = {
  primary: {
    main: 'rgba(0, 133, 229, 1)',
    alpha: 'rgba(0, 133, 229, 0.5)',
    alternative: 'rgba(0, 93, 160, 1)',
  },
  secondary: {
    main: 'rgba(253, 190, 1, 1)',
    alpha: 'rgba(253, 190, 1, 0.5)',
    alternative: 'rgba(177, 133, 0, 1)',
  },
  error: {
    main: 'rgba(244, 67, 54, 1)',
    alternative: 'rgba(211, 47, 47, 1)',
  },
  warning: {
    main: 'rgba(255, 152, 0, 1)',
    alternative: 'rgba(177, 133, 0, 1)',
  },
  info: {
    main: 'rgba(33, 150, 243, 1)',
    alternative: 'rgba(25, 118, 210, 1)',
  },
  success: {
    main: 'rgba(76, 175, 80, 1)',
    alternative: 'rgba(56, 142, 60, 1)',
  },
  background: {
    default: 'rgba(48, 48, 48, 1)',
    paper: 'rgba(33, 33, 33, 1)',
  },
  divider: 'rgba(255, 255, 255, 0.12)',
  text: {
    primary: 'rgba(255, 255, 255, 0.87)',
    secondary: 'rgba(255, 255, 255, 0.7)',
    disabled: 'rgba(255, 255, 255, 0.5)',
    contrastText: 'rgba(255, 255, 255, 1)',
  },
};

export default darkPalette;
