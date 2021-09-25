import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  position: absolute;
  align-items: center;
  flex-direction: column;
  z-index: 500;
  gap: 10px;
  padding: 10px 15px;
  bottom: 0;
  border: 1px solid ${({ theme }) => theme.colors.divider};
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  background-color: ${({ theme }) => theme.colors.background.default};
  margin: 0 25px 50px 25px;
  & > :last-child {
    width: 150px;
  }
  ${breakpointsMedia({
    md: css`
      width: 95%;
      flex-direction: row;
      justify-content: space-between;
      & > :last-child {
        width: 150px;
      }
    `,
  })}
`;

const ApelieCookiesNotificationStyle = {
  Container,
};

export default ApelieCookiesNotificationStyle;
