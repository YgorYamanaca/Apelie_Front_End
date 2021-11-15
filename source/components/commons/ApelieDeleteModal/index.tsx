import React from 'react';
import ApelieButton from '../ApelieButton';
import ApelieDeleteModalStyle from './styles';

interface IApelieDeleteModal {
    text: string,
    onCancel: VoidFunction,
    onDelete: VoidFunction
}

const ApelieDeleteModal: React.FC<IApelieDeleteModal> = ({
  text,
  onCancel,
  onDelete,
}) => (
  <ApelieDeleteModalStyle.Container>
    <div id="text-wrapper">
      {text}
    </div>
    <ApelieDeleteModalStyle.ButtonWrapper>
      <ApelieButton
        id="back-button"
        textVariant="paragraph1"
        buttonColor="primary"
        buttonType="secondary"
        onClick={() => onCancel()}
      >
        Cancelar
      </ApelieButton>

      <ApelieButton
        id="delete-button"
        textVariant="paragraph1"
        onClick={() => onDelete()}
      >
        Deletar
      </ApelieButton>
    </ApelieDeleteModalStyle.ButtonWrapper>
  </ApelieDeleteModalStyle.Container>
);

export default ApelieDeleteModal;
