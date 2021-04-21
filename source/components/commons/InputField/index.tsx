import React, { ChangeEvent, InputHTMLAttributes } from 'react';
import InputFieldStyle from './styles';

interface IInputField {
  type?: InputHTMLAttributes<HTMLInputElement>['type'],
  placeholder: string,
  name: string,
  value: string,
  onChange: (event: ChangeEvent<HTMLInputElement>) => void,
}

const ApelieInputField: React.FC<IInputField> = ({
  type = 'text',
  placeholder = 'Digite o seu texto...',
  name,
  value,
  onChange,
}) => (
  <InputFieldStyle.Container>
    <InputFieldStyle.Input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
    />
  </InputFieldStyle.Container>
);

export default ApelieInputField;
