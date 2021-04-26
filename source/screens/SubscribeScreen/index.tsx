import React, {
  FormEvent, useState, useMemo,
} from 'react';
import InputField from '@/components/commons/InputField';
import Button from '@/components/commons/Button';
import { useMutation } from 'react-query';
import { doRegister } from '@/services/fakeLoginService';
import handleChange from '@/utils/formUtils';
import TextBase from '@/components/commons/TextBase';
import ISubscribeInfo from '@/types/interfaces/interface-subscribe-data';
import { isSamePassword, isValidateEmail, isValidateName } from '@/utils/validations';
import SubscribeBox from './styles';

interface ISubscribeWithError extends ISubscribeInfo {
  nameError: string | boolean,
  emailError: string | boolean,
  passwordError: string | boolean,
  confirmPasswordError: string | boolean,
}

/**
 * @description Content of Subscribe Screen
 */
const SubscribeScreen: React.FC = () => {
  const [subscribeInfo, setSubInfo] = useState<ISubscribeWithError>({
    name: '',
    nameError: '',
    email: '',
    emailError: '',
    password: '',
    passwordError: '',
    confirmPassword: '',
    confirmPasswordError: '',
  });

  const isDisabled = useMemo(() => (
    subscribeInfo.name === ''
    || subscribeInfo.email === ''
    || subscribeInfo.password === ''
    || subscribeInfo.confirmPassword === ''
  ), [subscribeInfo]);

  const doSubscribeRequest = useMutation(doRegister, {
    onSuccess: () => {
    },
    onError: () => {
    },
  });

  function onSubmited(event: FormEvent<Element>) {
    event.preventDefault();
    if (isValidateEmail(subscribeInfo.email) && isValidateName(subscribeInfo.name)) {
      doSubscribeRequest.mutate({ email: subscribeInfo.email, password: subscribeInfo.password });
    } else {
      setSubInfo({
        ...subscribeInfo,
        nameError: !isValidateName(subscribeInfo.name) ? 'Seu nome contém números ou há espaço sobrando no começo ou no fim' : '',
        emailError: !isValidateEmail(subscribeInfo.email) ? 'Digite no formato certo de email' : '',
        passwordError: !isSamePassword(subscribeInfo.password, subscribeInfo.confirmPassword) ? 'As senhas não concicidem' : '',
        confirmPasswordError: !isSamePassword(subscribeInfo.password, subscribeInfo.confirmPassword) ? 'As senhas não concicidem' : '',
      });
    }
  }

  return (
    <SubscribeBox.Container>
      <TextBase
        tag="h2"
        variant="subTitle"
      >
        Venha fazer parte dessa comunidade!
      </TextBase>
      <form autoComplete="off" onSubmit={(event: FormEvent<Element>) => onSubmited(event)}>
        <InputField
          placeholder="Nome"
          name="name"
          value={subscribeInfo.name}
          isError={subscribeInfo.nameError}
          onChange={(event) => handleChange(event, setSubInfo)}
        />
        <InputField
          placeholder="Email"
          name="email"
          value={subscribeInfo.email}
          isError={subscribeInfo.emailError}
          onChange={(event) => handleChange(event, setSubInfo)}
        />
        <InputField
          type="password"
          placeholder="Senha"
          name="password"
          value={subscribeInfo.password}
          isError={subscribeInfo.passwordError}
          onChange={(event) => handleChange(event, setSubInfo)}
        />
        <InputField
          type="password"
          placeholder="Digite a senha novamente"
          name="confirmPassword"
          value={subscribeInfo.confirmPassword}
          isError={subscribeInfo.confirmPasswordError}
          onChange={(event) => handleChange(event, setSubInfo)}
        />
        <Button type="submit" disabled={isDisabled} textColor="contrastText">
          Cadastre-se
        </Button>
        <TextBase variant="smallException" tag="h4">
          Ao se cadastrar, você concorda com nossos Termos, Política de Dados e Política de Cookies.
        </TextBase>
      </form>
    </SubscribeBox.Container>
  );
};

export default SubscribeScreen;
