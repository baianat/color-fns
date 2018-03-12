export default function hexNumToDec(hexNum) {
  if (isNaN(parseInt(hexNum, 16))) {
    return 0;
  }
  return parseInt(hexNum, 16);
}
