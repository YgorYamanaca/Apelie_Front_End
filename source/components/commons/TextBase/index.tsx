import ITypographyVariants from '@/types/interfaces/interface-typography-variants';
import React, { ChangeEvent } from 'react';
import TextBaseStyle from './styles';

interface ITextBase {
  variant?: keyof ITypographyVariants
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'p' | 'li' | 'a' | 'span' | 'input',
  type?: string;
  placeholder?: string,
  name?: string,
  value?: string,
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void,
}

const TextBase: React.FC<ITextBase> = ({
  variant = 'paragraph1',
  tag = 'span',
  children,
  ...props
}) => (
  <TextBaseStyle.Container
    as={tag}
    variant={variant}
    {...props}
  >
    {children}
  </TextBaseStyle.Container>
);

export default TextBase;
