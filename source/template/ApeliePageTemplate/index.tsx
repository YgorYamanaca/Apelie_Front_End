import React from 'react';
import SEO from '@/components/commons/SEO';
import IApeliePageTemplate from '@/types/interfaces/interface-apelie-page-template';
import LoginAndSubscribeTemplate from 'template/LoginAndSubscribeTemplate';
import PageStyles from './styles';

const ApeliePageTemplate: React.FC<IApeliePageTemplate> = ({
  children,
  SEOProps,
  PAGEProps,
}) => (
  <PageStyles.Container id="ApeliePage">
    <SEO {...SEOProps} />
    {PAGEProps.template === 'DEFAULT' && (
    <LoginAndSubscribeTemplate>
      {children}
    </LoginAndSubscribeTemplate>
    )}

    {PAGEProps.template === 'COMMON' && (
    <>
      {children}
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
