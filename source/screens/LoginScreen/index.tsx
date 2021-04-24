import React, {
  FormEvent, useState, useMemo,
} from 'react';
import InputField from '@/components/commons/InputField';
import Button from '@/components/commons/Button';
import { useMutation } from 'react-query';
import ILoginInfo from '@/types/interfaces/interface-login-data';
import { doLogin } from '@/services/fakeLoginService';
import handleChange from '@/utils/formUtils';
import TextWithDivider from '@/components/commons/TextWithDivider';
import TextBase from '@/components/commons/TextBase';
import { useRouter } from 'next/router';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import LoginBox from './styles';

interface ILoginWithError extends ILoginInfo {
  emailError: boolean,
  passwordError: boolean,
}

/**
 * @description Content of Login Screen
 */

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState<ILoginWithError>({
    email: '',
    emailError: false,
    password: '',
    passwordError: false,
  });
  const isDisabled = useMemo(() => loginInfo.email === '' || loginInfo.password === '', [loginInfo]);
  const doLoginRequest = useMutation(doLogin, {
    onSuccess: () => {
    },
    onError: () => {
      setLoginInfo({
        ...loginInfo,
        emailError: true,
      });
    },
  });

  function onSubmited(event: FormEvent<Element>) {
    event.preventDefault();
    doLoginRequest.mutate({ email: loginInfo.email, password: loginInfo.password });
  }

  return (
    <LoginBox.Container>
      {!doLoginRequest.isLoading
        ? (
          <form autoComplete="off" onSubmit={(event: FormEvent<Element>) => onSubmited(event)}>
            <InputField
              placeholder="Email"
              name="email"
              value={loginInfo.email}
              isError={loginInfo.emailError}
              onChange={(event) => handleChange(event, setLoginInfo)}
            />
            <InputField
              type="password"
              placeholder="Senha"
              name="password"
              value={loginInfo.password}
              isError={loginInfo.passwordError}
              onChange={(event) => handleChange(event, setLoginInfo)}
            />
            <Button type="submit" disabled={isDisabled} textColor="contrastText">
              Entrar
            </Button>
            <TextWithDivider text="OU" />
            <TextBase
              id="TextBaseFloat"
              variant="paragraph1"
            >
              Não tem uma conta e quer se cadastrar ?
            </TextBase>
            <Button ghost buttonColor="primary" onClick={() => router.push(ApeliePageAlias.Subscribe)}>
              Cadastre-se aqui!
            </Button>
          </form>
        ) : <div>loading</div>}
    </LoginBox.Container>
  );
};

export default LoginScreen;
