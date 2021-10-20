import React, {
  ChangeEvent, ReactElement, useCallback, useContext, useEffect, useState, VoidFunctionComponent,
} from 'react';
import { StyledProps, withTheme } from 'styled-components';
import { useMutation, useQuery } from 'react-query';
import _ from 'lodash';
import ApeliePageTitle from '@/components/commons/ApeliePageTitle';
import RegisterStoreScreenStyle from './styles';
import ApelieButton from '@/components/commons/ApelieButton';
import ApelieUploadPhoto from '@/components/commons/ApelieUploadPhoto';
import { IStoreRequest } from '@/types/interfaces/interface-store';
import ApelieInputField from '@/components/commons/ApelieInputField';
import handleChange from '@/utils/formUtils';
import ApelieSelectBox, { IOptions } from '@/components/commons/ApelieSelectBox';
import FacebookIcon from '@/assets/icons/FacebookIcon';
import ApelieIconWithInput from '@/components/commons/ApelieIconWithInput';
import InstagramIcon from '@/assets/icons/InstagramIcon';
import TwitterIcon from '@/assets/icons/TwitterIcon';
import YoutubeIcon from '@/assets/icons/YoutubeIcon';
import { getStoreCategorys, postStore } from '@/services/store';
import { getCity, getStates } from '@/services/locality';
import { IState, ICity } from '@/types/interfaces/interface-apelie-locality-request';
import colorPallets from '@/utils/colorsPallet';
import { adressNumberMask, cepNumberMask, phoneMask } from '@/utils/mask';
import { ToastContext } from '@/stores/ToastStore';
import { isValidateCepFormat, isValidateTelFormat } from '@/utils/validations';

interface IRegister {
  content: ReactElement;
  backButtonAction?: VoidFunction;
  nextButtonAction: VoidFunction;
  disabledCondition: boolean;
}

interface IRegisterStoreSteps {
  firstStep: IRegister;
  designStep: IRegister;
  socialMediaStep: IRegister;
  addressStep: IRegister;
}

const INITIAL_REQUEST: IStoreRequest = {
  twitterAccount: '',
  categories: [],
  instagramAccount: '',
  state: '',
  facebookAccount: '',
  youtubeAccount: '',
  bannerImage: '',
  logoImage: '',
  primaryColor: '',
  secondaryColor: '',
  street: '',
  city: '',
  zipCode: '',
  name: '',
  email: '',
  phone: '',
  addressNumber: '',
  neighbourhood: '',
  description: '',
};

interface IStoreRequestWithErrors extends IStoreRequest {
  cepError?: string,
  addressNumberError?: string,
  phoneError?: string,
}

