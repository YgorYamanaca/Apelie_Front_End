import React from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { StyledProps, withTheme } from 'styled-components';
import _ from 'lodash';
import UploadIcon from '@/assets/icons/UploadIcon';
import ApelieUploadMultiPhotoStyle from './styles';
import ApelieTextBase from '../ApelieTextBase';
import ApelieIconButton from '../ApelieIconButton';
import TrashIcon from '@/assets/icons/TrashIcon';

interface IApelieUploadPhoto {
    onImageSelect: (imageURl: string[]) => void;
    textOfUploadDragArea: string;
    selectedPhotoKey: string;
}

const ApelieUploadMultiPhoto: React.FC<StyledProps<IApelieUploadPhoto>> = ({
  onImageSelect,
  textOfUploadDragArea,
  selectedPhotoKey,
  theme,
}) => {
  const [images, setImages] = React.useState<ImageListType>([]);
  const MAX_NUMBER = 5;
  const MAX_SIZE = 3000000;

  const onChange = (imageList: ImageListType) => {
    onImageSelect(imageList.map((image) => image[selectedPhotoKey]));
    setImages(imageList);
  };

  return (
    <ApelieUploadMultiPhotoStyle.Container id="apelie-image-uploader">
      <ImageUploading
        value={images}
        onChange={onChange}
        onError={() => onImageSelect([])}
        maxNumber={MAX_NUMBER}
        maxFileSize={MAX_SIZE}
        dataURLKey={selectedPhotoKey}
        acceptType={['jpg', 'jpeg']}
        multiple
      >
        {({
          imageList,
          onImageUpload,
          onImageRemove,
          isDragging,
          dragProps,
          errors,
        }) => (
          <>
            <ApelieUploadMultiPhotoStyle.UploadImageContainer
              isDragging={isDragging}
              hasErrors={_.values(errors).length > 0}
              hasImage={imageList.length > 0}
              onClick={onImageUpload}
              {...dragProps}
            >
              {!errors && <UploadIcon height="35" width="35" fill={theme.colors.text.primary} />}
              <ApelieTextBase variant="title">
                {!errors && textOfUploadDragArea}
                {errors?.maxNumber && `A quantidade de imagem ultrapassa o limite de ${MAX_NUMBER}.`}
                {errors?.acceptType && 'O arquivo escolhido não é JPG ou JPEG.'}
                {errors?.maxFileSize && `O tamanho da imagem excede o limite de ${MAX_SIZE / 1000000} MBs`}
                {errors?.resolution && 'A resolução não é compátivel.'}
              </ApelieTextBase>
            </ApelieUploadMultiPhotoStyle.UploadImageContainer>
            <ApelieUploadMultiPhotoStyle.ImagesBox>
              {imageList.map((image, index) => (
                <ApelieUploadMultiPhotoStyle.ImageContainer>
                  <img
                    key={`uplodedImage-${index + 1}`}
                    id="uplodedImage"
                    src={image[selectedPhotoKey]}
                    alt="uplodedImageAlt"
                    width="75px"
                    height="75px"
                  />
                  <ApelieIconButton id="delete-image-button" onClick={() => onImageRemove(index)}>
                    <TrashIcon width="20" height="20" />
                  </ApelieIconButton>
                </ApelieUploadMultiPhotoStyle.ImageContainer>
              ))}
            </ApelieUploadMultiPhotoStyle.ImagesBox>
          </>
        )}
      </ImageUploading>
    </ApelieUploadMultiPhotoStyle.Container>
  );
};

export default withTheme(ApelieUploadMultiPhoto);
