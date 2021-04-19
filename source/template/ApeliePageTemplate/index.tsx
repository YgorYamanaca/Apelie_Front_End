import React from 'react';
import SEO from '@/components/commons/SEO';
import IApeliePageTemplate from '@/types/interfaces/interface-apelie-page-template';
import Page from './styles';

const ApeliePageTemplate: React.FC<IApeliePageTemplate> = ({
  children,
  SEOProps,
}) => (
  <Page.Container id="ApeliePage">
    <SEO {...SEOProps} />
    {children}
  </Page.Container>
);

export default ApeliePageTemplate;
