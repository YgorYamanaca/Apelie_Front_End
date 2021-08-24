import { css, CSSProp } from 'styled-components';
import IBreakpoints from '@/types/interfaces/interface-breakpoints';
import breakpoints from '@/themes/breakpoints';

/**
 * @description Function to convert an object for each size according to your css
 * @param cssByBreakpoint - CSS object by break point
 */

// eslint-disable-next-line no-unused-vars
function breakpointsMedia(
  cssByBreakpoint: { [key in keyof IBreakpoints]?: CSSProp },
): CSSProp {
  const breakpointNames: (keyof IBreakpoints)[] = Object.keys(
    breakpoints,
  ) as Array<keyof IBreakpoints>;
  return breakpointNames
    .filter((breakpointName): boolean => Boolean(cssByBreakpoint[breakpointName])).map(
      (breakpointName): CSSProp => css`
        @media only screen and (min-width: ${breakpoints[breakpointName]}px) {
          ${cssByBreakpoint[breakpointName]}
        }
      `,
    );
}

export default breakpointsMedia;
