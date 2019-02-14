import { whichModel } from '@/whichModel';

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
  expect(whichModel(hex)).toMatch(/hex/);
  expect(whichModel(hsl)).toMatch(/hsl/);
  expect(whichModel(hsv)).toMatch(/hsv/);
  expect(whichModel(cmyk)).toMatch(/cmyk/);
  expect(whichModel(rgb)).toMatch(/rgb/);
  expect(whichModel('#a11612')).toMatch(/hex/);
  expect(whichModel('#a11612ff')).toMatch(/hex/);
  expect(whichModel('hsl(200, 100%, 50%)')).toMatch(/hsl/);
  expect(whichModel('hsla(200, 100%, 50%, 1)')).toMatch(/hsl/);
  expect(whichModel('hsv(200, 100%, 50%)')).toMatch(/hsv/);
  expect(whichModel('hsva(200, 100%, 50%, 1)')).toMatch(/hsv/);
  expect(whichModel('cmyk(13, 100, 64)')).toMatch(/cmyk/);
  expect(whichModel('cmyka(13, 100, 32, 1)')).toMatch(/cmyk/);
  expect(whichModel('rgb(13, 200, 230)')).toMatch(/rgb/);
  expect(whichModel('rgba(13, 200, 230, 1)')).toMatch(/rgb/);
});
