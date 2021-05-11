import React from 'react';
import SEO from '@/components/commons/SEO';
import IApeliePageTemplate from '@/types/interfaces/interface-apelie-page-template';
import AccessTemplate from 'template/AccessTemplate';
import CommonTemplate from 'template/CommonTemplate';
import PageStyles from './styles';

const ApeliePageTemplate: React.FC<IApeliePageTemplate> = ({
  children,
  SEOProps,
  PAGEProps,
}) => (
  <PageStyles.Container id="ApeliePage">
    <SEO {...SEOProps} />
    {PAGEProps.template === 'DEFAULT' && (
      <AccessTemplate>
        {children}
      </AccessTemplate>
    )}

    {PAGEProps.template === 'COMMON' && (
      <>
        <CommonTemplate>
          {children}
        </CommonTemplate>
      </>
    )}

    {PAGEProps.template === 'CUSTOM' && (
      <>
          {children}
      </>
    )}
  </PageStyles.Container>
);

export default ApeliePageTemplate;
