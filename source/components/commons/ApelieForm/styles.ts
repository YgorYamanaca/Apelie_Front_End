import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

interface IContainer {
  hasBackGround: boolean
}

const Container = styled.div<IContainer>`
  display: flex;
  flex-direction: column;
  width: 98%;
  height: 100%;
  border: ${({ theme, hasBackGround }) => hasBackGround && `1px solid ${theme.colors.divider}`};
  box-shadow: ${({ theme, hasBackGround }) => hasBackGround && theme.shadow.nivel3};
  background-color: ${({ theme, hasBackGround }) => hasBackGround && theme.colors.background.paper};
  z-index: 300;
  ${breakpointsMedia({
    md: css`
      width: fit-content;
      height: auto;
    `,
  })}
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow-y: auto;
  ${breakpointsMedia({
    md: css`
      padding: 0 50px;
      gap: 25px;
    `,
  })}
`;

const Footer = styled.footer`
  display: flex;
  width: 100%;
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

const ApelieFormStyle = {
  Container,
  Content,
  Footer,
};

export default ApelieFormStyle;
