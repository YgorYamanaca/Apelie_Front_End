import React from 'react';
import StyleApelieUserPhoto from './styles';

interface IApelieUserPhotoComponent {
  userPhotoUrl: string,
  size: number,
  onMouseOnclickAction?: Function,
}

const ApelieUserPhotoComponent: React.FunctionComponent<IApelieUserPhotoComponent> = ({
  userPhotoUrl,
  size,
  onMouseOnclickAction,
  children,
}) => (
  <StyleApelieUserPhoto.Container
    imgUrl={userPhotoUrl}
    size={size}
    onClick={() => onMouseOnclickAction && onMouseOnclickAction()}
  >
    {children}
  </StyleApelieUserPhoto.Container>
);

export default ApelieUserPhotoComponent;
