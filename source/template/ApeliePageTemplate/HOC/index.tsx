import React from 'react';
import IApeliePageTemplate from '@/types/interfaces/interface-apelie-page-template';
import ApeliePageTemplate from '../index';
import ApelieGlobalProvider from '../provider/index';

interface IApeliePageHOC {
  apelieTemplateProps: IApeliePageTemplate;
}

const apeliePageHOC = (
  (PageComponent: any, { apelieTemplateProps }: IApeliePageHOC) => (props: any) => (
    <ApeliePageTemplate {...apelieTemplateProps}>
      <PageComponent {...props} />
    </ApeliePageTemplate>
  )
);

export default apeliePageHOC;
