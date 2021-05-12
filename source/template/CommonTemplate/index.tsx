import React from 'react';
import ApelieHeader from './ApelieHeader';
import StyleCommonTemplate from './styles';

const CommonTemplate: React.FC = ({
  children,
}) => (
  <StyleCommonTemplate.Container>
    <>
      <ApelieHeader />
    </>
    <StyleCommonTemplate.ChildrenContainer>
      {children}
    </StyleCommonTemplate.ChildrenContainer>
    <footer />
  </StyleCommonTemplate.Container>
);

export default CommonTemplate;
