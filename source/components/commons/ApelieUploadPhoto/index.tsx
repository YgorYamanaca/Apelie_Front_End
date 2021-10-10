import React from 'react';
import ImageUploading, { ImageListType } from 'react-images-uploading';
import { StyledProps, withTheme } from 'styled-components';
import _ from 'lodash';
import UploadIcon from '@/assets/icons/UploadIcon';
import ApelieUploadPhotoStyle from './styles';
import ApelieTextBase from '../ApelieTextBase';
import ApelieButton from '../ApelieButton';

interface IApelieUploadPhoto {
    onImageSelect: (imageURl: string) => void;
    textOfUploadDragArea: string;
    selectedPhotoKey: string;
}

const ApelieUploadPhoto: React.FC<StyledProps<IApelieUploadPhoto>> = ({
  onImageSelect,
  textOfUploadDragArea,
  selectedPhotoKey,
  theme,
}) => {
  const [images, setImages] = React.useState<ImageListType>([]);
  const MAX_NUMBER = 1;
  const MAX_SIZE = 3000000;

  const onChange = (imageList: ImageListType) => {
    onImageSelect(imageList[0][selectedPhotoKey] || '');
    setImages(imageList);
  };

  return (
    <ApelieUploadPhotoStyle.Container id="apelie-image-uploader">
      <ImageUploading
        value={images}
        onChange={onChange}
        onError={() => onImageSelect('')}
        maxNumber={MAX_NUMBER}
        maxFileSize={MAX_SIZE}
        dataURLKey={selectedPhotoKey}
        acceptType={['jpg', 'jpeg']}
        multiple={false}
      >
        {({
          imageList,
          onImageUpload,
          onImageUpdate,
          isDragging,
          dragProps,
          errors,
        }) => (
          <>
            <ApelieUploadPhotoStyle.UploadImageContainer
              isDragging={isDragging}
              hasErrors={_.values(errors).length > 0}
              hasImage={imageList.length > 0}
              onClick={onImageUpload}
              {...dragProps}
            >
              {(errors || imageList.length === 0) && (
              <>
                {!errors && <UploadIcon height="35" width="35" fill={theme.colors.text.primary} />}
                <ApelieTextBase variant="title">
                  {!errors && textOfUploadDragArea}
                  {errors?.maxNumber && `A quantidade de imagem ultrapassa o limite de ${MAX_NUMBER}.`}
                  {errors?.acceptType && 'O arquivo escolhido não é JPG ou JPEG.'}
                  {errors?.maxFileSize && `O tamanho da imagem excede o limite de ${MAX_SIZE / 1000000} MBs`}
                  {errors?.resolution && 'A resolução não é compátivel.'}
                </ApelieTextBase>
              </>
              )}
              {!errors && imageList.map((image, index) => (
                <>
                  <img
                    key={`uplodedImage-${index + 1}`}
                    id="uplodedImage"
                    src={image?.[selectedPhotoKey]}
                    alt="uplodedImageAlt"
                  />
                </>
              ))}
            </ApelieUploadPhotoStyle.UploadImageContainer>
            {imageList.length > 0 && (
              <ApelieUploadPhotoStyle.FloatBox key="float-box">
                <ApelieButton
                  key="apelie-upload-photo"
                  textVariant="paragraph1"
                  onClick={() => onImageUpdate(0)}
                >
                  Atualizar
                </ApelieButton>
              </ApelieUploadPhotoStyle.FloatBox>
            )}
          </>
        )}
      </ImageUploading>
    </ApelieUploadPhotoStyle.Container>
  );
};

export default withTheme(ApelieUploadPhoto);
