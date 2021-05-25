import Animations from '@/utils/animations';
import breakpointsMedia from '@/utils/breakpointsMedia';
import get from 'lodash/get';
import styled, { css } from 'styled-components';

interface IContainer {
  type: 'error' | 'success' | 'warning' | 'info',
}

const Container = styled.div<IContainer>`
  position: absolute;
  display: flex;
  height: auto;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme, type }) => get(theme, `colors.${type}.main`)};
  animation: ${Animations.rightToLeft} 1s ease-in-out forwards;
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  border-radius: ${({ theme }) => theme.borderRadius};
  padding: 20px 15px;
  cursor: default;
  z-index: 500;
  ${breakpointsMedia({
    sm: css`
        top: 25px;
        right: 25px;
        width: auto;
      `,
  })
}
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  word-break: break-all;
  & > :last-child {
    margin: 0 15px;
    text-align: center;
    color: ${({ theme }) => theme.colors.text.contrastText};
  }
`;

const ToastIcon = styled.div`
  display: flex;
  & > svg {
    height: 18px;
    width: 18px;
  }
`;

const CloseIconBox = styled.div`
  display: flex;
  cursor: pointer;
  & > svg {
    height: 15px;
    width: 15px;
  }
`;

const StyleApelieToast = {
  Container,
  ToastIcon,
  CloseIconBox,
  TextBox,
};

export default StyleApelieToast;
