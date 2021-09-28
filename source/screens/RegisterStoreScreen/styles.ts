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
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  ${breakpointsMedia({
    md: css`
      width: 75%;
      padding: 25px;
    `,
  })}
`;

const RegisterStoreContainerHeader = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const RegisterStoreContainerContent = styled.div`
  display: flex;
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
        gap: 15px;
      } 
    `,
  })}
`;

const RegisterStoreScreenStyle = {
  Container,
  RegisterStoreContainer,
  RegisterStoreContainerHeader,
  RegisterStoreContainerContent,
  RegisterStoreContainerFooter,
  FirstStepContainer,
};

export default RegisterStoreScreenStyle;
