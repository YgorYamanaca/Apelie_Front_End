import React, { memo } from 'react';
import _ from 'lodash';
import StarFillIcon from '@/assets/icons/StarFillIcon';
import ApelieTextBase from '../ApelieTextBase';
import StyleApelieRating from './styles';
import ITypographyVariants from '@/types/interfaces/interface-typography-variants';

interface IApelieRating {
  rating: number;
  variant?: keyof ITypographyVariants;
}

const ApelieRating: React.FunctionComponent<IApelieRating> = ({ rating, variant = 'paragraph1' }) => {
  const startScale: {[key in keyof ITypographyVariants]: number} = {
    title: 20,
    titleXS: 20,
    subTitle: 18,
    subTitleXs: 18,
    paragraph1: 16,
    paragraph1Xs: 16,
    paragraph2: 16,
    paragraph2Xs: 16,
    smallException: 16,
  };

  return (
    <StyleApelieRating.Container>
      <StarFillIcon width={`${startScale[variant]}px`} height={`${startScale[variant]}px`} />
      <ApelieTextBase tag="span" variant={variant}>
        { _.isInteger(rating) || rating === null ? `${rating || 0}.0` : rating}
      </ApelieTextBase>
    </StyleApelieRating.Container>
  );
};

export default memo(ApelieRating);
