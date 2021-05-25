import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import { AppThemeContext } from '@/stores/ThemeManager';
import AccessTemplateStyles from './styles';

const AccessTemplate: React.FC = ({ children }) => {
  const router = useRouter();
  const { toggleTheme } = useContext(AppThemeContext);

  return (
    <AccessTemplateStyles.Container>
      <AccessTemplateStyles.ImageContainer>
        <AccessTemplateStyles.Image
          src="/images/Access/Access-Animated-Image.svg"
          alt="ApelieAccesseImg"
          onClick={() => toggleTheme()}
        />
      </AccessTemplateStyles.ImageContainer>
      <AccessTemplateStyles.ChildrenContainer>
        <AccessTemplateStyles.ChildrenBox>
          <div>
            <AccessTemplateStyles.Logo
              src="https://placehold.co/200x55?text=Logo"
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
