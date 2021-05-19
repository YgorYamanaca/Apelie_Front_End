import Animations from '@/utils/animations';
import get from 'lodash/get';
import styled from 'styled-components';

interface IContainer {
  type: 'error' | 'success' | 'warning' | 'info',
}

const Container = styled.div<IContainer>`
  position: absolute;
  height: 65px;
  width: 400px;
  top: 25px;
  right: 50px;
  background-color: ${({ theme, type }) => get(theme, `colors.${type}.main`)};
  animation: ${Animations.rightToLeft} 1s ease-in-out forwards;
  box-shadow: ${({ theme }) => theme.shadow.nivel1};
  border-radius: ${({ theme }) => theme.borderRadius};
`;

const StyleApelieToast = {
  Container,
};

export default StyleApelieToast;
