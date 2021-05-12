import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

interface IContainer {
  urlOfBackground: string,
}

const Container = styled.div<IContainer>`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.default};
  background-image: url(${({ urlOfBackground }) => urlOfBackground});
  background-position: center;
  background-size: cover;
  box-shadow: ${({ theme }) => theme.shadow.nivel3};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 200px;
  height: 235px;
  padding: 10px;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  transition: filter 0.2s ease-in-out;
  justify-content: center;
  :hover {
    filter: brightness(0.90);
  }

  ${breakpointsMedia({
    md: css`
      align-content: center;
      flex-direction: row;
      margin: 0 35px;
      width: 450px;
      height: 250px;
    `,
  })}
`;

const TextBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 15px;
`;

const ApelieThemeStyle = {
  Container,
  TextBox,
};

export default ApelieThemeStyle;
