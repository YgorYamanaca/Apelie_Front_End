import styled, { css } from 'styled-components';
import ApelieTextBase from '../ApelieTextBase';

const Container = styled.div`
  position: relative;
  margin-bottom: 20px;
  width: 100%;

  & > textarea {
    resize: none;
    height: 200px;
  }
`;

const Input = styled(ApelieTextBase)`
  width: 100%;
  color: ${({ theme }) => theme.colors.text.primary};
  padding: 5px 10px;
  outline: 0;
  border-radius: ${({ theme }) => theme.borderRadius};
  background-color: ${({ theme }) => theme.colors.background.default};
  transition: border 0.5s ease-in-out;
  ${({ theme, isError }) => (isError
    ? css`
          border: 1.5px solid ${theme.colors.error.alternative};
        `
    : css`
          border: 1.5px solid ${theme.colors.divider};
          :focus {
            border: 1.5px solid ${theme.colors.primary.alternative};
          }
        `)}

  &::-webkit-calendar-picker-indicator {
    background-image: ${({ theme }) => `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" fill="${theme.colors.text.primary}" width="24" height="24" viewBox="0 0 24 24"><path d="M17 1c0-.552-.447-1-1-1s-1 .448-1 1v2c0 .552.447 1 1 1s1-.448 1-1v-2zm-12 2c0 .552-.447 1-1 1s-1-.448-1-1v-2c0-.552.447-1 1-1s1 .448 1 1v2zm13 5v10h-16v-10h16zm2-6h-2v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-8v1c0 1.103-.897 2-2 2s-2-.897-2-2v-1h-2v18h20v-18zm-11.646 14c-1.318 0-2.192-.761-2.168-2.205h1.245c.022.64.28 1.107.907 1.107.415 0 .832-.247.832-.799 0-.7-.485-.751-1.3-.751v-.977c.573.05 1.196-.032 1.196-.608 0-.455-.369-.663-.711-.663-.575 0-.793.422-.782 1.003h-1.256c.052-1.401.902-2.107 2.029-2.107.968 0 1.969.613 1.969 1.64 0 .532-.234.945-.638 1.147.528.203.847.681.847 1.293-.001 1.201-.993 1.92-2.17 1.92zm5.46 0h-1.306v-3.748h-1.413v-1.027c.897.024 1.525-.233 1.657-1.113h1.062v5.888zm10.186-11v19h-22v-2h20v-17h2z"/></svg>')`};
  }
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
