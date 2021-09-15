import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

interface IApelieStoreBackGroundStylesContainer {
  bannerUrl: string;
}

const Container = styled.div<IApelieStoreBackGroundStylesContainer>`
  display: flex;
  position: relative;
  width: 100%;
  height: 50%;
  background-image: url(${({ bannerUrl }) => bannerUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  ${breakpointsMedia({
    md: css`
       height: 200px;
    `,
  })}
`;

const SocialMediaContainer = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  right: 10px;
  top: 5px;
  gap: 10px;
`;

const ApelieStoreBackGroundStyles = {
  Container,
  SocialMediaContainer,
};

export default ApelieStoreBackGroundStyles;
