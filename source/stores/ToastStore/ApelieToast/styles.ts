import get from 'lodash/get';
import styled, { css } from 'styled-components';
import Animations from '@/utils/animations';
import breakpointsMedia from '@/utils/breakpointsMedia';

const ToastQueueContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 5px;
  position: absolute;
  z-index: 10000000000;
  ${breakpointsMedia({
    sm: css`
      top: 25px;
      right: 25px;
      width: auto;
      padding: 0px;
    `,
  })}

  & > div:not(:first-child) {
    margin-top: 5px;
  }
`;

interface IContainer {
  type: 'error' | 'success' | 'warning' | 'info';
}

const Container = styled.div<IContainer>`
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
`;

const TextBox = styled.div`
  display: flex;
  align-items: center;
  word-break: break-word;
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
  ToastQueueContainer,
  Container,
  ToastIcon,
  CloseIconBox,
  TextBox,
};

export default StyleApelieToast;
