import CheckIcon from '@/assets/icons/CheckIcon';
import CloseIcon from '@/assets/icons/CloseIcon';
import WarningIcon from '@/assets/icons/WarningIcon';
import ApelieTextBase from '@/components/commons/ApelieTextBase';
import IToastObject, { ToastType } from '@/types/interfaces/interface-toast';
import React, { useCallback, useEffect, useState } from 'react';
import StyleApelieToast from './styles';

interface IApelieToastComponent {
  id: string;
  messageObject?: IToastObject;
}

interface IToastWithId extends IToastObject {
  id: number
}

const ApelieToastComponent: React.FC<IApelieToastComponent> = ({
  id,
  messageObject,
}) => {
  const [queue, setQueue] = useState<IToastWithId[]>([]);
  const delayTime = 1000;
  const ToastIcons: { [key in ToastType]: React.ReactNode } = {
    warning: <WarningIcon />,
    info: <WarningIcon />,
    error: <WarningIcon />,
    success: <CheckIcon />,
  };

  const close = useCallback((indexOfToast: number) => {
    setQueue(queue.filter((toastObject) => toastObject.id !== indexOfToast));
  }, [queue]);

  useEffect(() => {
    if (messageObject && queue.length <= 1) {
      queue.push({ ...messageObject, id: queue.length + 1 });
      setQueue([...queue]);
    }
  }, [messageObject]);

  useEffect(() => {
    if (queue.length > 0) {
      setTimeout(() => {
        const FIRST_OF_ARRAY = 1;
        setQueue(queue.filter((_toastObject, index) => index + 1 !== FIRST_OF_ARRAY));
      }, 5 * 1000 + delayTime);
    }
  }, [queue]);

  return (
    <StyleApelieToast.ToastQueueContainer id={`${id}-toast-messages-id`}>
      {
        queue.length > 0 && (
          queue?.map((message, index) => (
            <StyleApelieToast.Container
              id={`${id}-message-${index + 1}-id`}
              key={`${id}-message-${index + 1}-key`}
              type={message.type}
              className="messageClass"
            >
              <StyleApelieToast.TextBox>
                <StyleApelieToast.ToastIcon>
                  {ToastIcons[message.type]}
                </StyleApelieToast.ToastIcon>
                <ApelieTextBase variant="paragraph1">{message.message}</ApelieTextBase>
              </StyleApelieToast.TextBox>
              <StyleApelieToast.CloseIconBox
                onClick={() => close(message.id)}
              >
                <CloseIcon />
              </StyleApelieToast.CloseIconBox>
            </StyleApelieToast.Container>
          ))
        )
      }
    </StyleApelieToast.ToastQueueContainer>
  );
};

export default ApelieToastComponent;
