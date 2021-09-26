import React from 'react';
import ITypographyVariants from '@/types/interfaces/interface-typography-variants';
import ApelieTextBase from '../ApelieTextBase';
import ApeliePageTitleStyle from './styles';

interface IPageTitle {
  text?: string;
  textVariant?: keyof ITypographyVariants;
}

const ApeliePageTitle: React.FC<IPageTitle> = ({ text, textVariant = 'title', children }) => (
  <ApeliePageTitleStyle.Container>
    <ApelieTextBase variant={textVariant}>{text || children}</ApelieTextBase>
    <hr />
  </ApeliePageTitleStyle.Container>
);

export default ApeliePageTitle;
