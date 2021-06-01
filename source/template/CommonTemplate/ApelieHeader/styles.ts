import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

interface IApelieHeader {
  headerState: boolean,
}

const Container = styled.header<IApelieHeader>`
  display: flex;
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
  & > img#mobile-logo {
    display: flex;
  }
  & > img#desktop-logo {
    display: none;
  }

  ${breakpointsMedia({
    sm: css`
      & > img#mobile-logo {
        display: none;
      }
      & > img#desktop-logo {
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
  position: absolute;
  background-color: ${({ theme }) => theme.colors.background.paper};
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  z-index: 500;
  flex-direction: column;
  width: 100%;
  height: 0;
  justify-content: flex-start;
  top: 60px;
  & > button {
    width: fit-content;
    align-items: center;
    color: ${({ theme }) => theme.colors.text.primary};
    margin-bottom: 15px;
    & > svg {
      fill: ${({ theme }) => theme.colors.text.primary};
      width: 18px;
      height: 18px;
      margin-right: 10px;
    }
  }
  ${({ headerState }) => css`
    padding: ${headerState && '25px 15px 5px 15px'};
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
          width: 20px;
          height: 20px;
          margin-right: 8px;
        }
      }
      & > button#header-change-theme-button, button#header-config-button,  button#header-logout-button{
        display: none;
      }
    `,
  })}
`;

const UserContainer = styled.div<IApelieHeader>`
  display: ${({ headerState }) => (headerState ? 'flex' : 'none')};
  align-items: center;
  padding: 15px 20px;
  margin-top: auto;
  column-gap: 25px;
  border-top: 2px solid ${({ theme }) => theme.colors.divider};
  & > button {
    width: fit-content;
  }
  & > :last-child {
    display: flex;
    margin-left: auto;
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
      & > #header-user-name, #verify-login-user-button {
        display: none;
      }
    `,
  })}
`;

const ExpansiveMenu = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  background-color: ${({ theme }) => theme.colors.background.default};
  flex-direction: column;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  padding: 5px;
  top: 45px;
  right: 0;
  width: 175px;
  align-items: flex-start;
  & > button#header-change-theme-button, button#header-config-button,  button#header-logout-button{
    display: flex;
    color: ${({ theme }) => theme.colors.text.primary};
  }
  & > button {
    width: fit-content;
    margin: 10px 5px;
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
`;

const ApelieHeaderStyle = {
  Container,
  HeaderIcon,
  LogoContainer,
  HeaderContentBox,
  HeaderExpansiveBox,
  UserContainer,
  ExpansiveMenu,
};

export default ApelieHeaderStyle;
