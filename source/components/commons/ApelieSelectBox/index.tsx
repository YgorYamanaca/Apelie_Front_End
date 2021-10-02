import React from 'react';
import _ from 'lodash';
import Select, { SingleValue, MultiValue } from 'react-select';
import { StyledProps, withTheme } from 'styled-components';
import ApelieSelectBoxStyle from './styles';

interface IOptions {
    value: string,
    label: string,
}

interface IApelieRating {
    type: 'SINGLE' | 'MULTI';
    options?: IOptions[];
    placeholder: string;
    onChange: (option: string[]) => void;
    width?: string;
}

const ApelieSelectBox: React.FC<StyledProps<IApelieRating>> = ({
  type,
  width = '275px',
  options,
  placeholder,
  onChange,
  theme,
}) => {
  function handleOnChange(selectedValues: SingleValue<IOptions> | MultiValue<IOptions>) {
    if (type === 'SINGLE') {
      onChange([(selectedValues as IOptions).value]);
    } else {
      onChange((selectedValues as MultiValue<IOptions>).map((selectedValue) => selectedValue.value));
    }
  }

  return (
    <ApelieSelectBoxStyle.Container boxWidth={width}>
      <Select
        closeMenuOnSelect={type === 'SINGLE'}
        onChange={(selectedValues) => handleOnChange(selectedValues)}
        isMulti={type === 'MULTI'}
        options={options}
        placeholder={placeholder}
        theme={(themeComponent) => ({
          ...themeComponent,
          colors: {
            ...themeComponent.colors,
            danger: `${theme.colors.text.primary}`,
            dangerLight: `${theme.colors.error.main}`,
            primary25: `${theme.colors.primary.alpha}`,
            primary: `${theme.colors.info.main}`,
            neutral0: `${theme.colors.background.default}`,
            neutral5: `${theme.colors.error.main}`,
            neutral10: `${theme.colors.primary.main}`,
            neutral20: `${theme.colors.divider}`,
            neutral70: `${theme.colors.error.main}`,
            neutral80: `${theme.colors.text.primary}`,
            neutral50: `${theme.colors.text.disabled}`,
          },
        })}
      />
    </ApelieSelectBoxStyle.Container>
  );
};

export default withTheme(ApelieSelectBox);
