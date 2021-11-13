export function phoneMask(phoneText: string) {
  let ret = phoneText.replace(/\D/g, '');
  ret = ret.replace(/^0/, '');

  if (ret.length >= 11) {
    ret = ret.replace(/^(\d\d)(\d{5})(\d{4}).*/, '($1) $2-$3');
  } else if (ret.length > 6) {
    ret = ret.replace(/^(\d\d)(\d{4})(\d{0,4}).*/, '($1) $2-$3');
  } else if (ret.length > 2) {
    ret = ret.replace(/^(\d\d)(\d{0,5})/, '($1) $2');
  } else if (phoneText.trim() !== '') {
    ret = ret.replace(/^(\d*)/, '($1');
  }
  return ret;
}

export function addressNumberMask(addressText: string) {
  let ret = addressText.replace(/\D/g, '');
  ret = ret.replace(/^0/, '');

  if (ret.length < 3) {
    return ret;
  }
  return ret.slice(0, 3);
}

export function cepNumberMask(cepText: string) {
  const ret = cepText.replace(/\D/g, '');
  return ret.replace(/^(\d{5})(\d)/g, '$1-$2');
}

export function formatReal(moneyInput: string) {
  let v = moneyInput.replace(/\D/g, '');
  v = `${(Number(v) / 100).toFixed(2)}`;
  v = v.replace('.', ',');
  v = v.replace(/(\d)(\d{3})(\d{3}),/g, '$1.$2.$3,');
  v = v.replace(/(\d)(\d{3}),/g, '$1.$2,');
  return v;
}
