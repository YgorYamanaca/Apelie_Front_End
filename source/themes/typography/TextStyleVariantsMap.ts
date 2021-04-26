import ITypographyVariants from '@/types/interfaces/interface-typography-variants';
import breakpointsMedia from '@/utils/breakpointsMedia';
import { css, CSSProp } from 'styled-components';

type ITextStyleVariantsMap = {
  // eslint-disable-next-line no-unused-vars
  [key in keyof ITypographyVariants]?: CSSProp
}

const TextStyleVariantsMap: ITextStyleVariantsMap = {
  title: css`
    ${({ theme }) => css`
      font-size: ${theme.typography.titleXS.fontSize};
      font-weight: ${theme.typography.titleXS.fontWeight};
      line-height: ${theme.typography.titleXS.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.title.fontSize};
          font-weight: ${theme.typography.title.fontWeight};
          line-height: ${theme.typography.title.lineHeight};
        `}
      `,
  })}
  `,

  subTitle: css`
    ${({ theme }) => css`
      font-size: ${theme.typography.subTitleXs.fontSize};
      font-weight: ${theme.typography.subTitleXs.fontWeight};
      line-height: ${theme.typography.subTitleXs.lineHeight};
    `}
    ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.subTitle.fontSize};
          font-weight: ${theme.typography.subTitle.fontWeight};
          line-height: ${theme.typography.subTitle.lineHeight};
        `}
      `,
  })}
  `,

  paragraph1: css`
      ${({ theme }) => css`
        font-size: ${theme.typography.paragraph1Xs.fontSize};
        font-weight: ${theme.typography.paragraph1Xs.fontWeight};
        line-height: ${theme.typography.paragraph1Xs.lineHeight};
      `}
      ${breakpointsMedia({
    md: css`
        ${({ theme }) => css`
          font-size: ${theme.typography.paragraph1.fontSize};
          font-weight: ${theme.typography.paragraph1.fontWeight};
          line-height: ${theme.typography.paragraph1.lineHeight};
        `}
      `,
  })}
  `,
  paragraph2: css`
  ${({ theme }) => css`
    font-size: ${theme.typography.paragraph2Xs.fontSize};
    font-weight: ${theme.typography.paragraph2Xs.fontWeight};
    line-height: ${theme.typography.paragraph2Xs.lineHeight};
  `}
  ${breakpointsMedia({
    md: css`
      ${({ theme }) => css`
        font-size: ${theme.typography.paragraph2.fontSize};
        font-weight: ${theme.typography.paragraph2.fontWeight};
        line-height: ${theme.typography.paragraph2.lineHeight};
      `}
    `,
  })}
`,
  smallException: css`
    ${({ theme }) => css`
      font-size: ${theme.typography.smallException.fontSize};
      font-weight: ${theme.typography.smallException.fontWeight};
      line-height: ${theme.typography.smallException.lineHeight};
    `}
  `,
};

export default TextStyleVariantsMap;
