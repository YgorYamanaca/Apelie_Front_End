import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

interface IApelieHeader {
  headerState: boolean;
}

const Container = styled.header<IApelieHeader>`
  display: flex;
  position: absolute;
  z-index: 1000;
  flex-direction: column;
  width: 100%;
  padding: 10px 20px;
  align-items: center;
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  background-color: ${({ theme }) => theme.colors.background.paper};
  transition: height 0.3s ease-in-out;
  ${breakpointsMedia({
    sm: css`
      flex-direction: row;
      align-items: center;
      height: 95px;
      padding: 10px 35px;
      border: none;
      background-color: ${({ theme }) => theme.colors.background.default};
    `,
  })}
`;

const LogoContainer = styled.div`
  display: flex;
  & > div#mobile-logo {
    display: flex;
  }
  & > div#desktop-logo {
    display: none;
  }

  ${breakpointsMedia({
    sm: css`
      & > div#mobile-logo {
        display: none;
      }
      & > div#desktop-logo {
        display: flex;
      }
    `,
  })}
`;

const HeaderIcon = styled.div`
  display: flex;
  margin-left: auto;
  cursor: pointer;
  user-select: none;
  ${breakpointsMedia({
    sm: css`
      display: none;
    `,
  })}
`;

const HeaderContentBox = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;

const HeaderExpansiveBox = styled.div<IApelieHeader>`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.paper};
  flex-direction: column;
  width: 100%;
  height: 0;
  justify-content: flex-start;
  & > button {
    width: fit-content;
    align-items: center;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 15px;
    & > svg {
      fill: ${({ theme }) => theme.colors.text.primary};
      margin-right: 10px;
    }
  }
  ${({ headerState }) => css`
    padding: ${headerState && '25px 0px 5px 0px'};
    height: ${headerState && 'auto'};
    order: ${headerState && 2};
    & > * {
      display: ${!headerState && 'none'};
    }
  `};
  & > button:hover {
    transition: color 0.3s ease-in-out;
    color: ${({ theme }) => theme.colors.primary.main};
    & > svg {
      fill: ${({ theme }) => theme.colors.primary.main};
      transition: fill 0.3s ease-in-out;
    }
  }
  ${breakpointsMedia({
    sm: css`
      padding: 0;
      display: flex;
      height: auto;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      justify-content: flex-end;
      position: static;
      order: 1;
      flex-direction: row;
      box-shadow: none;
      & > button {
        margin-bottom: 0px;
        height: fit-content;
      }
      & > * {
        display: flex;
      }
      & > button {
        width: fit-content;
        align-items: center;
        color: ${({ theme }) => theme.colors.text.primary};
        & > svg {
          fill: ${({ theme }) => theme.colors.text.primary};
          margin-right: 8px;
        }
      }
      & > button#header-change-theme-button,
      button#header-config-button,
      button#header-logout-button,
      button#header-store-button {
        display: none;
      }
    `,
  })}
`;

const UserContainer = styled.div<IApelieHeader>`
  display: ${({ headerState }) => (headerState ? 'flex' : 'none')};
  align-items: center;
  padding: 15px 5px;
  margin-top: auto;
  column-gap: 25px;
  border-top: 2px solid ${({ theme }) => theme.colors.divider};
  & > button {
    width: fit-content;
  }
  & > :last-child {
    display: flex;
  }
  & > :first-child {
    display: flex;
    position: relative;
  }
  ${breakpointsMedia({
    sm: css`
      display: flex;
      border: 0;
      column-gap: 25px;
      & > #header-user-name,
      #verify-login-user-button {
        display: none;
      }
    `,
  })}
`;

const ExpansiveMenu = styled.div`
  display: none;
  position: absolute;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.default};
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  padding: 10px 5px;
  top: 70px;
  right: 45px;
  z-index: 500;
  width: 175px;
  align-items: flex-start;
  & > button#header-change-theme-button,
  button#header-config-button,
  button#header-logout-button,
  button#header-store-button {
    display: flex;
    color: ${({ theme }) => theme.colors.text.primary};
    align-items: center;
  }
  & > button {
    width: fit-content;
  }
  & > button > svg {
    margin-right: 10px;
    fill: ${({ theme }) => theme.colors.text.primary};
  }
  & > button:hover {
    & > span {
      color: ${({ theme }) => theme.colors.primary.main};
      transition: color 0.3s ease-in-out;
    }
    & > svg {
      fill: ${({ theme }) => theme.colors.primary.main};
      transition: fill 0.3s ease-in-out;
    }
  }

  ${breakpointsMedia({
    sm: css`
      display: flex;
    `,
  })}
`;

const LoginAndSubscribeTextBox = styled.span`
  display: flex;
  width: 130px;
  & > span > a {
    color: ${({ theme }) => theme.colors.primary.main};
  }
  order: 1;

  ${breakpointsMedia({
    sm: css`
      order: 0;
    `,
  })}
`;

const ApelieHeaderStyle = {
  Container,
  HeaderIcon,
  LogoContainer,
  HeaderContentBox,
  HeaderExpansiveBox,
  UserContainer,
  ExpansiveMenu,
  LoginAndSubscribeTextBox,
};

export default ApelieHeaderStyle;
