import IToastObject from '@/types/interfaces/interface-toast';
import React, {
  createContext, useEffect, useState,
} from 'react';
import ApelieToastComponent from './ApelieToast';

interface IToastContext {
  setToastMessage: React.Dispatch<React.SetStateAction<IToastObject | undefined>>
}

export const ToastContext = createContext<IToastContext>({ setToastMessage: () => {} });

const ApelieToastProvider: React.FC = ({ children }) => {
  const [TostMessageObject, setToastMessage] = useState<IToastObject>();

  useEffect(() => {
    setTimeout(() => {
      setToastMessage(undefined);
    }, 7500);
  }, [TostMessageObject]);

  return (
    <ToastContext.Provider value={{ setToastMessage }}>
      {TostMessageObject
        && (
          <ApelieToastComponent
            message={TostMessageObject.message}
            type={TostMessageObject.type}
          />
        )}
      {children}
    </ToastContext.Provider>
  );
};

export default ApelieToastProvider;
