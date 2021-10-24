import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.main`
  display: flex;
  position: relative;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 10px;
  & > div#image-container {
    display: none;
  }
  
  ${breakpointsMedia({
    md: css`
      padding: 35px 10px;
      & > div#image-container {
        display: flex;
        position: absolute;
        justify-content: space-between;
        width: 100%;
        bottom: 0;
      };
    `,
  })}
`;

const RegisterStoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: auto;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  box-shadow: ${({ theme }) => theme.shadow.nivel3};
  background-color: ${({ theme }) => theme.colors.background.paper};
  z-index: 300;
  ${breakpointsMedia({
    md: css`
      width: fit-content;
      padding: 20px 55px;
    `,
  })}
`;

const RegisterStoreContainerContent = styled.div`
  display: flex;
  align-content: center;
  justify-content: center;
`;

const RegisterStoreContainerFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 35px;
  align-self: center;
  gap: 10px;

  & > button#firstStep-next-button {
    width: 50%;
    margin-left: auto;
  }

  ${breakpointsMedia({
    md: css`
      margin-top: 25px;
      align-self: flex-end;
      width: 50%;
    `,
  })}
`;

const FirstStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > div#content {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 15px;
    
    & > div > div#store-detail-content {
      display: flex;
      min-width: 90%;
      flex-direction: column;
      & > div > input {
        height: 38px;
      }

      & > div:last-child {
        margin: 0;
      }
    }

    ${breakpointsMedia({
    md: css`
        gap: 35px;
        flex-direction: row;
        justify-content: center;
        & > div > div#store-logo-image-content {
          display: flex;
          width: auto;
        }

        & > div > div#store-detail-content {
          display: flex;
          min-width: 300px;
          justify-content: flex-start;
          flex-direction: column;
        } 
      `,
  })}
  }
`;

const DesignStepContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > div#content {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    ${breakpointsMedia({
    md: css`
        gap: 25px;
        flex-direction: row;
        justify-content: center;
      `,
  })}
  }
`;

const SocialMediaStepContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  ${breakpointsMedia({
    md: css`
      width: 450px;
      `,
  })}
`;

const AdressStepContent = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;

  & > div#adress-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  & > div#cpf-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  ${breakpointsMedia({
    sm: css`
    & > div#adress-content {
      gap: 15px;
      & > div {
        width: 350px;
      }
    }
    & > div#cpf-content {
      & > div {
        width: 350px;
      }
    `,
    md: css`
      width: 750px;
        & > div#adress-content {
          display: flex;
          width: 100%;
        }
    `,
  })}
`;

const RegisterStoreScreenStyle = {
  Container,
  RegisterStoreContainer,
  RegisterStoreContainerContent,
  RegisterStoreContainerFooter,
  FirstStepContainer,
  DesignStepContainer,
  SocialMediaStepContent,
  AdressStepContent,
};

export default RegisterStoreScreenStyle;
