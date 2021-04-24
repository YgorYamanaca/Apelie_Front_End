import React from 'react';
import AccessTemplateStyles from './styles';

const AccessTemplate: React.FC = ({ children }) => (
  <AccessTemplateStyles.Container>
    <AccessTemplateStyles.ImageContainer>
      <img src="/images/Access/Access-Animated-Image.svg" alt="ApelieAccesseImg" />
    </AccessTemplateStyles.ImageContainer>
    <AccessTemplateStyles.ChildrenContainer>
      <AccessTemplateStyles.ChildrenBox>
        <div>
          <img src="https://placehold.co/200x55?text=Logo" alt="ApelieLogo" />
        </div>
        {children}
      </AccessTemplateStyles.ChildrenBox>
    </AccessTemplateStyles.ChildrenContainer>
  </AccessTemplateStyles.Container>
);

export default AccessTemplate;
