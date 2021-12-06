import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
    display: flex;
    height: fit-content;
    position: relative;
    height: 100%;
    flex-direction: column;
    & > #apelie-product-edit {
        display: flex;
        position: absolute;
        top: 0;
        right: 0;
    }
    ${breakpointsMedia({
    md: css`
            width: 750px;
            height: fit-content;
            min-width: fit-content;
            min-height: 500px;
        `,
  })}
`;

const ProductInfoContainer = styled.div`
    display: flex;
    height: 100%;
    flex-direction: column;
    width: 100%;
    gap: 15px;
    ${breakpointsMedia({
    md: css`      
        flex-direction: row;
        gap: 25px;
    `,
  })}
`;

const ImagesContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 3px solid ${({ theme }) => theme.colors.background.paper};
    ${breakpointsMedia({
    md: css`
            margin: auto;
            flex-direction: row;
            gap: 25px;
        `,
  })}
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

const Image = styled.img`
    width: 175px;
    height: fit-content;
    border: 2px solid ${({ theme }) => theme.colors.divider};
    max-height: 100%;
    ${breakpointsMedia({
    md: css`
            width: 250px;
            height: fit-content;
        `,
  })}
`;

const InfoContainer = styled.div`
    flex:1;
    display: flex;
    flex-direction: column;
    height: 100%;
    gap: 5px;
    & > span > label {
        font-weight: bold;
    }

    & > span#product-quantity > span#indisponible {
        color: ${({ theme }) => theme.colors.error.main};
    }

    & > #product-description {
        display: flex;
        flex-direction: column;
        word-break: break-word;
        & > :last-child {
            text-indent: 10px;
        }
    }
`;

const Footer = styled.footer`
    display: flex;
    width: 100%;
    margin-top: auto;
    gap: 5px;
    ${breakpointsMedia({
    md: css`
            margin-top: auto;
            width: 50%;
            margin-left: auto;
        `,
  })}
`;

const ApelieDetailedProductStyles = {
  Container,
  ProductInfoContainer,
  ImagesContainer,
  InfoContainer,
  ImageContainer,
  Image,
  Footer,
};

export default ApelieDetailedProductStyles;
