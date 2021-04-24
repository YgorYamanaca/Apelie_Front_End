import styled from 'styled-components';
import TextBase from '../TextBase';

const Container = styled.div`
  margin-bottom: 20px;
`;

const Input = styled(TextBase)`
  width: 100%; 
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 5px 10px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: transparent;
  transition: border 0.5s ease-in-out;
  border: 1.5px solid ${({ theme, isError }) => (isError ? theme.colors.error.alternative : theme.colors.divider)};
  :focus {
    border: 1.5px solid ${({ theme }) => theme.colors.primary.alternative};
  }
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph1',
};

const InputFieldStyle = {
  Container,
  Input,
};

export default InputFieldStyle;
