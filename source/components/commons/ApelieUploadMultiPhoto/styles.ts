import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: 100%;
  position: relative;
  flex-direction: column;
  gap: 15px;
  ${breakpointsMedia({
    md: css`
      width: auto;
      gap: 35px;
    `,
  })}
`;

interface IUploadImageContainer {
  readonly isDragging: boolean;
  readonly hasErrors: boolean;
  readonly hasImage: boolean;
}

const UploadImageContainer = styled.div<IUploadImageContainer>`
  display: flex;
  height: 225px;
  width: 100%;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.background.default};
  border: 2px solid ${({ theme, isDragging }) => (isDragging ? theme.colors.success.main : theme.colors.divider)};
  border-color: ${({ theme, hasErrors }) => hasErrors && theme.colors.error.main};
  justify-content: center;
  align-items: center;
  padding: 10px;
  gap: 15px;
  cursor: pointer;
  & > span {
    text-align: center;
    color: ${({ theme, hasErrors }) => hasErrors && theme.colors.error.main};
  }
  & > img {
    max-width: 100%;
    height: 200px;
  }
  ${breakpointsMedia({
    md: css`
      min-width: 100%;
      padding: 15px 45px;
      height: 300px;
      & > img {
        max-width: 100%;
      }
    `,
  })}
`;

const ImagesBox = styled.div`
  display: flex;
  max-width: 100%;
  overflow-x: auto;
  gap: 15px;
`;

const ImageContainer = styled.div`
    display: flex;
    position: relative;
    & > #delete-image-button {
        position: absolute;
        top: 0;
        right: 0;
        z-index: 10;
    }
`;

const ApelieUploadMultiPhotoStyle = {
  Container,
  UploadImageContainer,
  ImagesBox,
  ImageContainer,
};

export default ApelieUploadMultiPhotoStyle;
