import React, { useMemo, memo } from 'react';
import StarEmptyIcon from '@/assets/icons/StarEmptyIcon';
import StarFillIcon from '@/assets/icons/StarFillIcon';
import ApelieTextBase from '../ApelieTextBase';
import StyleApelieRating from './styles';

interface IApelieRating {
  rating: number;
}

const ApelieRating: React.FunctionComponent<IApelieRating> = ({ rating }) => (
  <StyleApelieRating.Container>
    <StarFillIcon key="fill-star" width="16px" height="16px" />
    <ApelieTextBase tag="h1" variant="paragraph1" value={`${rating}`} />
  </StyleApelieRating.Container>
);

export default memo(ApelieRating);
