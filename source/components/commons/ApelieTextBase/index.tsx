import React, { ChangeEvent, InputHTMLAttributes } from 'react';
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
  className?: string;
  min?: InputHTMLAttributes<HTMLInputElement>['min'],
  max?: InputHTMLAttributes<HTMLInputElement>['max'],
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
}

const ApelieTextBase: React.FC<ITextBase> = ({
  id,
  variant = 'paragraph1',
  color = 'primary',
  tag = 'span',
  children,
  className,
  ...props
}) => (
  <TextBaseStyle.Container
    className={className}
    id={id}
    as={tag}
    variant={variant}
    color={color}
    {...props}
  >
    {children}
  </TextBaseStyle.Container>
);

export default ApelieTextBase;
