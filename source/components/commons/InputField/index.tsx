import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import TextBase from '../TextBase';
import InputFieldStyle from './styles';

interface IInputField {
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
  onChange,
}) => (
  <InputFieldStyle.Container>
    {typeof (isError) === 'string' && (
      <InputFieldStyle.ErrorBox id="ErrorBox">
        <TextBase variant="smallException">
          {isError}
        </TextBase>
      </InputFieldStyle.ErrorBox>
    )}
    <InputFieldStyle.Input
      isError={!!isError}
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  </InputFieldStyle.Container>
);

export default ApelieInputField;
