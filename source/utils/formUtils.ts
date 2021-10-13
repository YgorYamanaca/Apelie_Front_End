import { ChangeEvent } from 'react';

/**
 * @description handle every change and set state of respective input
 * @param {ChangeEvent<HTMLInputElement>} event - on change event
 */
export default function handleChange(
  event: ChangeEvent<HTMLInputElement>,
  setState: any,
  mask?: (text: string) => string,
) {
  const fieldName = event.target.getAttribute('name')?.toString();
  setState((prevState: any) => ({
    ...prevState,
    [fieldName || 'inputKey']: mask ? mask(event.target.value) : event.target.value,
    [`${fieldName}Error` || 'inputKeyError']: false,
  }));
}
