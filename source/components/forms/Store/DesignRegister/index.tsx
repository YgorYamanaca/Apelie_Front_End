import React, { useCallback } from 'react';
import ApeliePageTitle from '@/components/commons/ApeliePageTitle';
import ApelieSelectBox from '@/components/commons/ApelieSelectBox';
import ApelieUploadPhoto from '@/components/commons/ApelieUploadPhoto';
import { IStoreForm } from '@/types/interfaces/interface-store';
import DesignRegisterStyle from './styles';
import colorPallets from '@/utils/colorsPallet';

const DesignRegister: React.VoidFunctionComponent<IStoreForm> = ({
  registerStoreRequestValue,
  changeStoreRequestFunction,
}) => {
  const handleUploadStoreBannerImage = useCallback(
    (bannerImage: string) => {
      changeStoreRequestFunction({
        ...registerStoreRequestValue,
        bannerImage,
      });
    },
    [registerStoreRequestValue],
  );

  return (
    <DesignRegisterStyle.Container>
      <ApeliePageTitle>
        Cadastro de Design da loja
      </ApeliePageTitle>
      <div id="content">
        <div id="store-banner-image-content">
          <ApelieUploadPhoto
            selectedPhotoKey="bannerImage"
            onImageSelect={handleUploadStoreBannerImage}
            textOfUploadDragArea="Faça o upload do banner da loja"
          />
        </div>
        <div id="store-color-select-content">
          <ApelieSelectBox
            placeholder="Cor primária de sua loja..."
            type="SINGLE"
            onChange={(selectedValues) => changeStoreRequestFunction({
              ...registerStoreRequestValue,
              primaryColor: selectedValues[0],
            })}
            options={colorPallets}
          />

          <ApelieSelectBox
            placeholder="Cor secundária de sua loja..."
            type="SINGLE"
            onChange={(selectedValues) => changeStoreRequestFunction({
              ...registerStoreRequestValue,
              secondaryColor: selectedValues[0],
            })}
            options={colorPallets}
          />
        </div>
      </div>
    </DesignRegisterStyle.Container>
  );
};

export default DesignRegister;