const RegisterStoreScreen: React.VoidFunctionComponent<StyledProps<VoidFunctionComponent>> = ({
  theme,
}) => {
  const [step, setStep] = useState<keyof IRegisterStoreSteps>('firstStep');
  const { setToastMessage } = useContext(ToastContext);
  const [registerStoreRequest, setRegisterStoreRequest] = useState<IStoreRequestWithErrors>(INITIAL_REQUEST);
  const [cityResults, setCityResults] = useState<IOptions[]>([]);

  const categoryResult = useQuery(
    'getStoreCategorys',
    getStoreCategorys,
    {
      select: (data) => (
      data?.data as string[])?.map((category) => ({ label: category, value: category }
      )),
    },
  );

  const stateResult = useQuery(
    'getStates',
    getStates,
    {
      enabled: step === 'addressStep',
      select: (data) => (
        data?.data as IState[])?.map(
        (state) => ({ label: state.nome, value: state.id.toString() }),
      ),
    },
  );

  const doGetCityRequest = useMutation(getCity, {
    onSuccess: (response) => {
      if (response.status === 200) {
        const cityTransformed = (response.data as ICity[])?.map(
          (state) => ({ label: state.nome, value: state.nome }),
        );
        setCityResults(cityTransformed);
      }
    },
  });

  const doPostStoreRequest = useMutation(postStore, {
    onSuccess: (response) => {
      if (response.status === 200) {
        const cityTransformed = (response.data as ICity[])?.map(
          (state) => ({ label: state.nome, value: state.nome }),
        );
        setCityResults(cityTransformed);
      } else {
        setToastMessage({
          message: 'Erro ao tentar cadastrar a loja.',
          type: 'error',
        });
      }
    },
  });

  const handleUploadStoreImage = useCallback(
    (logoImage: string) => {
      setRegisterStoreRequest({
        ...registerStoreRequest,
        logoImage,
      });
    },
    [registerStoreRequest],
  );

  const handleUploadStoreBannerImage = useCallback(
    (bannerImage: string) => {
      setRegisterStoreRequest({
        ...registerStoreRequest,
        bannerImage,
      });
    },
    [registerStoreRequest],
  );

  function attSocialMedia(
    stateToBeAtt: 'facebookAccount' | 'instagramAccount' | 'twitterAccount' | 'youtubeAccount',
    pageAdreess: string,
  ) {
    if (registerStoreRequest[stateToBeAtt]?.toLocaleLowerCase().includes(pageAdreess)) {
      const indexTobeGet = registerStoreRequest[stateToBeAtt].split('/').length
        - (stateToBeAtt === 'youtubeAccount' || stateToBeAtt === 'twitterAccount' ? 1 : 2);
      const userPart = registerStoreRequest[stateToBeAtt].split('/')[indexTobeGet];
      setRegisterStoreRequest({
        ...registerStoreRequest,
        [stateToBeAtt]: userPart,
      });
    }
  }

  function handleRegisterStoreSubmit() {
    if (isValidateCepFormat(registerStoreRequest.zipCode)
      && isValidateTelFormat(registerStoreRequest.phone)
      && registerStoreRequest.addressNumber.length === 3
      && _.has(registerStoreRequest, [
        'categories',
        'state',
        'bannerImage',
        'logoImage',
        'primaryColor',
        'secondaryColor',
        'street',
        'city',
        'zipCode',
        'name',
        'email',
        'phone',
        'addressNumber',
        'neighbourhood',
        'description',
      ])
    ) {
      doPostStoreRequest.mutate(
        registerStoreRequest,
      );
    } else if (!isValidateCepFormat(registerStoreRequest.zipCode) || !isValidateTelFormat(registerStoreRequest.phone) || registerStoreRequest.addressNumber.length !== 3) {
      setRegisterStoreRequest({
        ...registerStoreRequest,
        addressNumberError: registerStoreRequest.addressNumber.length !== 3 ? 'Você precisa completar o número do endereço' : '',
        phoneError: !isValidateTelFormat(registerStoreRequest.phone) ? 'O seu telefone não é válido' : '',
        cepError: !isValidateCepFormat(registerStoreRequest.zipCode) ? 'Está faltando número no zipCode' : '',
      });
    } else {
      setToastMessage({
        message: 'Não foi possível cadastrar a sua loja, alguma informação não foi preechida.',
        type: 'error',
      });
    }
  }

  const validStep = useCallback(
    (stepToBeValidated: keyof IRegisterStoreSteps) => {
      if (step === 'socialMediaStep') {
        attSocialMedia('facebookAccount', 'facebook.com');
        attSocialMedia('instagramAccount', 'instagram.com');
        attSocialMedia('twitterAccount', 'twitter.com');
        attSocialMedia('youtubeAccount', 'youtube.com');
        setStep(stepToBeValidated);
      } else {
        setStep(stepToBeValidated);
      }
    },
    [step, registerStoreRequest],
  );

  useEffect(() => {
    if (registerStoreRequest.state) {
      doGetCityRequest.mutate(registerStoreRequest.state);
    }
  }, [registerStoreRequest.state]);

  const FirstStepContent = (
    <RegisterStoreScreenStyle.FirstStepContainer>
      <ApeliePageTitle>
        Cadastro Inicial da Loja
      </ApeliePageTitle>
      <div id="content">
        <div id="store-logo-image-content">
          <ApelieUploadPhoto
            selectedPhotoKey="logoImage"
            onImageSelect={handleUploadStoreImage}
            textOfUploadDragArea="Faça o upload do logo da loja"
          />
        </div>
        <div id="store-detail-content">
          <ApelieInputField
            maxLength={35}
            placeholder="Nome da Loja"
            name="name"
            value={registerStoreRequest.name}
            onChange={
              (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)
            }
          />

          <ApelieSelectBox
            placeholder="Escolha a categoria da loja..."
            type="MULTI"
            width="100%"
            isLoading={categoryResult.isLoading}
            isDisabled={categoryResult.isLoading || !categoryResult.isSuccess}
            onChange={(selectedValues) => setRegisterStoreRequest({
              ...registerStoreRequest,
              categories: [...selectedValues],
            })}
            options={categoryResult.data}
          />

          <ApelieInputField
            type="textarea"
            placeholder="Descrição da Loja"
            name="description"
            value={registerStoreRequest.description}
            onChange={
              (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)
            }
            maxLength={275}
          />
        </div>
      </div>
    </RegisterStoreScreenStyle.FirstStepContainer>
  );

  const DesignStepContent = (
    <RegisterStoreScreenStyle.DesignStepContainer>
      <ApeliePageTitle>
        Cadastro de Design da loja
      </ApeliePageTitle>
      <div id="content">
        <div id="store-banner-image-content">
          <ApelieUploadPhoto
            selectedPhotoKey="bannerImage"
            onImageSelect={handleUploadStoreBannerImage}
            textOfUploadDragArea="Faça o upload do banner da loja"
          />
        </div>
        <div id="store-color-select-content">
          <ApelieSelectBox
            placeholder="Cor primária de sua loja..."
            type="SINGLE"
            onChange={(selectedValues) => setRegisterStoreRequest({
              ...registerStoreRequest,
              primaryColor: selectedValues[0],
            })}
            options={colorPallets}
          />

          <ApelieSelectBox
            placeholder="Cor secundária de sua loja..."
            type="SINGLE"
            onChange={(selectedValues) => setRegisterStoreRequest({
              ...registerStoreRequest,
              secondaryColor: selectedValues[0],
            })}
            options={colorPallets}
          />
        </div>
      </div>
    </RegisterStoreScreenStyle.DesignStepContainer>
  );

  const SocialMediaStepContent = (
    <RegisterStoreScreenStyle.SocialMediaStepContent>
      <ApeliePageTitle>
        Cadastro das medias sociais
      </ApeliePageTitle>

      <ApelieIconWithInput
        icon={<FacebookIcon height="35" width="35" fill={theme.colors.text.primary} />}
        maxLength={50}
        placeholder="Insira o link do facebook da sua loja (Opcional)"
        name="facebookAccount"
        value={registerStoreRequest.facebookAccount}
        onChange={
          (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)
        }
      />
      <ApelieIconWithInput
        icon={<InstagramIcon height="35" width="35" fill={theme.colors.text.primary} />}
        maxLength={50}
        placeholder="Insira o link do instagram da sua loja (Opcional)"
        name="instagramAccount"
        value={registerStoreRequest.instagramAccount}
        onChange={
          (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)
        }
      />
      <ApelieIconWithInput
        icon={<TwitterIcon height="35" width="35" fill={theme.colors.text.primary} />}
        maxLength={50}
        placeholder="Insira o link do twitter da sua loja (Opcional)"
        name="twitterAccount"
        value={registerStoreRequest.twitterAccount}
        onChange={
          (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)
        }
      />
      <ApelieIconWithInput
        icon={<YoutubeIcon height="35" width="35" fill={theme.colors.text.primary} />}
        maxLength={50}
        placeholder="Insira o link fo youtube da sua loja (Opcional)"
        name="youtubeAccount"
        value={registerStoreRequest.youtubeAccount}
        onChange={
          (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)
        }
      />
    </RegisterStoreScreenStyle.SocialMediaStepContent>
  );

  const AdressStepComponent = (
    <RegisterStoreScreenStyle.AdressStepContent>
      <div id="adress-content">
        <ApeliePageTitle>
          Cadastro de endereço
        </ApeliePageTitle>

        <ApelieInputField
          maxLength={9}
          placeholder="Insira o zipCode ..."
          name="zipCode"
          isError={registerStoreRequest.cepError}
          value={registerStoreRequest.zipCode}
          onChange={
            (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest, cepNumberMask)
          }
        />

        <ApelieSelectBox
          placeholder="Selecione o estado ..."
          type="SINGLE"
          isLoading={stateResult.isLoading}
          isDisabled={stateResult.isLoading || !stateResult.isSuccess}
          onChange={(selectedValues) => {
            setRegisterStoreRequest({
              ...registerStoreRequest,
              state: selectedValues[0],
              city: '',
            });
          }}
          options={stateResult.data}
        />

        <ApelieSelectBox
          placeholder="Selecione a cidade ..."
          type="SINGLE"
          isDisabled={
            !registerStoreRequest.state
            || doGetCityRequest.isLoading
            || !doGetCityRequest.isSuccess
          }
          isLoading={doGetCityRequest.isLoading}
          onChange={(selectedValues) => setRegisterStoreRequest({
            ...registerStoreRequest,
            city: selectedValues[0],
          })}
          options={doGetCityRequest.isLoading ? undefined : cityResults}
        />

        <ApelieInputField
          maxLength={50}
          placeholder="Insira o nome da rua ..."
          name="street"
          value={registerStoreRequest.street}
          onChange={
            (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)
          }
        />

        <ApelieInputField
          maxLength={50}
          placeholder="Insira o bairro ..."
          name="neighbourhood"
          value={registerStoreRequest.neighbourhood}
          onChange={
            (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest)
          }
        />

        <ApelieInputField
          maxLength={3}
          placeholder="Insira o número ..."
          name="addressNumber"
          isError={registerStoreRequest.addressNumberError}
          value={registerStoreRequest.addressNumber}
          onChange={
            (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest, adressNumberMask)
          }
        />

        <ApelieInputField
          maxLength={15}
          type="tel"
          placeholder="Insira o telefone para contato ..."
          name="phone"
          isError={registerStoreRequest.phoneError}
          value={registerStoreRequest.phone}
          onChange={
            (event: ChangeEvent<HTMLInputElement>) => handleChange(event, setRegisterStoreRequest, phoneMask)
          }
        />
      </div>
    </RegisterStoreScreenStyle.AdressStepContent>
  );

  const firstStep: IRegister = {
    content: FirstStepContent,
    nextButtonAction: () => validStep('designStep'),
    disabledCondition:
    !registerStoreRequest.logoImage
    || !registerStoreRequest.name
    || !registerStoreRequest.description
    || registerStoreRequest.categories.length === 0,
  };

  const designStep: IRegister = {
    content: DesignStepContent,
    backButtonAction: () => setStep('firstStep'),
    nextButtonAction: () => validStep('socialMediaStep'),
    disabledCondition:
    !registerStoreRequest.primaryColor
    || !registerStoreRequest.secondaryColor
    || !registerStoreRequest.bannerImage,
  };

  const socialMediaStep: IRegister = {
    content: SocialMediaStepContent,
    backButtonAction: () => setStep('designStep'),
    nextButtonAction: () => validStep('addressStep'),
    disabledCondition: false,
  };

  const addressStep: IRegister = {
    content: AdressStepComponent,
    backButtonAction: () => setStep('socialMediaStep'),
    nextButtonAction: () => handleRegisterStoreSubmit(),
    disabledCondition:
    !registerStoreRequest.zipCode
    || !registerStoreRequest.state
    || !registerStoreRequest.city
    || !registerStoreRequest.neighbourhood
    || !registerStoreRequest.street
    || !registerStoreRequest.addressNumber,
  };

  const registerStoreSteps: IRegisterStoreSteps = {
    firstStep,
    designStep,
    socialMediaStep,
    addressStep,
  };

  return (
    <RegisterStoreScreenStyle.Container>
      <div id="image-container">
        <img
          src="/images/RegisterStore/window-shopping-animate.svg"
          alt="ApelieRegisterImg1"
          height={350}
          width={350}
        />

        <img
          src="/images/Home/Home-Animated-Image1.svg"
          alt="ApelieRegisterImg2"
          height={350}
          width={350}
        />
      </div>
      <RegisterStoreScreenStyle.RegisterStoreContainer>
        <RegisterStoreScreenStyle.RegisterStoreContainerContent>
          {registerStoreSteps[step].content}
        </RegisterStoreScreenStyle.RegisterStoreContainerContent>
        <RegisterStoreScreenStyle.RegisterStoreContainerFooter>
          {registerStoreSteps[step]?.backButtonAction && (
          <ApelieButton
            id={`${step}-back-button`}
            textVariant="paragraph1"
            buttonColor="primary"
            textColor="appPrimary"
            buttonType="secondary"
            onClick={() => {
              const executeBackButtonAction = registerStoreSteps[step]?.backButtonAction ?? function () { return null; };
              executeBackButtonAction();
            }}
          >
            Voltar
          </ApelieButton>
          )}
          <ApelieButton
            id={`${step}-next-button`}
            textVariant="paragraph1"
            onClick={() => registerStoreSteps[step]?.nextButtonAction()}
            disabled={registerStoreSteps[step]?.disabledCondition}
          >
            Proximo
          </ApelieButton>
        </RegisterStoreScreenStyle.RegisterStoreContainerFooter>
      </RegisterStoreScreenStyle.RegisterStoreContainer>
    </RegisterStoreScreenStyle.Container>
  );
};

export default withTheme(RegisterStoreScreen);
