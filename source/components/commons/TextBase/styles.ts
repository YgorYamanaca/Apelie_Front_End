import ITypographyVariants from '@/types/interfaces/interface-typography-variants';
import styled, { css } from 'styled-components';
import TextStyleVariantsMap from '@/themes/typography/TextStyleVariantsMap';
import { get } from 'lodash';
import ITextColor from '@/types/interfaces/interface-text-color';

interface ITextBaseStyle {
  variant: keyof ITypographyVariants;
  color?: keyof ITextColor | 'none';
}

const Container = styled.span<ITextBaseStyle>`
  ${({ variant }) => TextStyleVariantsMap[variant]};
  ${({ theme, color }) => color !== 'none' && css`color: ${get(theme, `colors.text.${color}`)}`};
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
    opacity: 1; /* Firefox */
  }
`;

const TextBaseStyle = {
  Container,
};

export default TextBaseStyle;
