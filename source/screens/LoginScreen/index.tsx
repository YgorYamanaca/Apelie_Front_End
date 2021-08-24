import React, {
  FormEvent,
  useState,
  useMemo,
  ChangeEvent,
  useContext,
} from 'react';
import ApelieInputField from '@/components/commons/ApelieInputField';
import ApelieButton from '@/components/commons/ApelieButton';
import { useMutation } from 'react-query';
import ILoginInfo from '@/types/interfaces/interface-login-data';
import { doLogin } from '@/services/user';
import handleChange from '@/utils/formUtils';
import ApelieTextWithDivider from '@/components/commons/ApelieTextWithDivider';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import { useRouter } from 'next/router';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import { isValidateEmail } from '@/utils/validations';
import { ToastContext } from '@/stores/ToastStore';
import ApiRequester from '@/services/apiRequester';
import LoginBox from './styles';

interface ILoginWithError extends ILoginInfo {
  emailError: string;
  passwordError: string;
}

/**
 * @description Content of Login Screen
 */

const LoginScreen: React.FC = () => {
  const router = useRouter();
  const { setToastMessage } = useContext(ToastContext);
  const [loginInfo, setLoginInfo] = useState<ILoginWithError>({
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
  });
  const isDisabled = useMemo(
    () => loginInfo.email === '' || loginInfo.password === '',
    [loginInfo],
  );
  const doLoginRequest = useMutation(doLogin, {
    onSuccess: (response) => {
      if (response.status === 200) {
        setToastMessage({
          message: 'Login realizado com sucesso.',
          type: 'success',
        });
        localStorage.setItem('userAuth', response.headers.authorization);
        ApiRequester.apelie.defaults.headers.common.Authorization = response.headers.authorization;
        router.push(ApeliePageAlias.MainPage);
      } else {
        setToastMessage({
          message: 'Erro ao tentar realizar o login, confira os seus dados.',
          type: 'error',
        });
      }
    },
  });

  function onSubmited(event: FormEvent<Element>) {
    event.preventDefault();
    if (isValidateEmail(loginInfo.email)) {
      doLoginRequest.mutate({
        email: loginInfo.email,
        password: loginInfo.password,
      });
    } else {
      setLoginInfo({
        ...loginInfo,
        emailError: 'Digite no formato certo de email',
      });
    }
  }

  return (
    <LoginBox.Container>
      <form onSubmit={(event: FormEvent<Element>) => onSubmited(event)}>
        <ApelieInputField
          type="email"
          placeholder="Email"
          name="email"
          value={loginInfo.email}
          isError={loginInfo.emailError}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setLoginInfo)}
        />
        <ApelieInputField
          type="password"
          placeholder="Senha"
          name="password"
          value={loginInfo.password}
          isError={loginInfo.passwordError}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setLoginInfo)}
        />
        <ApelieButton
          type="submit"
          disabled={isDisabled}
          textColor="contrastText"
        >
          Entrar
        </ApelieButton>
        <ApelieTextWithDivider text="OU" />
        <ApelieTextBase variant="paragraph1">
          Não tem uma conta e quer se cadastrar ?
        </ApelieTextBase>
        <ApelieButton
          ghost
          buttonColor="primary"
          onClick={() => router.push(ApeliePageAlias.Subscribe)}
        >
          Cadastre-se aqui!
        </ApelieButton>
      </form>
    </LoginBox.Container>
  );
};

export default LoginScreen;
