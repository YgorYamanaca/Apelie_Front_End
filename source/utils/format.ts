export function toISOSimpleDate(date: Date): string {
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate()}`;
}

export function toCorrectDateFormat(date: Date): string {
  return `${date.getDate()} / 
  ${date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1} / 
  ${date.getFullYear()}`;
}

export function toWritePhoneFormat(phone: string): string {
  return `(${phone.slice(0, 2)}) ${phone.slice(2, phone.length)}`;
}

export function getBase64Image(img: HTMLImageElement) {
  const canvas = document.createElement('canvas');
  canvas.width = img.width;
  canvas.height = img.height;
  const ctx = canvas.getContext('2d');
  ctx?.drawImage(img, 0, 0);
  const dataURL = canvas.toDataURL('image/png');
  return dataURL.replace(/^data:image\/(png|jpg);base64,/, '');
}
