import 'styled-components';
import IColors from './interface-colors';
import IShadow from './interface-shadow';
import ITypographyVariants from './interface-typography-variants';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: IColors;
    readonly shadow: IShadow;
    readonly borderRadius: string;
    readonly typography: ITypographyVariants;
  }
}
