import CarryBagIcon from '@/assets/icons/CarryBagIcon';
import ChatIcon from '@/assets/icons/ChatIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import MenuButtonIcon from '@/assets/icons/MenuButtonIcon';
import MoonIcon from '@/assets/icons/MoonIcon';
import SearchIcon from '@/assets/icons/SearchIcon';
import SunIcon from '@/assets/icons/SunIcon';
import ApelieButton from '@/components/commons/ApelieButton';
import { AppThemeContext } from '@/stores/ThemeManager';
import React, { useContext, useState } from 'react';
import { StyledProps, withTheme } from 'styled-components';
import ApelieHeaderStyle from './styles';

const ApelieHeader: React.FC<StyledProps<{}>> = ({
  theme,
}) => {
  const [isMenuClose, setMenuState] = useState(false);
  const { actualTheme, toggleTheme } = useContext(AppThemeContext);
  const HeaderContent = [
    <ApelieButton
      textVariant="subTitle"
      icon={<CarryBagIcon />}
      ghost
    >
      Pedidos
    </ApelieButton>,
    <ApelieButton
      textVariant="subTitle"
      icon={<ChatIcon />}
      ghost
    >
      Chat
    </ApelieButton>,
    <ApelieButton
      textVariant="subTitle"
      icon={!(actualTheme === 'Dark') ? <MoonIcon /> : <SunIcon />}
      ghost
      onClick={() => toggleTheme()}
    >
      Trocar de tema
    </ApelieButton>,
  ];
  return (
    <ApelieHeaderStyle.Container headerState={isMenuClose}>
      <ApelieHeaderStyle.HeaderContentBox>
        <ApelieHeaderStyle.LogoContainer>
          <img id="mobile-logo" src="https://placehold.co/150x45?text=Logo" alt="apelieLogo" />
          <img id="desktop-logo" src="https://placehold.co/200x55?text=Logo" alt="apelieLogo" />
        </ApelieHeaderStyle.LogoContainer>
        <ApelieHeaderStyle.HeaderIcon onClick={() => setMenuState(!isMenuClose)}>
          {isMenuClose
            ? <CloseIcon id="close-icon" fill={theme.colors.text.primary} />
            : <MenuButtonIcon id="menu-icon" />}
        </ApelieHeaderStyle.HeaderIcon>
      </ApelieHeaderStyle.HeaderContentBox>
      <ApelieHeaderStyle.HeaderExpansiveBox
        headerState={isMenuClose}
        menuLength={HeaderContent.length}
      >
        {HeaderContent.map((headerContent) => headerContent)}
      </ApelieHeaderStyle.HeaderExpansiveBox>
    </ApelieHeaderStyle.Container>
  );
};

export default withTheme(ApelieHeader);
