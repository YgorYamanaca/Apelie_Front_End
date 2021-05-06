import breakpointsMedia from '@/utils/breakpointsMedia';
import styled, { css } from 'styled-components';

const Container = styled.div`
  display: flex;
  background-color: ${({ theme }) => theme.colors.background.default};
  box-shadow: ${({ theme }) => theme.shadow.nivel3};
  border-radius: ${({ theme }) => theme.borderRadius};
  margin: 0 15px;
  width: 200px;
  height: 235px;
  padding: 10px;
  flex-direction: column;
  cursor: pointer;
  align-items: center;
  transition: filter 0.2s ease-in-out;
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

const UserPhotoContainer = styled.div<IPhotoContainer>`
  position: absolute;
  width: 55px;
  height: 55px;
  background-image: url(${({ imgUrl }) => imgUrl});
  background-position: center;
  background-size: cover;
  border-radius: 50%;
  border: 3px solid ${({ theme }) => theme.colors.secondary.main};
  bottom: 0;
  right: 0;
`;

const PhotoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
    text-align: center;
  }
  & > :last-child {
    display: none;
    text-align: center;
  }
  ${breakpointsMedia({
    md: css`
      padding: 10px;
      display: flex;
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
