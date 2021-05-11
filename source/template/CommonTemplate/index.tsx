import React from 'react';
import StyleCommonTemplate from './styles';

interface ICommonTemplate {
  isSearchBarShowed?: boolean;
}

const CommonTemplate: React.FC<ICommonTemplate> = ({
  isSearchBarShowed = false,
  children,
}) => (
  <StyleCommonTemplate.Container>
    <div>
      header
      {isSearchBarShowed && 'serachBar'}
    </div>
    {children}
    <footer />
  </StyleCommonTemplate.Container>
);

export default CommonTemplate;
