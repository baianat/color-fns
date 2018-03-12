export default function decNumbToHex(decNum) {
  decNum = Number(decNum);
  if (isNaN(decNum)) {
    return '00';
  }
  return ('0' + decNum.toString(16)).slice(-2);
}
