import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  & > div#content {
    display: flex;
    width: 100%;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    gap: 15px;

    ${breakpointsMedia({
    md: css`
        gap: 25px;
        flex-direction: row;
        justify-content: center;
      `,
  })}
  }
`;

const DesignRegisterStyle = {
  Container,
};

export default DesignRegisterStyle;
