import React, {
  FormEvent,
  useState,
  useMemo,
  ChangeEvent,
  useContext,
} from 'react';
import { useMutation } from 'react-query';
import { useRouter } from 'next/router';
import ApelieInputField from '@/components/commons/ApelieInputField';
import ApelieButton from '@/components/commons/ApelieButton';
import { doRegister } from '@/services/user';
import handleChange from '@/utils/formUtils';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import {
  isSamePassword,
  isValidateEmail,
  isValidateName,
} from '@/utils/validations';
import { ToastContext } from '@/stores/ToastStore';
import ISubscribeRequest from '@/types/interfaces/interface-subscribe-request';
import ApeliePageAlias from '@/types/enums/enum-apelie-pages';
import SubscribeBox from './styles';

interface ISubscribeWithError extends ISubscribeRequest {
  fullNameError: string | boolean;
  emailError: string | boolean;
  passwordError: string | boolean;
  confirmPassword: string;
  confirmPasswordError: string | boolean;
}

/**
 * @description Content of Subscribe Screen
 */
const SubscribeScreen: React.FC = () => {
  const router = useRouter();
  const { setToastMessage } = useContext(ToastContext);
  const [subscribeInfo, setSubInfo] = useState<ISubscribeWithError>({
    fullName: '',
    fullNameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    confirmPassword: '',
    confirmPasswordError: '',
  });

  const isDisabled = useMemo(
    () => subscribeInfo.fullName === ''
      || subscribeInfo.email === ''
      || subscribeInfo.password === ''
      || subscribeInfo.confirmPassword === '',
    [subscribeInfo],
  );

  const doSubscribeRequest = useMutation(doRegister, {
    onSuccess: (response) => {
      if (response.status === 201) {
        setToastMessage({
          message: 'Cadastro realizado com sucesso.',
          type: 'success',
        });
        router.push(ApeliePageAlias.Login);
      } else if (response.status === 409) {
        setToastMessage({
          message: 'Esse e-mail já está cadastrado.',
          type: 'error',
        });
      } else if (response.status === 400) {
        setToastMessage({
          message: 'Não foi possível realizar o cadastro',
          type: 'error',
        });
      }
    },
  });

  function onSubmited(event: FormEvent<Element>) {
    event.preventDefault();
    if (
      isValidateEmail(subscribeInfo.email)
      && isValidateName(subscribeInfo.fullName)
      && isSamePassword(subscribeInfo.password, subscribeInfo.confirmPassword)
    ) {
      doSubscribeRequest.mutate({
        fullName: subscribeInfo.fullName,
        email: subscribeInfo.email,
        password: subscribeInfo.password,
      });
    } else {
      setSubInfo({
        ...subscribeInfo,
        fullNameError: !isValidateName(subscribeInfo.fullName)
          ? 'Seu nome contém números ou há espaço sobrando no começo ou no fim'
          : '',
        emailError: !isValidateEmail(subscribeInfo.email)
          ? 'Digite no formato certo de email'
          : '',
        confirmPasswordError: !isSamePassword(
          subscribeInfo.password,
          subscribeInfo.confirmPassword,
        )
          ? 'As senhas não concicidem'
          : '',
      });
    }
  }

  return (
    <SubscribeBox.Container>
      <ApelieTextBase tag="h1" variant="subTitle">
        Venha fazer parte dessa comunidade!
      </ApelieTextBase>
      <form onSubmit={(event: FormEvent<Element>) => onSubmited(event)}>
        <ApelieInputField
          placeholder="Nome Completo"
          name="fullName"
          value={subscribeInfo.fullName}
          isError={subscribeInfo.fullNameError}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setSubInfo)}
        />
        <ApelieInputField
          placeholder="Email"
          name="email"
          value={subscribeInfo.email}
          isError={subscribeInfo.emailError}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setSubInfo)}
        />
        <ApelieInputField
          type="password"
          placeholder="Senha"
          name="password"
          value={subscribeInfo.password}
          isError={subscribeInfo.passwordError}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setSubInfo)}
        />
        <ApelieInputField
          type="password"
          placeholder="Digite a senha novamente"
          name="confirmPassword"
          value={subscribeInfo.confirmPassword}
          isError={subscribeInfo.confirmPasswordError}
          onChange={(event: ChangeEvent<HTMLInputElement>) => handleChange(event, setSubInfo)}
        />
        <ApelieButton
          type="submit"
          disabled={isDisabled}
          isLoading={doSubscribeRequest.isLoading}
        >
          Cadastre-se
        </ApelieButton>
        <ApelieTextBase variant="smallException" tag="p">
          Ao se cadastrar, você concorda com nossos Termos, Política de Dados e
          Política de Cookies.
        </ApelieTextBase>
      </form>
    </SubscribeBox.Container>
  );
};

export default SubscribeScreen;
