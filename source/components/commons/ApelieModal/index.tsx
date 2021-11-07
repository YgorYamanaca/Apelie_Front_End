import React, { useEffect, useRef, useState } from 'react';
import ReactDOM from 'react-dom';
import CloseIcon from '@/assets/icons/CloseIcon';
import ApelieIconButton from '../ApelieIconButton';
import ApelieModalStyle from './styles';
import useOnClickOutside from '@/theme/useOutSideClick';

interface IApelieModal {
  show: boolean,
  onClose: VoidFunction,
}

const ApelieModal: React.FC<IApelieModal> = ({
  show, onClose, children,
}) => {
  const [isBrowser, setIsBrowser] = useState(false);
  const modalDiv = document.getElementById('modal-root');
  const modalRef = useRef<HTMLDivElement>(null);

  useOnClickOutside(modalRef, onClose);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const modalContent = show ? (
    <ApelieModalStyle.ModalOverlay>
      <ApelieModalStyle.Modal ref={modalRef}>
        <ApelieModalStyle.ModalHeader>
          <ApelieIconButton onClick={() => onClose()}>
            <CloseIcon height="20" width="20" />
          </ApelieIconButton>
        </ApelieModalStyle.ModalHeader>
        {children}
      </ApelieModalStyle.Modal>
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
