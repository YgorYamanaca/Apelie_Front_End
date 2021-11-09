import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;

  & > div#adress-content {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    width: 100%;
  }

  & > div#cpf-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }
  ${breakpointsMedia({
    sm: css`
      & > div#adress-content {
        gap: 15px;
        & > div {
          width: 350px;
        }
      }
      & > div#cpf-content {
        & > div {
          width: 350px;
        }
      `,
    md: css`
        width: 750px;
          & > div#adress-content {
            display: flex;
            width: 100%;
          }
      `,
  })
}
`;

const AddressRegisterStyle = {
  Container,
};

export default AddressRegisterStyle;
