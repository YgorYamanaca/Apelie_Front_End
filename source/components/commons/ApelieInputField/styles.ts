import styled, { css } from 'styled-components';
import ApelieTextBase from '../ApelieTextBase';

const Container = styled.div`
  position: relative;
  margin-bottom: 20px;
`;

const Input = styled(ApelieTextBase)`
  width: 100%; 
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 5px 10px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: transparent;
  transition: border 0.5s ease-in-out;
  ${({ theme, isError }) => (
    isError
      ? css`border: 1.5px solid ${theme.colors.error.alternative};`
      : css`
      border: 1.5px solid ${theme.colors.divider};
      :focus {
        border: 1.5px solid ${theme.colors.primary.alternative};
      }
    `
  )} 
`;

const ErrorBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  top: -5px;
  & > :first-child {
   color: ${({ theme }) => theme.colors.error.alternative};
  }
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

const InputFieldStyle = {
  Container,
  Input,
  ErrorBox,
};

export default InputFieldStyle;
