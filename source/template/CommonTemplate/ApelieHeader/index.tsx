import CarryBagIcon from '@/assets/icons/CarryBagIcon';
import ChatIcon from '@/assets/icons/ChatIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import GearIcon from '@/assets/icons/GearIcon';
import LogoutIcon from '@/assets/icons/LogoutIcon';
import MenuButtonIcon from '@/assets/icons/MenuButtonIcon';
import MoonIcon from '@/assets/icons/MoonIcon';
import ShoppingCart from '@/assets/icons/ShoppingCart';
import SunIcon from '@/assets/icons/SunIcon';
import ApelieButton from '@/components/commons/ApelieButton';
import ApelieIconButton from '@/components/commons/ApelieIconButton';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import ApelieUserPhotoComponent from '@/components/commons/ApelieUserPhotoComponent';
import { AppThemeContext } from '@/stores/ThemeManager';
import { UserContext } from '@/stores/UserManager';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import { StyledProps, withTheme } from 'styled-components';
import ApelieHeaderStyle from './styles';

const ApelieHeader: React.FC<StyledProps<{}>> = ({
  theme,
}) => {
  const [isMenuClose, setIsMenuClose] = useState(false);
  const { actualTheme, toggleTheme } = useContext(AppThemeContext);
  const { loggedUser, doLogout } = useContext(UserContext);
  const router = useRouter();
  const [isUserPhotoMenuOpen, setIsUserPhotoMenuOpen] = useState(true);

  const HeaderContent = [
    <ApelieButton
      id="header-carry-bag-button"
      key="header-carry-bag-button"
      textVariant="paragraph1"
      icon={<CarryBagIcon />}
      ghost
    >
      Pedidos
    </ApelieButton>,
    <ApelieButton
      id="header-chat-button"
      key="header-chat-button"
      textVariant="paragraph1"
      icon={<ChatIcon />}
      ghost
    >
      Chat
    </ApelieButton>,
    <ApelieButton
      key="header-change-theme-button"
      id="header-change-theme-button"
      textVariant="paragraph1"
      icon={!(actualTheme === 'Dark') ? <MoonIcon /> : <SunIcon />}
      ghost
      onClick={() => toggleTheme()}
    >
      Trocar de tema
    </ApelieButton>,
    <ApelieButton
      key="header-config-button"
      id="header-config-button"
      textVariant="paragraph1"
      icon={<GearIcon />}
      ghost
    >
      Configurações
    </ApelieButton>,
    loggedUser && (
    <ApelieButton
      key="header-logout-button"
      id="header-logout-button"
      textVariant="paragraph1"
      icon={<LogoutIcon />}
      onClick={() => doLogout()}
      ghost
    >
      Sair
    </ApelieButton>
    ),
  ];

  return (
    <ApelieHeaderStyle.Container headerState={isMenuClose}>
      <ApelieHeaderStyle.HeaderContentBox>
        <ApelieHeaderStyle.LogoContainer>
          <img id="mobile-logo" src="https://placehold.co/150x45?text=Logo" alt="apelieLogo" />
          <img id="desktop-logo" src="https://placehold.co/200x55?text=Logo" alt="apelieLogo" />
        </ApelieHeaderStyle.LogoContainer>
        <ApelieHeaderStyle.HeaderIcon onClick={() => setIsMenuClose(!isMenuClose)}>
          {isMenuClose
            ? <CloseIcon id="close-icon" fill={theme.colors.text.primary} />
            : <MenuButtonIcon id="menu-icon" />}
        </ApelieHeaderStyle.HeaderIcon>
      </ApelieHeaderStyle.HeaderContentBox>
      <ApelieHeaderStyle.HeaderExpansiveBox
        headerState={isMenuClose}
      >
        {HeaderContent.map((headerContent) => headerContent)}
        <ApelieHeaderStyle.UserContainer headerState={isMenuClose}>
          <ApelieUserPhotoComponent
            userPhotoUrl={loggedUser?.photoUrl || '/images/User/default-user-image.png'}
            size={45}
            onMouseOnclickAction={() => setIsUserPhotoMenuOpen(!isUserPhotoMenuOpen)}
          >
            {isUserPhotoMenuOpen && (
              <ApelieHeaderStyle.ExpansiveMenu>
                {HeaderContent.slice(HeaderContent.length - 3, HeaderContent.length).map(
                  (headerContent) => headerContent,
                )}
              </ApelieHeaderStyle.ExpansiveMenu>
            )}
          </ApelieUserPhotoComponent>
          {loggedUser?.fullName && (
            <ApelieTextBase id="header-user-name" variant="paragraph1">
              {loggedUser?.fullName}
            </ApelieTextBase>
          )}
          {!loggedUser
            && (
              <ApelieButton id="verify-login-user-button" textVariant="subTitle" ghost onClick={() => router.push(ApeliePageAlias.Login)}>
                Entrar
              </ApelieButton>
            )}
          <ApelieIconButton color={theme.colors.text.primary}>
            <ShoppingCart id="header-shopping-card" width="30" height="30" />
          </ApelieIconButton>
        </ApelieHeaderStyle.UserContainer>
      </ApelieHeaderStyle.HeaderExpansiveBox>
    </ApelieHeaderStyle.Container>
  );
};

export default withTheme(ApelieHeader);
