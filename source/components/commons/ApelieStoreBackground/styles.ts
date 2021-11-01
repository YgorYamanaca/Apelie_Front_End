import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

interface IApelieStoreBackGroundStylesContainer {
  bannerUrl: string;
}

const Container = styled.div<IApelieStoreBackGroundStylesContainer>`
  display: flex;
  position: relative;
  border-radius: 5px;
  width: 100%;
  height: 25%;
  background-image: url(${({ bannerUrl }) => bannerUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  & > #store-edit-icon {
    position: absolute;
    top: 10px;
    z-index: 500;
    right: 10px;
    background-color: ${({ theme }) => theme.colors.background.default};
  }

  ${breakpointsMedia({
    md: css`
       height: 200px;
    `,
  })}
`;

interface ISocialMediaContainer {
  isLogoPositionBottom: boolean
}

const SocialMediaContainer = styled.div<ISocialMediaContainer>`
  display: flex;
  align-items: center;
  position: absolute;
  gap: 10px;

  & > div {
    background-color: ${({ theme }) => theme.colors.background.default};
    padding: 7.5px;
  }

  ${
  ({ isLogoPositionBottom }) => (isLogoPositionBottom
    ? css`
      right: 15px;
      bottom: 10px;
      gap: 20px;
    `
    : css`
      right: 10px;
      top: 5px;
    `)
}
`;

const ApelieStoreBackGroundStyles = {
  Container,
  SocialMediaContainer,
};

export default ApelieStoreBackGroundStyles;
