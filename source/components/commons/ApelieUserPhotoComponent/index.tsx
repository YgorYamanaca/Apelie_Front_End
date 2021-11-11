import React from 'react';
import StyleApelieUserPhoto from './styles';

interface IApelieUserPhotoComponent {
  userPhotoUrl: string;
  size: number;
  onMouseOnclickAction?: VoidFunction;
}

const DEFAULT_USER_PHOTO = '/images/User/default-user-image.png';

const ApelieUserPhotoComponent: React.FunctionComponent<IApelieUserPhotoComponent> = ({
  userPhotoUrl, size, onMouseOnclickAction, children,
}) => (
  <StyleApelieUserPhoto.Container
    imgUrl={userPhotoUrl || DEFAULT_USER_PHOTO}
    cursorType={!!onMouseOnclickAction}
    size={size}
    onClick={() => onMouseOnclickAction && onMouseOnclickAction()}
  >
    {children}
  </StyleApelieUserPhoto.Container>
);

export default ApelieUserPhotoComponent;
