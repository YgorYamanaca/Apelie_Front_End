import React from 'react';
import SEO from '@/components/commons/SEO';
import IApeliePageTemplate from '@/types/interfaces/interface-apelie-page-template';

const ApeliePageTemplate: React.FC<IApeliePageTemplate> = ({
  children,
  SEOProps,
}) => (
  <>
    <SEO {...SEOProps} />
    {children}
  </>
);

export default ApeliePageTemplate;
