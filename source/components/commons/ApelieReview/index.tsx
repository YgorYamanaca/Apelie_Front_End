import React from 'react';
import { IStoreReview } from '@/types/interfaces/interface-store';
import ApelieUserPhotoComponent from '../ApelieUserPhotoComponent';
import ApelieReviewStyles from './styles';
import ApelieTextBase from '../ApelieTextBase';
import ApelieRating from '../ApelieRating';

interface IApelieReview {
    review: IStoreReview
}

const ApelieReview: React.FC<IApelieReview> = ({
  review,
}) => (
  <ApelieReviewStyles.Container>
    <ApelieReviewStyles.UserInfoContainer>
      <ApelieUserPhotoComponent size={65} userPhotoUrl={review.user.photoUrl} />
      <div id="user-name-and-rating">
        <ApelieTextBase tag="span" variant="title">
          {review.user.fullName}
        </ApelieTextBase>

        <ApelieRating variant="title" rating={review.rating} />
      </div>
    </ApelieReviewStyles.UserInfoContainer>
    <ApelieReviewStyles.UserReviewContainer>
      <ApelieTextBase tag="p" variant="paragraph1">
        {review.description}
      </ApelieTextBase>
    </ApelieReviewStyles.UserReviewContainer>
  </ApelieReviewStyles.Container>
);

export default ApelieReview;
