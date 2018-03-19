import hexNumToDec from './hexNumToDec';

export default function hexToRgb (hex) {
  const { red, green, blue } = hex;

  return {
    red: hexNumToDec(red),
    green: hexNumToDec(green),
    blue: hexNumToDec(blue)
  };
}
