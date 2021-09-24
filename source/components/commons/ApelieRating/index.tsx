import React, { memo } from 'react';
import _ from 'lodash';
import StarFillIcon from '@/assets/icons/StarFillIcon';
import ApelieTextBase from '../ApelieTextBase';
import StyleApelieRating from './styles';

interface IApelieRating {
  rating: number;
}

const ApelieRating: React.FunctionComponent<IApelieRating> = ({ rating }) => (
  <StyleApelieRating.Container>
    <StarFillIcon width="16px" height="16px" />
    <ApelieTextBase tag="span" variant="paragraph1">
      { _.isInteger(rating) ? `${rating}.0` : rating }
    </ApelieTextBase>
  </StyleApelieRating.Container>
);

export default memo(ApelieRating);
