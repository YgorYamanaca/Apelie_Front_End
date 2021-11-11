import React, { useCallback } from 'react';
import ApeliePageTitle from '@/components/commons/ApeliePageTitle';
import ApelieSelectBox from '@/components/commons/ApelieSelectBox';
import ApelieUploadPhoto from '@/components/commons/ApelieUploadPhoto';
import { IDesignRegister, IStoreForm } from '@/types/interfaces/interface-store';
import DesignRegisterStyle from './styles';
import colorPallets from '@/utils/colorsPallet';

const DesignRegister: React.VoidFunctionComponent<IStoreForm<IDesignRegister>> = ({
  formTitle = 'Cadastro de Design da loja',
  registerStoreRequestValue,
  changeStoreRequestFunction,
}) => {
  const handleUploadStorebannerUrl = useCallback(
    (bannerUrl: string) => {
      changeStoreRequestFunction({
        ...registerStoreRequestValue,
        bannerUrl,
      });
    },
    [registerStoreRequestValue],
  );

  return (
    <DesignRegisterStyle.Container>
      <ApeliePageTitle>
        {formTitle}
      </ApeliePageTitle>
      <div id="content">
        <div id="store-banner-image-content">
          <ApelieUploadPhoto
            selectedPhotoKey="bannerUrl"
            initialDefaultImage={registerStoreRequestValue.bannerUrl}
            onImageSelect={handleUploadStorebannerUrl}
            textOfUploadDragArea="Faça o upload do banner da loja"
          />
        </div>
        <div id="store-color-select-content">
          <ApelieSelectBox
            placeholder="Cor primária de sua loja..."
            type="SINGLE"
            selectedOption={colorPallets.find((color) => color.value === registerStoreRequestValue.primaryColor)}
            onChange={(selectedValues) => changeStoreRequestFunction({
              ...registerStoreRequestValue,
              primaryColor: selectedValues[0],
            })}
            options={colorPallets}
          />

          <ApelieSelectBox
            placeholder="Cor secundária de sua loja..."
            type="SINGLE"
            selectedOption={colorPallets.find((color) => color.value === registerStoreRequestValue.secondaryColor)}
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
