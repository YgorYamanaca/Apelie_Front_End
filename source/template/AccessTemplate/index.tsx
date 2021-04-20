import React from 'react';
import AccessTemplateStyles from './styles';

const AccessTemplate: React.FC = ({ children }) => (
  <AccessTemplateStyles.Container>
    <AccessTemplateStyles.ImageContainer>
      <img src="/images/Login/Login-Animated-Image.svg" alt="teste" />
    </AccessTemplateStyles.ImageContainer>
    <AccessTemplateStyles.ChildrenContainer>
      <AccessTemplateStyles.ChildrenBox>
        {children}
      </AccessTemplateStyles.ChildrenBox>
    </AccessTemplateStyles.ChildrenContainer>
  </AccessTemplateStyles.Container>
);

export default AccessTemplate;
