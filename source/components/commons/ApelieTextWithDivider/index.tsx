import React from 'react';
import ApelieTextBase from '../ApelieTextBase';
import TextWithDividerStyle from './styles';

interface ITextWithDivider {
  text: string;
}

const ApelieTextWithDivider: React.FC<ITextWithDivider> = ({
  text,
}) => (
  <TextWithDividerStyle.Container>
    <TextWithDividerStyle.TextBox>
      <ApelieTextBase variant="subTitle">
        {text}
      </ApelieTextBase>
    </TextWithDividerStyle.TextBox>
    <hr />
  </TextWithDividerStyle.Container>
);

export default ApelieTextWithDivider;
