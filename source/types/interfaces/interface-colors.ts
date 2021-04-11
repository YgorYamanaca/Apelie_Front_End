import IBackGroundColor from './interface-background-color';
import IColor from './interface-color';
import INotificationColor from './interface-notification-color';
import ITextColor from './interface-text-color';

interface IColors {
  primary: IColor,
  secondary: IColor,
  error: INotificationColor,
  warning: INotificationColor,
  info: INotificationColor,
  success: INotificationColor,
  background: IBackGroundColor,
  text: ITextColor,
}

export default IColors;
