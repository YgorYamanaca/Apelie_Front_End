import React from 'react';
import StyleApelieUserPhoto from './styles';

interface IApelieUserPhotoComponent {
  userPhotoUrl: string,
  size: number
}

const ApelieUserPhotoComponent: React.FunctionComponent<IApelieUserPhotoComponent> = ({
  userPhotoUrl,
  size,
}) => (
  <StyleApelieUserPhoto.Container imgUrl={userPhotoUrl} size={size} />
);

export default ApelieUserPhotoComponent;
