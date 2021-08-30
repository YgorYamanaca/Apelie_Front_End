import React, { useMemo, memo } from 'react';
import StarEmptyIcon from '@/assets/icons/StarEmptyIcon';
import StarFillIcon from '@/assets/icons/StarFillIcon';
import ApelieTextBase from '../ApelieTextBase';
import StyleApelieRating from './styles';

interface IApelieRating {
  rating: number;
}

const ApelieRating: React.FunctionComponent<IApelieRating> = ({ rating }) => {
  const FIVE_STARS = 5;
  const wholeNumber = Math.round(rating);

  const RatingStarts = useMemo(() => {
    const retArray = [];
    for (let i = 0; i < wholeNumber; i += 1) {
      retArray.push(<StarFillIcon key={`fill-star-${i}`} />);
    }
    for (let i = 0; i < Math.round(FIVE_STARS - wholeNumber); i += 1) {
      retArray.push(<StarEmptyIcon key={`empety-star-${i}`} />);
    }
    return retArray;
  }, [wholeNumber]);

  return (
    <StyleApelieRating.Container>
      <div>{RatingStarts.map((element) => element)}</div>
      <div>
        <ApelieTextBase variant="subTitle">{`Nota: ${rating}`}</ApelieTextBase>
      </div>
    </StyleApelieRating.Container>
  );
};

export default memo(ApelieRating);
