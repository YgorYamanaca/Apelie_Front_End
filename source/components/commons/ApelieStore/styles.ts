import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.default};
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  border-radius: ${({ theme }) => theme.borderRadius};
  width: 200px;
  height: 235px;
  padding: 15px 10px;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
  user-select: none;
  :hover {
    transform: scale(1.03);
    box-shadow: ${({ theme }) => theme.shadow.nivel3};
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

interface IPhotoContainer {
  imgUrl: string
}

const StorePhotoContainer = styled.div<IPhotoContainer>`
  position: relative;
  width: 125px;
  height: 125px;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.primary.alternative};

  ${breakpointsMedia({
    md: css`
        width: 145px;
        height: 145px;
      `,
  })}
`;

const UserPhotoContainer = styled.div`
  & > div {
    position: absolute;
    bottom: 0;
    right: 0;
  }
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  & > :first-child {
    margin-bottom: 10px;
  }
  ${breakpointsMedia({
    md: css`
      padding: 10px;
      display: flex;
      flex: 1;
    `,
  })}
`;

const TextContainer = styled.div`
  display: flex;
  flex: 1.1;
  flex-direction: column;
  & > :first-child {
    margin: 15px 0;
    text-align: center;
  }
  & > :last-child {
    display: none;
    text-align: center;
  }
  ${breakpointsMedia({
    md: css`
      padding: 15px 10px;
      display: flex;
      height: 100%;
      & > :last-child {
        display: flex;
      }
    `,
  })}
`;

const StoreStyles = {
  Container,
  StorePhotoContainer,
  UserPhotoContainer,
  PhotoContainer,
  TextContainer,
};

export default StoreStyles;
