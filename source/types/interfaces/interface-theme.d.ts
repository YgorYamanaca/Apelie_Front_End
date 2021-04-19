import 'styled-components';
import IColors from './interface-colors';

declare module 'styled-components' {
  export interface DefaultTheme {
    readonly colors: IColors,
  }
}
