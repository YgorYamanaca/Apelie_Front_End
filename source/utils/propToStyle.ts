/* eslint-disable no-unused-vars */
import IBreakpoints from '@/types/interfaces/interface-breakpoints';
import { CSSProperties } from 'react';
import { CSSProp } from 'styled-components';
import breakpointsMedia from './breakpointsMedia';

export type IPropToStyle = {
  [cssKey in keyof CSSProperties]?: CSSProperties[cssKey] |
  {[key in keyof IBreakpoints]?: CSSProperties[cssKey]};
}

export function propToStyle(propName: keyof IPropToStyle) {
  return (props: IPropToStyle): CSSProp | {[key in keyof CSSProperties]?: CSSProperties[key]} => {
    const propValue: string | number | undefined |
    {[key in keyof IBreakpoints]?: CSSProperties[keyof CSSProperties]} = props[propName];
    if (typeof propValue === 'object') {
      return breakpointsMedia({
        xs: {
          [propName]: propValue.xs,
        },
        sm: {
          [propName]: propValue.sm,
        },
        md: {
          [propName]: propValue.md,
        },
        lg: {
          [propName]: propValue.lg,
        },
        xl: {
          [propName]: propValue.xl,
        },
      });
    }

    return {
      [propName]: props[propName],
    };
  };
}
