import styled, { css } from 'styled-components';
import breakpointsMedia from '@/utils/breakpointsMedia';

const Container = styled.div`
  display: flex;
  gap: 25px;
  flex-direction: column;
  justify-content: flex-start;
  max-width: 100%;
  ${breakpointsMedia({
    md: css`
        flex-direction: row;
        align-items: flex-start;
        width: 750px;
      `,
  })}
`;

const ImageUploaderContainer = styled.div`

  ${breakpointsMedia({
    md: css`
         flex: 1;
      `,
  })}
`;

const ProductRegister = styled.div`
 
  ${breakpointsMedia({
    md: css`
         flex: 1;
      `,
  })}
`;

const ProductRegisterStyle = {
  Container,
  ImageUploaderContainer,
  ProductRegister,
};

export default ProductRegisterStyle;
