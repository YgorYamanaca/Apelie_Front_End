import IToastObject from '@/types/interfaces/interface-toast';
import React, { createContext, useState, useCallback } from 'react';
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
  const [TostMessageObject, setToastMessage] = useState<IToastObject>();

  const closeToast = useCallback(() => {
    setToastMessage(undefined);
  }, [TostMessageObject]);

  return (
    <ToastContext.Provider value={{ setToastMessage }}>
      {TostMessageObject && (
        <ApelieToastComponent
          message={TostMessageObject.message}
          type={TostMessageObject.type}
          closeFunction={closeToast}
        />
      )}
      {children}
    </ToastContext.Provider>
  );
};

export default ApelieToastProvider;
