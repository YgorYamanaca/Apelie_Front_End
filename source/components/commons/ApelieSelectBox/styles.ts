import styled from 'styled-components';

interface IContainer {
  boxWidth: string;
}

const Container = styled.div<IContainer>`
  width: ${({ boxWidth }) => boxWidth};
  margin-bottom: 15px;
`;

const ApelieSelectBoxStyle = {
  Container,
};

export default ApelieSelectBoxStyle;
