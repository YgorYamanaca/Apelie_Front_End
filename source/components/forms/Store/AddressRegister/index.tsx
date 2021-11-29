import React, {
  ChangeEvent, useEffect, useState,
} from 'react';
import { useMutation, useQuery } from 'react-query';
import ApelieSelectBox, { IOptions } from '@/components/commons/ApelieSelectBox';
import { IAddressRegister } from '@/types/interfaces/interface-store';
import AddressRegisterStyle from './styles';
import handleChange from '@/utils/formUtils';
import { getCity, getStates } from '@/services/locality';
import { ICity, IState } from '@/types/interfaces/interface-apelie-locality-request';
import ApelieInputField from '@/components/commons/ApelieInputField';
import { addressNumberMask, cepNumberMask, phoneMask } from '@/utils/mask';
import ApelieLoadingSpinner from '@/components/commons/ApelieLoadingSpinner';
import { IForm } from '@/types/interfaces/interface-apelie-form';

const AddressRegister: React.VoidFunctionComponent<IForm<IAddressRegister>> = ({
  registerStoreRequestValue,
  changeStoreRequestFunction,
}) => {
  const [cityResults, setCityResults] = useState<IOptions[]>([]);

  const stateResult = useQuery(
    'getStates',
    getStates,
    {
      select: (data) => (data?.data as IState[])?.map(
        (state) => ({ label: state.nome, value: state.sigla }),
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

  useEffect(() => {
    if (registerStoreRequestValue.state) {
      doGetCityRequest.mutate(registerStoreRequestValue.state);
    }
  }, [registerStoreRequestValue.state]);

  return (
    <AddressRegisterStyle.Container>
      <div id="address-content">
        {stateResult.isSuccess ? (
          <>
            <ApelieInputField
              maxLength={9}
              placeholder="Insira o zipCode ..."
              name="zipCode"
              isError={registerStoreRequestValue.zipCodeError}
              value={registerStoreRequestValue.zipCode}
              onChange={
                (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction, cepNumberMask)
              }
            />
            <ApelieSelectBox
              placeholder="Selecione o estado ..."
              type="SINGLE"
              isLoading={stateResult.isLoading}
              isDisabled={stateResult.isLoading || !stateResult.isSuccess}
              onChange={(selectedValues) => {
                changeStoreRequestFunction({
                  ...registerStoreRequestValue,
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
                !registerStoreRequestValue.state
                || doGetCityRequest.isLoading
                || !doGetCityRequest.isSuccess
              }
              isLoading={doGetCityRequest.isLoading}
              onChange={(selectedValues) => changeStoreRequestFunction({
                ...registerStoreRequestValue,
                city: selectedValues[0],
              })}
              options={doGetCityRequest.isLoading ? undefined : cityResults}
            />
            <ApelieInputField
              maxLength={50}
              placeholder="Insira o nome da rua ..."
              name="street"
              value={registerStoreRequestValue.street}
              onChange={
                (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction)
              }
            />
            <ApelieInputField
              maxLength={50}
              placeholder="Insira o bairro ..."
              name="neighbourhood"
              value={registerStoreRequestValue.neighbourhood}
              onChange={
                (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction)
              }
            />
            <ApelieInputField
              maxLength={5}
              placeholder="Insira o número ..."
              name="addressNumber"
              isError={registerStoreRequestValue.addressNumberError}
              value={registerStoreRequestValue.addressNumber}
              onChange={
                (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction, addressNumberMask)
              }
            />
            <ApelieInputField
              maxLength={15}
              type="tel"
              placeholder="Insira o telefone para contato ..."
              name="phone"
              isError={registerStoreRequestValue.phoneError}
              value={registerStoreRequestValue.phone}
              onChange={
                (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction, phoneMask)
              }
            />

            <ApelieInputField
              type="email"
              placeholder="Insira o email da loja"
              name="email"
              value={registerStoreRequestValue.email}
              onChange={
                      (event: ChangeEvent<HTMLInputElement>) => handleChange(event, changeStoreRequestFunction)
                    }
            />
          </>
        ) : <ApelieLoadingSpinner size="35px" />}
      </div>
    </AddressRegisterStyle.Container>
  );
};

export default AddressRegister;
