import CheckIcon from '@/assets/icons/CheckIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import WarningIcon from '@/assets/icons/WarningIcon';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import IToastObject, { ToastType } from '@/types/interfaces/interface-toast';
import React from 'react';
import StyleApelieToast from './styles';

const ApelieToastComponent: React.FC<IToastObject> = ({
  message,
  type,
  closeFunction,
}) => {
  const ToastIcons: {[key in ToastType]: React.ReactNode} = {
    warning: <WarningIcon />,
    info: <WarningIcon />,
    error: <WarningIcon />,
    success: <CheckIcon />,
  };

  return (
    <StyleApelieToast.Container type={type}>
      <StyleApelieToast.TextBox>
        <StyleApelieToast.ToastIcon>
          {ToastIcons[type]}
        </StyleApelieToast.ToastIcon>
        <ApelieTextBase variant="paragraph1">
          {message}
        </ApelieTextBase>
      </StyleApelieToast.TextBox>
      <StyleApelieToast.CloseIconBox onClick={() => closeFunction && closeFunction()}>
        <CloseIcon />
      </StyleApelieToast.CloseIconBox>
    </StyleApelieToast.Container>
  );
};

export default ApelieToastComponent;
