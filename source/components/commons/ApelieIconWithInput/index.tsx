import React from 'react';
import ApelieInputField, { IInputField } from '../ApelieInputField';
import ApelieIconWithInputStyle from './styles';

interface IApelieIconWithInput extends IInputField {
    icon: React.ReactNode;
}

const ApelieIconWithInput: React.FC<IApelieIconWithInput> = ({
  icon,
  ...inputProps
}) => (
  <ApelieIconWithInputStyle.Container>
    {icon}
    <ApelieInputField {...inputProps} />
  </ApelieIconWithInputStyle.Container>
);

export default ApelieIconWithInput;
