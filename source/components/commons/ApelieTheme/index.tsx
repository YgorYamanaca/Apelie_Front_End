import IApelieTheme from '@/types/interfaces/interface-apelie-theme';
import React from 'react';
import ApelieTextBase from '../ApelieTextBase';
import ApelieThemeStyle from './styles';

interface IApelieThemeComponent {
  theme: IApelieTheme
}

const ApelieTheme: React.FC<IApelieThemeComponent> = ({
  theme,
}) => (
  <ApelieThemeStyle.Container urlOfBackground={theme.themeImage}>
    <ApelieThemeStyle.TextBox>
      <ApelieTextBase variant="subTitle">
        {theme.themeTitle}
      </ApelieTextBase>
    </ApelieThemeStyle.TextBox>
  </ApelieThemeStyle.Container>
);

export default ApelieTheme;
