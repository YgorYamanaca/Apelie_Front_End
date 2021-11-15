export function toISOSimpleDate(date: Date): string {
  return `${date.getFullYear()}-${
    date.getMonth() + 1 < 10 ? `0${date.getMonth() + 1}` : date.getMonth() + 1
  }-${date.getDate()}`;
}

export function toWritePhoneFormat(phone: string): string {
  return `(${phone.slice(0, 2)}) ${phone.slice(2, phone.length)}`;
}
