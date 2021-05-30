import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

interface IApelieHeader {
  headerState: boolean,
  menuLength?: number,
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
      display: grid;
      height: auto;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      grid-template-columns: repeat(4, auto);
      column-gap: 15px;
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
      & > button#header-change-theme-button, button#header-config-button {
        display: none;
      }
    `,
  })}
`;

const UserContainer = styled.div<IApelieHeader>`
  display: ${({ headerState }) => (headerState ? 'flex' : 'none')};
  align-items: center;
  margin-top: auto;
  column-gap: 25px;
  padding: 15px 20px;
  border-top: 2px solid ${({ theme }) => theme.colors.divider};
  & > button {
    width: fit-content;
  }
  & > :last-child {
    display: flex;
    margin-left: auto;
  }
  ${breakpointsMedia({
    sm: css`
      display: flex;
      border: 0;
      & > #header-user-name {
        display: none;
      }
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
};

export default ApelieHeaderStyle;
