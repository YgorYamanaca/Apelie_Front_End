import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@/assets/icons/CloseIcon';
import ApelieIconButton from '../ApelieIconButton';
import ApelieModalStyle from './styles';

interface IApelieModal {
  show: boolean,
  modalHeight?: string,
  hasCloseButton?: boolean,
  onClose?: VoidFunction,
}

const ApelieModal: React.FC<IApelieModal> = ({
  show, onClose, children, hasCloseButton = true, modalHeight = '90%',
}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalDiv = document.getElementById('modal-root');

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <ApelieModalStyle.ModalOverlay>
      {children && (
        <ApelieModalStyle.Modal modalHeight={modalHeight}>
          {hasCloseButton && (
            <ApelieIconButton id="close-modal-button" onClick={() => onClose && onClose()}>
              <CloseIcon height="20" width="20" />
            </ApelieIconButton>
          )}
          {children}
        </ApelieModalStyle.Modal>
      )}
    </ApelieModalStyle.ModalOverlay>
  ) : null;

  if (isBrowser && modalDiv) {
    return ReactDOM.createPortal(
      modalContent,
      modalDiv,
    );
  }
  return null;
};

export default ApelieModal;
