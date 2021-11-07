import React from 'react';
import themeData from '@/utils/data-test';
import ApelieTextBase from '../ApelieTextBase';
import ApelieThemeStyle from './styles';

interface IApelieThemeComponent {
  categoryTitle: string;
}

const ApelieTheme: React.FC<IApelieThemeComponent> = ({ categoryTitle }) => (
  <ApelieThemeStyle.Container urlOfBackground={themeData.find((theme) => theme.themeTitle === categoryTitle)?.themeImage}>
    <div>
      <ApelieThemeStyle.TextBox>
        <ApelieTextBase variant="subTitle">{categoryTitle}</ApelieTextBase>
      </ApelieThemeStyle.TextBox>
    </div>
  </ApelieThemeStyle.Container>
);

export default ApelieTheme;
