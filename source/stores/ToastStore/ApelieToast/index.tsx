import ApelieTextBase from '@/components/commons/ApelieTextBase';
import IToastObject from '@/types/interfaces/interface-toast';
import React from 'react';
import StyleApelieToast from './styles';

const ApelieToastComponent: React.FC<IToastObject> = ({
  message,
  type,
}) => (
  <StyleApelieToast.Container type={type}>
    <ApelieTextBase>
      {message}
    </ApelieTextBase>
  </StyleApelieToast.Container>
);

export default ApelieToastComponent;
