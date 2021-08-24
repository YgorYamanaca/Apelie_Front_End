import React from 'react';
import ApelieTextBase from '../ApelieTextBase';
import ApelieFlexBoxStyle from './styles';

interface IApelieFlexBox {
  flexBoxTitle?: string;
}

const ApelieFlexBox: React.FC<IApelieFlexBox> = ({
  flexBoxTitle,
  children,
}) => (
  <ApelieFlexBoxStyle.Container>
    <ApelieFlexBoxStyle.TextContainer>
      {flexBoxTitle && (
        <ApelieTextBase variant="title">{flexBoxTitle}</ApelieTextBase>
      )}
    </ApelieFlexBoxStyle.TextContainer>
    <ApelieFlexBoxStyle.ChildrenContainer>
      {children}
    </ApelieFlexBoxStyle.ChildrenContainer>
  </ApelieFlexBoxStyle.Container>
);

export default ApelieFlexBox;
