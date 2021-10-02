import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding: 25px 10px;
  ${breakpointsMedia({
    md: css`
      padding: 35px 10px;
    `,
  })}
`;

const RegisterStoreContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: auto;
  margin: 25px;
  padding: 15px;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  box-shadow: ${({ theme }) => theme.shadow.nivel3};
  ${breakpointsMedia({
    md: css`
      width: fit-content;
      padding: 35px 55px;
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
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  
  & > div#store-detail-content {
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
      & > div#store-logo-image-content {
        display: flex;
        width: auto;
      }

      & > div#store-detail-content {
        display: flex;
        min-width: 300px;
        justify-content: flex-start;
        flex-direction: column;
      } 
    `,
  })}
`;

const DesignStepContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  gap: 15px;
  
  & > div#store-banner-image-content {
    
  }

  & > div#store-color-select-content {
    
  }

  ${breakpointsMedia({
    md: css`
      gap: 25px;
      flex-direction: row;
      justify-content: center;
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
};

export default RegisterStoreScreenStyle;
