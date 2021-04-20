import IColor from './interface-color';
import ITextColor from './interface-text-color';

interface IColors {
  primary: IColor,
  secondary: IColor,
  error: string,
  warning: string,
  info: string,
  success: string,
  background: string,
  divider: string,
  text: ITextColor,
}

export default IColors;
