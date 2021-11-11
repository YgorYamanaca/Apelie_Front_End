import React from 'react';
import ApelieLoadingSpinnerStyle from './styles';

interface IApelieLoadingSpinner {
  size?: string,
}

const ApelieLoadingSpinner: React.VoidFunctionComponent<IApelieLoadingSpinner> = ({
  size = '20px',
}) => (
  <ApelieLoadingSpinnerStyle.Container id="apelie-loading" size={size}>
    <div id="apelie-loader" />
  </ApelieLoadingSpinnerStyle.Container>
);

export default ApelieLoadingSpinner;
