import ITypographyVariants from '@/types/interfaces/interface-typography-variants';
import styled from 'styled-components';
import TextStyleVariantsMap from '@/themes/typography/TextStyleVariantsMap';

interface ITextBaseStyle {
  variant: keyof ITypographyVariants
}

const Container = styled.span<ITextBaseStyle>`
  ${({ variant }) => TextStyleVariantsMap[variant]};
  &::placeholder {
    color: ${({ theme }) => theme.colors.text.disabled};
    opacity: 1; /* Firefox */
  }
`;

const TextBaseStyle = {
  Container,
};

export default TextBaseStyle;
