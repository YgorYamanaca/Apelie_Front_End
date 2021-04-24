import React, { ChangeEvent } from 'react';
import ITypographyVariants from '@/types/interfaces/interface-typography-variants';
import ITextColor from '@/types/interfaces/interface-text-color';
import TextBaseStyle from './styles';

interface ITextBase {
  id?: string;
  variant?: keyof ITypographyVariants;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'li' | 'a' | 'span' | 'input';
  type?: string;
  color?: keyof ITextColor | 'none';
  placeholder?: string;
  isError?: boolean;
  name?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const TextBase: React.FC<ITextBase> = ({
  id,
  variant = 'paragraph1',
  color = 'primary',
  tag = 'span',
  children,
  ...props
}) => (
  <TextBaseStyle.Container
    id={id}
    as={tag}
    variant={variant}
    color={color}
    {...props}
  >
    {children}
  </TextBaseStyle.Container>
);

export default TextBase;
