import React from 'react';
import ApelieButton from '../ApelieButton';
import ApelieFormStyle from './styles';

interface IApelieForm {
    id: string,
    backButtonAction?: VoidFunction,
    nextButtonAction: VoidFunction,
    disabledCondition: boolean,
}

const ApelieForm : React.FC<IApelieForm> = ({
  id,
  children,
  backButtonAction,
  nextButtonAction,
  disabledCondition,
}) => (
  <ApelieFormStyle.Container>
    <ApelieFormStyle.Content>
      {children}
    </ApelieFormStyle.Content>
    <ApelieFormStyle.Footer>
      {backButtonAction && (
      <ApelieButton
        id={`${id}-back-button`}
        textVariant="paragraph1"
        buttonColor="primary"
        textColor="appPrimary"
        buttonType="secondary"
        onClick={() => {
          const executeBackButtonAction = backButtonAction ?? function () { return null; };
          executeBackButtonAction();
        }}
      >
        Voltar
      </ApelieButton>
      )}
      <ApelieButton
        id={`${id}-next-button`}
        textVariant="paragraph1"
        onClick={() => nextButtonAction()}
        disabled={disabledCondition}
      >
        Proximo
      </ApelieButton>
    </ApelieFormStyle.Footer>
  </ApelieFormStyle.Container>
);

export default ApelieForm;
