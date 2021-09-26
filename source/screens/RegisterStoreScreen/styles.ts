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
      width: 1250px;
      padding: 25px;
    `,
  })}
`;

const RegisterStoreContainerHeader = styled.div`
  display: flex;
  margin-bottom: 25px;
`;

const RegisterStoreContainerContent = styled.div`
`;

const RegisterStoreContainerFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 10px;
  align-self: center;
  gap: 10px;

  & > button#firstStep-next-button {
    width: 50%;
    margin-left: auto;
  }

  ${breakpointsMedia({
    md: css`
      align-self: flex-end;
      width: 50%;
    `,
  })}
`;

const RegisterStoreScreenStyle = {
  Container,
  RegisterStoreContainer,
  RegisterStoreContainerHeader,
  RegisterStoreContainerContent,
  RegisterStoreContainerFooter,
};

export default RegisterStoreScreenStyle;
