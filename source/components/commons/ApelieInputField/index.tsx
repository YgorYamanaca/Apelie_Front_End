import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import ApelieTextBase from '../ApelieTextBase';
import InputFieldStyle from './styles';

interface IInputField {
  min?: InputHTMLAttributes<HTMLInputElement>['min'],
  max?: InputHTMLAttributes<HTMLInputElement>['max'],
  type?: InputHTMLAttributes<HTMLInputElement>['type'],
  isError?: boolean | string,
  placeholder: string,
  name: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const ApelieInputField: React.FC<IInputField> = ({
  type = 'text',
  placeholder = 'Digite o seu texto...',
  isError,
  name,
  value,
  max,
  min,
  onChange,
}) => (
  <InputFieldStyle.Container>
    {typeof (isError) === 'string' && (
      <InputFieldStyle.ErrorBox id="ErrorBox">
        <ApelieTextBase variant="smallException">
          {isError}
        </ApelieTextBase>
      </InputFieldStyle.ErrorBox>
    )}
    <InputFieldStyle.Input
      isError={!!isError}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      max={max}
      min={min}
    />
  </InputFieldStyle.Container>
);

export default ApelieInputField;
