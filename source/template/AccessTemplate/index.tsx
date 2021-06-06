import React from 'react';
import { useRouter } from 'next/router';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import AccessTemplateStyles from './styles';

const AccessTemplate: React.FC = ({ children }) => {
  const router = useRouter();

  return (
    <AccessTemplateStyles.Container>
      <AccessTemplateStyles.ImageContainer>
        <AccessTemplateStyles.Image
          src="/images/Access/Access-Animated-Image.svg"
          alt="ApelieAccesseImg"
        />
      </AccessTemplateStyles.ImageContainer>
      <AccessTemplateStyles.ChildrenContainer>
        <AccessTemplateStyles.ChildrenBox>
          <div>
            <AccessTemplateStyles.Logo
              src="/images/Apelie/logo.png"
              alt="ApelieLogo"
              onClick={() => router.push(ApeliePageAlias.Home)}
            />
          </div>
          {children}
        </AccessTemplateStyles.ChildrenBox>
      </AccessTemplateStyles.ChildrenContainer>
    </AccessTemplateStyles.Container>
  );
};

export default AccessTemplate;
