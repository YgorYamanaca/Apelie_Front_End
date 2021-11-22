import styled, { css } from 'styled-components';
import Animations from '@/utils/animations';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.35;
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: 5px;
  ${breakpointsMedia({
    md: css`
      flex: 1.25;
      padding: 20px;
    `,
  })}
`;

const ImageBoxHeader = styled.div`
  display: flex;
  width: fit-content;
  align-self: center;
  justify-content: center;
  column-gap: 35px;
  & > button {
    width: fit-content;
  }

  ${breakpointsMedia({
    sm: css`
      align-self: flex-end;
      margin-right: 25px;
    `,
  })}
`;

const ImageBoxContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-x: hidden;
  grid-template-areas:
    'AAAA BBBB'
    'CCCC CCCC';

  ${breakpointsMedia({
    md: css`
      flex: 1;
      grid-template-columns: 1fr 1.5fr 1fr;
      grid-template-areas: 'AAAA BBBB CCCC';
    `,
  })}

  & > img {
    position: relative;
    padding: 5px;
    max-width: 125px;
    max-height: 125px;
    user-select: none;
    ${breakpointsMedia({
    md: css`
        max-width: 350px;
        max-height: 350px;
        align-self: center;
      `,
  })}
  }
  & > img:first-child {
    animation: ${Animations.leftToRight} 0.3s ease-in-out;
  }
  & > img:last-child {
    justify-self: flex-end;
    animation: ${Animations.rightToLeft} 0.3s ease-in-out;
  }
`;

const ImageBoxCenterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 25px 15px 25px;
  flex: 1;
  order: 2;
  grid-column: span 2;
  text-align: center;
  animation: ${Animations.fadein} 0.3s ease-in;
  & > h1 {
    margin: 15px 0;
  }
  & > h2 {
    margin: 5px 0;
  }
  ${breakpointsMedia({
    md: css`
      order: 0;
      grid-column: span 1;
      padding: 0 65px;
      & > h1 {
        margin: 25px 0;
      }
      & > h2 {
        margin: 25px;
      }
    `,
  })}
`;

const StoresBox = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const HomeBox = {
  Container,
  ImageBox,
  ImageBoxHeader,
  ImageBoxContent,
  ImageBoxCenterContent,
  StoresBox,
};

export default HomeBox;
