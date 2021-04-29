import Animations from '@/utils/animations';
import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const ImageBox = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1.35;
  background-color: ${({ theme }) => theme.colors.background.default};
  padding: 5px;
  ${breakpointsMedia({
    md: css`
      flex: 1.4;
      padding: 20px;
    `,
  })}
`;

const ImageBoxHeader = styled.div`
  display: grid;
  width: fit-content;
  align-self: flex-end;
  grid-template-columns: repeat(3, auto);
  justify-content: center;
  column-gap: 35px;
  margin-right: 25px;
  & > button {
    width: fit-content;
  }
`;

const ImageBoxContent = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  overflow-x: hidden;
  grid-template-areas:
  "AAAA BBBB"
  "CCCC CCCC";

  ${breakpointsMedia({
    md: css`
      flex: 1;
      grid-template-columns: 1fr 1.5fr 1fr;
      grid-template-areas:
      "AAAA BBBB CCCC";
    `,
  })}

  & > img {
    position: relative;
    padding: 5px;
    max-width: 150px;
    max-height: 150px;
    user-select: none;
    ${breakpointsMedia({
    md: css`
        max-width: 350px;
        max-height: 350px;
        align-self: flex-end;
      `,
  })}
  }
  & > img:first-child{
    animation: ${Animations.leftToRight} 1s ease-in-out;
  }
  & > img:last-child {
    justify-self: flex-end;
    animation: ${Animations.rightToLeft} 1s ease-in-out;
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
  animation: ${Animations.fadein} 1s ease-in;
  ${breakpointsMedia({
    md: css`
      order: 0;
      grid-column: span 1;
      padding: 0 65px;
    `,
  })}
`;

const StoresBox = styled.div`
  display: flex;
  flex: 1;
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
