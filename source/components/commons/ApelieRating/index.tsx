import React, { useMemo, memo } from 'react';
import StarEmptyIcon from '@/assets/icons/StarEmptyIcon';
import StarFillIcon from '@/assets/icons/StarFillIcon';
import ApelieTextBase from '../ApelieTextBase';
import StyleApelieRating from './styles';

interface IApelieRating {
  rating: number;
}

const ApelieRating: React.FunctionComponent<IApelieRating> = ({ rating }) => {
  const wholeNumber = Math.round(rating);

  return (
    <StyleApelieRating.Container>
      <StarFillIcon key="fill-star" width="16px" height="16px" />
      <ApelieTextBase variant="paragraph1" value={wholeNumber.toString()} />
    </StyleApelieRating.Container>
  );
};

export default memo(ApelieRating);
