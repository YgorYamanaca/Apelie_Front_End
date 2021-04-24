import React from 'react';
import TextBase from '../TextBase';
import TextWithDividerStyle from './styles';

interface ITextWithDivider {
  text: string;
}

const TextWithDivider: React.FC<ITextWithDivider> = ({
  text,
}) => (
  <TextWithDividerStyle.Container>
    <TextWithDividerStyle.TextBox>
      <TextBase variant="subTitle">
        {text}
      </TextBase>
    </TextWithDividerStyle.TextBox>
    <hr />
  </TextWithDividerStyle.Container>
);

export default TextWithDivider;
