import Carousel from '@/components/commons/ApelieCarousel';
import React, { useState, useMemo } from 'react';
import { themeData } from '@/utils/data-test';
import IApelieTheme from '@/types/interfaces/interface-apelie-theme';
import ApelieTheme from '@/components/commons/ApelieTheme';
import MainPageScreenStyle from './styles';

const MainPageScreen: React.FC = () => {
  const [apelieThemes] = useState<IApelieTheme[]>(themeData);

  const themes = useMemo(() => apelieThemes.map((apelieTheme) => (
    <ApelieTheme theme={apelieTheme} />
  )), [apelieThemes]);

  return (
    <MainPageScreenStyle.Container>
      <MainPageScreenStyle.PageSection>
        <Carousel carouselTitle="Temas" elementsList={themes} />
      </MainPageScreenStyle.PageSection>
    </MainPageScreenStyle.Container>
  );
};

export default MainPageScreen;
