import styled from 'styled-components';
import Animations from '@/utils/animations';

interface IContainer {
  size: string;
}

const Container = styled.div<IContainer>`
  & > div#apelie-loader {
    border-radius: 50%;
    width: ${({ size }) => size};
    height: ${({ size }) => size};
    animation: ${Animations.spin} 2s linear infinite;
    border: 3px solid ${({ theme }) => theme.colors.text.primary};
    border-top: 3px solid ${({ theme }) => theme.colors.divider};
  }
`;

const ApelieLoadingSpinnerStyle = {
  Container,
};

export default ApelieLoadingSpinnerStyle;
