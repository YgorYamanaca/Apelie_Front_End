import React, {
  createContext, useState,
} from 'react';
import IToastObject from '@/types/interfaces/interface-toast';
import ApelieToastComponent from './ApelieToast';

interface IToastContext {
  setToastMessage: React.Dispatch<
    React.SetStateAction<IToastObject | undefined>
  >;
}

export const ToastContext = createContext<IToastContext>({
  setToastMessage: () => '',
});

const ApelieToastProvider: React.FC = ({ children }) => {
  const [tostMessageObject, setToastMessage] = useState<IToastObject>();

  return (
    <ToastContext.Provider value={{ setToastMessage }}>
      {tostMessageObject && <ApelieToastComponent id="apelie-toast" messageObject={tostMessageObject} />}
      {children}
    </ToastContext.Provider>
  );
};

export default ApelieToastProvider;
