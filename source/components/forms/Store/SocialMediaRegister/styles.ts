import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
  ${breakpointsMedia({
    md: css`
      width: 450px;
      `,
  })}
`;

const SocialMediaRegisterStyle = {
  Container,
};

export default SocialMediaRegisterStyle;
