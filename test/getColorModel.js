import getColorModel from '../src/getColorModel';

const hex = {
  red: 'a1',
  green: '16',
  blue: '12',
  model: 'hex'
};

const hsl = {
  hue: 200,
  sat: 100,
  lum: 50,
  model: 'hsl'
};

const hsv = {
  hue: 200,
  sat: 100,
  val: 50,
  model: 'hsv'
};

const rgb = {
  red: 13,
  green: 200,
  blue: 230,
  model: 'rgb'
};

const cmyk = {
  cyan: 65,
  magenta: 100,
  yellow: 12,
  key: 56,
  model: 'cmyk'
};

test('get color model', () => {
  expect(getColorModel(hex)).toMatch(/hex/);
  expect(getColorModel(hsl)).toMatch(/hsl/);
  expect(getColorModel(hsv)).toMatch(/hsv/);
  expect(getColorModel(cmyk)).toMatch(/cmyk/);
  expect(getColorModel(rgb)).toMatch(/rgb/);
  expect(getColorModel('#a11612')).toMatch(/hex/);
  expect(getColorModel('#a11612ff')).toMatch(/hex/);
  expect(getColorModel('hsl(200, 100%, 50%)')).toMatch(/hsl/);
  expect(getColorModel('hsla(200, 100%, 50%, 1)')).toMatch(/hsl/);
  expect(getColorModel('hsv(200, 100%, 50%)')).toMatch(/hsv/);
  expect(getColorModel('hsva(200, 100%, 50%, 1)')).toMatch(/hsv/);
  expect(getColorModel('cmyk(13, 100, 64)')).toMatch(/cmyk/);
  expect(getColorModel('cmyka(13, 100, 32, 1)')).toMatch(/cmyk/);
  expect(getColorModel('rgb(13, 200, 230)')).toMatch(/rgb/);
  expect(getColorModel('rgba(13, 200, 230, 1)')).toMatch(/rgb/);
});
