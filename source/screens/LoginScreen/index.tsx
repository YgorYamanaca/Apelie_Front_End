import React, { ChangeEvent, FormEvent, useState } from 'react';
import InputField from '@/components/commons/InputField';
import Button from '@/components/commons/Button';
import LoginBox from './styles';

/**
 * @description Content of Login Screen
 */

const LoginScreen: React.FC = () => {
  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: '',
  });

  /**
   * @description handle every change and set state of respective input
   * @param {ChangeEvent<HTMLInputElement>} event - on change event
   */
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const fieldName = event.target.getAttribute('name')?.toString();
    setLoginInfo({
      ...loginInfo,
      [fieldName || 'inputKey']: event.target.value,
    });
  }

  function onSubmited(event: FormEvent<Element>) {
    event.preventDefault();
    console.log(loginInfo);
  }

  return (
    <LoginBox.Container>
      <form onSubmit={(event: FormEvent<Element>) => onSubmited(event)}>
        <InputField
          type="email"
          placeholder="Email"
          name="email"
          value={loginInfo.email}
          onChange={(event) => handleChange(event)}
        />
        <InputField
          type="password"
          placeholder="Senha"
          name="password"
          value={loginInfo.password}
          onChange={(event) => handleChange(event)}
        />
        <Button type="submit">
          Entrar
        </Button>
      </form>
    </LoginBox.Container>
  );
};

export default LoginScreen;
