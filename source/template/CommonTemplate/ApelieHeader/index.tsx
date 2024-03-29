import React, { useContext, useRef, useState } from 'react';
import { StyledProps, withTheme } from 'styled-components';
import Image from 'next/image';
import { useRouter } from 'next/router';
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
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import ApelieUserPhotoComponent from '@/components/commons/ApelieUserPhotoComponent';
import { AppThemeContext } from '@/stores/ThemeManager';
import { UserContext } from '@/stores/UserManager';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import ApelieHeaderStyle from './styles';
import StoreIcon from '@/assets/icons/StoreIcon';
import useOnClickOutside from '@/theme/useOutSideClick';

const ApelieHeader: React.FC<StyledProps<unknown>> = ({ theme }) => {
  const [isMenuClose, setIsMenuClose] = useState(false);
  const { actualTheme, toggleTheme } = useContext(AppThemeContext);
  const { loggedUser, doLogout } = useContext(UserContext);
  const [isUserPhotoMenuOpen, setIsUserPhotoMenuOpen] = useState(false);
  const expansiveRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const HeaderContent = [
    <ApelieButton
      id="header-carry-bag-button"
      key="header-carry-bag-button"
      textVariant="paragraph1"
      disabled
      icon={<CarryBagIcon height="16" width="16" />}
      ghost
    >
      Meus Pedidos
    </ApelieButton>,
    <ApelieButton
      id="header-chat-button"
      key="header-chat-button"
      textVariant="paragraph1"
      icon={<ChatIcon height="16" width="16" />}
      disabled
      ghost
    >
      Chat
    </ApelieButton>,
    <ApelieButton
      key="header-cart-button"
      id="header-cart-button"
      textVariant="paragraph1"
      icon={<ShoppingCart height="16" width="16" />}
      disabled
      ghost
    >
      Carrinho
    </ApelieButton>,
    <ApelieButton
      key="header-store-button"
      id="header-store-button"
      textVariant="paragraph1"
      icon={<StoreIcon height="16" width="16" />}
      ghost
      onClick={() => (loggedUser?.hasStore ? router.push(ApeliePageAlias.MyStore) : router.push(ApeliePageAlias.RegisterStorePage))}
    >
      {loggedUser?.hasStore ? 'Minha Loja' : 'Cadastrar Loja'}
    </ApelieButton>,
    loggedUser?.hasStore ? (
      <ApelieButton
        key="header-store-review-button"
        id="header-store-button"
        textVariant="paragraph1"
        icon={<CarryBagIcon height="16" width="16" />}
        ghost
        onClick={() => router.push(ApeliePageAlias.MyStoreOrders)}
      >
        Pedidos da loja
      </ApelieButton>
    ) : [],
    <ApelieButton
      key="header-change-theme-button"
      id="header-change-theme-button"
      textVariant="paragraph1"
      icon={!(actualTheme === 'Dark')
        ? <MoonIcon height="16" width="16" />
        : <SunIcon height="16" width="16" />}
      ghost
      onClick={() => toggleTheme()}
    >
      Trocar de tema
    </ApelieButton>,
    <ApelieButton
      key="header-config-button"
      id="header-config-button"
      textVariant="paragraph1"
      icon={<GearIcon height="16" width="16" />}
      ghost
    >
      Configurações
    </ApelieButton>,
    <ApelieButton
      key="header-logout-button"
      id="header-logout-button"
      textVariant="paragraph1"
      icon={<LogoutIcon height="16" width="16" />}
      onClick={() => doLogout()}
      ghost
    >
      Sair
    </ApelieButton>,
  ];

  useOnClickOutside(expansiveRef, () => setIsUserPhotoMenuOpen(false));

  return (
    <ApelieHeaderStyle.Container headerState={isMenuClose}>
      <ApelieHeaderStyle.HeaderContentBox>
        <ApelieHeaderStyle.LogoContainer
          onClick={() => router.push(ApeliePageAlias.MainPage)}
        >
          <div id="mobile-logo">
            <Image
              src="/images/Apelie/logo.png"
              alt="apelieMobileLogo"
              width={100}
              height={50}
            />
          </div>
          <div id="desktop-logo">
            <Image
              src="/images/Apelie/logo.png"
              alt="apelieDesktopLogo"
              width={125}
              height={65}
            />
          </div>
        </ApelieHeaderStyle.LogoContainer>
        <ApelieHeaderStyle.HeaderIcon
          onClick={() => setIsMenuClose(!isMenuClose)}
        >
          {isMenuClose ? (
            <CloseIcon id="close-icon" fill={theme.colors.text.primary} />
          ) : (
            <MenuButtonIcon id="menu-icon" />
          )}
        </ApelieHeaderStyle.HeaderIcon>
      </ApelieHeaderStyle.HeaderContentBox>
      <ApelieHeaderStyle.HeaderExpansiveBox headerState={isMenuClose}>
        {loggedUser
          && HeaderContent.map((headerContent) => headerContent)}
        <ApelieHeaderStyle.UserContainer headerState={isMenuClose}>
          {!loggedUser && (
            <ApelieHeaderStyle.LoginAndSubscribeTextBox>
              <ApelieTextBase variant="paragraph1">
                Faça&nbsp;
                <ApelieTextBase
                  tag="a"
                  href={ApeliePageAlias.Login}
                  variant="paragraph1"
                  text="Login"
                />
                  &nbsp;ou crie seu&nbsp;
                <ApelieTextBase
                  tag="a"
                  href={ApeliePageAlias.Subscribe}
                  variant="paragraph1"
                  text="Cadastro"
                />
              </ApelieTextBase>
            </ApelieHeaderStyle.LoginAndSubscribeTextBox>
          )}
          <div id="ref-div" ref={expansiveRef}>
            <ApelieUserPhotoComponent
              userPhotoUrl={
              loggedUser?.photoUrl || '/images/User/default-user-image.png'
            }
              size={45}
              onMouseOnclickAction={() => loggedUser && setIsUserPhotoMenuOpen(!isUserPhotoMenuOpen)}
            />
            {isUserPhotoMenuOpen && loggedUser && (
            <ApelieHeaderStyle.ExpansiveMenu>
              {HeaderContent.slice(
                HeaderContent.length - (HeaderContent.length - 3),
                HeaderContent.length,
              ).map((headerContent) => headerContent)}
            </ApelieHeaderStyle.ExpansiveMenu>
            )}
            {loggedUser?.fullName && (
            <ApelieTextBase id="header-user-name" variant="paragraph1">
              {loggedUser?.fullName}
            </ApelieTextBase>
            )}
          </div>
        </ApelieHeaderStyle.UserContainer>
      </ApelieHeaderStyle.HeaderExpansiveBox>
    </ApelieHeaderStyle.Container>
  );
};

export default withTheme(ApelieHeader);
