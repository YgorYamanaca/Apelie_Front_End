export function isValidateEmail(email: string): boolean {
  const emailRegExp = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/g;
  return emailRegExp.test(String(email).toLowerCase());
}

export function isValidateName(name: string): boolean {
  const nameRegExp = /^[^\s]([a-zA-Z ])+[^\s]$/g;
  return nameRegExp.test(String(name).toLowerCase());
}

export function isSamePassword(password1: string, password2: string): boolean {
  return password1 === password2;
}
