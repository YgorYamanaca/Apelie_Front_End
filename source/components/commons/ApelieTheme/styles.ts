import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

interface IContainer {
  urlOfBackground: string,
}

const Container = styled.div<IContainer>`
  display: flex;
  position: relative;
  box-shadow: ${({ theme }) => theme.shadow.nivel3};
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background.default};
  width: 180px;
  height: 175px;
  padding: 10px;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  transition: filter 0.2s ease-in-out;
  justify-content: center;
  padding: 10px;
  :hover {
    filter: brightness(0.85);
  }

  ${breakpointsMedia({
    md: css`
      align-content: center;
      flex-direction: row;
      margin: 0 35px;
      width: 375px;
      height: 225px;
    `,
  })}

  & > div {
    display: flex;
    height: 100%;
    width: 100%;
    background-image: url(${({ urlOfBackground }) => urlOfBackground});
    background-position: center;
    background-size: cover;
  }
`;

const TextBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 7.5px;
  right: 10px;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.primary.alternative};
  padding: 2px 5px;
  border: 1px solid ${({ theme }) => theme.colors.secondary.main};
`;

const ApelieThemeStyle = {
  Container,
  TextBox,
};

export default ApelieThemeStyle;
