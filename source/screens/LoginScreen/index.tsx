import React, {
  FormEvent, useState, useMemo,
} from 'react';
import ApelieInputField from '@/components/commons/ApelieInputField';
import ApelieButton from '@/components/commons/ApelieButton';
import { useMutation } from 'react-query';
import ILoginInfo from '@/types/interfaces/interface-login-data';
import { doLogin } from '@/services/fakeLoginService';
import handleChange from '@/utils/formUtils';
import ApelieTextWithDivider from '@/components/commons/ApelieTextWithDivider';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import { useRouter } from 'next/router';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import { isValidateEmail } from '@/utils/validations';
import LoginBox from './styles';

interface ILoginWithError extends ILoginInfo {
  emailError: string,
  passwordError: string,
}

/**
 * @description Content of Login Screen
 */

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const [loginInfo, setLoginInfo] = useState<ILoginWithError>({
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  });
  const isDisabled = useMemo(() => loginInfo.email === '' || loginInfo.password === '', [loginInfo]);
  const doLoginRequest = useMutation(doLogin, {
    onSuccess: () => {
      router.push(ApeliePageAlias.MainPage);
    },
    onError: () => {
      router.push(ApeliePageAlias.MainPage);
    },
  });

  function onSubmited(event: FormEvent<Element>) {
    event.preventDefault();
    if (isValidateEmail(loginInfo.email)) {
      doLoginRequest.mutate({ email: loginInfo.email, password: loginInfo.password });
    } else {
      setLoginInfo({
        ...loginInfo,
        emailError: 'Digite no formato certo de email',
      });
    }
  }

  return (
    <LoginBox.Container>
      {!doLoginRequest.isLoading
        ? (
          <form autoComplete="off" onSubmit={(event: FormEvent<Element>) => onSubmited(event)}>
            <ApelieInputField
              type="email"
              placeholder="Email"
              name="email"
              value={loginInfo.email}
              isError={loginInfo.emailError}
              onChange={(event) => handleChange(event, setLoginInfo)}
            />
            <ApelieInputField
              type="password"
              placeholder="Senha"
              name="password"
              value={loginInfo.password}
              isError={loginInfo.passwordError}
              onChange={(event) => handleChange(event, setLoginInfo)}
            />
            <ApelieButton type="submit" disabled={isDisabled} textColor="contrastText">
              Entrar
            </ApelieButton>
            <ApelieTextWithDivider text="OU" />
            <ApelieTextBase
              variant="paragraph1"
            >
              Não tem uma conta e quer se cadastrar ?
            </ApelieTextBase>
            <ApelieButton ghost buttonColor="primary" onClick={() => router.push(ApeliePageAlias.Subscribe)}>
              Cadastre-se aqui!
            </ApelieButton>
          </form>
        ) : <div>loading</div>}
    </LoginBox.Container>
  );
};

export default LoginScreen;
