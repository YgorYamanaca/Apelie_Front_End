import { IStore } from '@/types/interfaces/interface-store';

export function isValidateEmail(email: string): boolean {
  const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  return emailRegExp.test(String(email).toLowerCase());
}

export function isValidateName(name: string): boolean {
  const nameRegExp = /^[^\s]([A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ ])+[^\s]$/g;
  return nameRegExp.test(String(name).toLowerCase());
}

export function isSamePassword(password1: string, password2: string): boolean {
  return password1 === password2;
}

export function isVisibleOnScreen(elem: HTMLElement): boolean {
  const rect = elem.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;

  return isVisible;
}

export function isValidateSubscribeDate(date: string): boolean {
  const testDate = new Date(date);
  const toDay = new Date();
  const sixteenYearsAgo = new Date(toDay.getFullYear() - 16);
  return testDate < toDay && testDate < sixteenYearsAgo;
}

export function isImageExist(url: string): boolean {
  const request = new XMLHttpRequest();

  request.open('HEAD', url, false);
  request.send();

  return request.status !== 404;
}

export function isValidateCepFormat(cepToBeTest: string): boolean {
  const regexTest = /[0-9]{5}-[\d]{3}/g;
  return regexTest.test(cepToBeTest);
}

export function isValidateTelFormat(telToBeTest: string): boolean {
  const regexTest = /^(?:(?:\+|00)?(55)\s?)?(?:\(?([1-9][0-9])\)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/g;
  return regexTest.test(telToBeTest);
}

export function isFloat(value: number): boolean {
  return Number(value) === value && value % 1 !== 0;
}

export function isValidateStore(store: IStore): boolean {
  if (store.logoUrl && store.bannerUrl) {
    const imageList = store.products.map((product) => product.images.map((image) => image.url === null || image.url === undefined)).flat();
    if (imageList.includes(true)) {
      return false;
    }
    return true;
  }
  return false;
}
