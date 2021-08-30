import styled, { css } from 'styled-components';
import { get } from 'lodash';
import ITypographyVariants from '@/types/interfaces/interface-typography-variants';
import TextStyleVariantsMap from '@/themes/typography/TextStyleVariantsMap';
import ITextColor from '@/types/interfaces/interface-text-color';
import typography from '@/themes/typography';

interface ITextBaseStyle {
  variant: keyof ITypographyVariants;
  color?: keyof ITextColor | 'none';
}

const Container = styled.span<ITextBaseStyle>`
  margin: 0;
  ${({ variant }) => TextStyleVariantsMap[variant]};
  ${({ theme, color }) => color !== 'none'
    && css`
      color: ${get(theme, `colors.text.${color}`)};
    `};
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
    ${({ variant }) => css`
      font-size: calc(${typography[variant].fontSize} - 2px);
    `}
    opacity: 1; /* Firefox */
  }
`;

const TextBaseStyle = {
  Container,
};

export default TextBaseStyle;
