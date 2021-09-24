import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  position: relative;
  background-color: ${({ theme }) => theme.colors.background.default};
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 200px;
  height: 250px;
  padding: 10px 5px;
  flex-direction: column;
  cursor: pointer;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  user-select: none;
  :hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.shadow.nivel3};
  }

  ${breakpointsMedia({
    md: css`
      align-content: center;
      margin: 0 35px;
      padding: 5px;
      width: 425px;
      height: 215px;
    `,
  })}
`;

interface IPhotoContainer {
  imgUrl: string;
}

const StorePhotoContainer = styled.div<IPhotoContainer>`
  position: relative;
  margin-top: 25%;
  width: 125px;
  height: 125px;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.background.paper};

  ${breakpointsMedia({
    md: css`
      border-radius: 0%;
      width: 100px;
      height: 100px;
      margin-top: 0;
      margin-left: 10px;
    `,
  })}
`;

const UserPhotoContainer = styled.div`
  & > div {
    position: absolute;
    bottom: -10px;
    right: -15px;
    ${breakpointsMedia({
    md: css`
        bottom: -10px;
        right: -20px;
      `,
  })}
  }
`;

const StoreOverflowContainer = styled.div`
  display: flex;
  position: absolute;
  justify-content: center;
  width: 100%;
  ${breakpointsMedia({
    md: css`
      height: 100%;
      width: auto;
      justify-content: flex-start;
      align-items: center;
      display: flex;
    `,
  })}
`;

const StoreAndScoreContainer = styled.div`
  display: flex;
  margin-top: 50px;
  flex-direction: column;

  & > div :last-child {
    margin-left: auto;
  }

  ${breakpointsMedia({
    md: css`
      flex-direction: row;
      padding: 5px 10px;
      display: flex;
      height: 100%;
      margin-left: 125px;
      margin-top: 0px;
    `,
  })}
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  & > :first-child {
    font-size: 20px;
    font-weight: bold;
  }
  & > span {
    text-align: center;
  }
  ${breakpointsMedia({
    md: css`
      & > :first-child {
        font-size: 16px;
        font-weight: bold;
      }
      & > span {
        display: flex;
      }
    `,
  })}
`;

const StoreStyles = {
  Container,
  StorePhotoContainer,
  UserPhotoContainer,
  StoreOverflowContainer,
  StoreAndScoreContainer,
  TextContainer,
};

export default StoreStyles;
