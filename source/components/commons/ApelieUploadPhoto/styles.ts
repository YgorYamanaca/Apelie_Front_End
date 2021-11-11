import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  user-select: none;
  width: fit-content;
  position: relative;
  ${breakpointsMedia({
    md: css`
      width: auto;
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
  pointer-events: ${({ hasImage }) => hasImage && 'none'};
  & > span {
    text-align: center;
    color: ${({ theme, hasErrors }) => hasErrors && theme.colors.error.main};
  }
  & > img {
    max-width: 90%;
    height: 200px;
  }

  ${breakpointsMedia({
    md: css`
      padding: 15px 45px;
      height: 350px;
      max-width: 500px;
      & > img {
        max-width: 90%;
      }
    `,
  })}
`;

const FloatBox = styled.div`
  display: flex;
  position: absolute;
  margin: 15px;
  gap: 5px;
  bottom: 0;
  right: 0;
  z-index: 5000;
`;

const ApelieUploadPhotoStyle = {
  Container,
  UploadImageContainer,
  FloatBox,
};

export default ApelieUploadPhotoStyle;
