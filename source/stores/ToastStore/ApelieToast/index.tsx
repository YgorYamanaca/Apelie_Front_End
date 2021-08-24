import CheckIcon from '@/assets/icons/CheckIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import WarningIcon from '@/assets/icons/WarningIcon';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import IToastObject, { ToastType } from '@/types/interfaces/interface-toast';
import React, { useCallback, useEffect, useState } from 'react';
import StyleApelieToast from './styles';

export interface IMessage {
  type: ToastType;
  message: string;
}

const ApelieToastComponent: React.FC<IToastObject> = ({
  message,
  type,
  closeFunction,
}) => {
  const [queue, setQueue] = useState<IMessage[]>([]);
  const delayTime = 1000;
  const ToastIcons: {[key in ToastType]: React.ReactNode} = {
    warning: <WarningIcon />,
    info: <WarningIcon />,
    error: <WarningIcon />,
    success: <CheckIcon />,
  };

  function close(id: string) {
    document.getElementById(id)?.remove();
    const hasMessages = document.querySelectorAll('.messageClass')?.length;
    if (hasMessages === 0) {
      setQueue([]);
    }
  }

  const dropTimer = useCallback((index: number) => {
    setTimeout(() => {
      close(`message${index - 1}-id`);
    }, 5 * 1000 + delayTime);
  }, []);

  useEffect(() => {
    if (message && type) {
      setQueue([...queue]);
      dropTimer(queue.length);
    }
  }, [type, message, queue, dropTimer]);

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
      <StyleApelieToast.CloseIconBox
        onClick={() => closeFunction && closeFunction()}
      >
        <CloseIcon />
      </StyleApelieToast.CloseIconBox>
    </StyleApelieToast.Container>
  );
};

export default ApelieToastComponent;
