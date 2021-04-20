import React from 'react';
import LoginAndSubscribeTemplateStyles from './styles';

const LoginAndSubscribeTemplate: React.FC = ({ children }) => (
  <LoginAndSubscribeTemplateStyles.Container>
    <LoginAndSubscribeTemplateStyles.ImageContainer>
      <img src="/images/Login/Login-Animated-Image.svg" alt="teste" />
    </LoginAndSubscribeTemplateStyles.ImageContainer>
    <LoginAndSubscribeTemplateStyles.ChildrenContainer>
      {children}
    </LoginAndSubscribeTemplateStyles.ChildrenContainer>
  </LoginAndSubscribeTemplateStyles.Container>
);

export default LoginAndSubscribeTemplate;
