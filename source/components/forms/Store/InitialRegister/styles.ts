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
    
    & > div > div#store-detail-content {
      display: flex;
      min-width: 90%;
      flex-direction: column;
      & > div > input {
        height: 38px;
      }

      & > div:last-child {
        margin: 0;
      }
    }

    ${breakpointsMedia({
    md: css`
        gap: 35px;
        flex-direction: row;
        justify-content: center;
        & > div > div#store-logo-image-content {
          display: flex;
          width: auto;
        }

        & > div > div#store-detail-content {
          display: flex;
          min-width: 300px;
          justify-content: flex-start;
          flex-direction: column;
        } 
      `,
  })}
  }
`;

const InitialRegisterStyle = {
  Container,
};

export default InitialRegisterStyle;
