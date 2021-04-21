import styled from 'styled-components';
import TextBase from '../TextBase';

const Container = styled.div`
  margin-bottom: 15px;
`;

const Input = styled(TextBase)`
  width: 100%; 
  color: ${({ theme }) => theme.colors.text.primary};
  border: 2px solid ${({ theme }) => theme.colors.divider};
  padding: 5px 10px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: transparent;
  transition: border 0.5s ease-in-out;
  :focus {
    border: 2px solid ${({ theme }) => theme.colors.primary.alternative};
  }
`;

Input.defaultProps = {
  tag: 'input',
  variant: 'paragraph2',
};

const InputFieldStyle = {
  Container,
  Input,
};

export default InputFieldStyle;
