import { whichModel } from '../src/whichModel';

const hex = {
  blue: '12',
  green: '16',
  model: 'hex',
  red: 'a1',
};

const hsl = {
  hue: 200,
  lum: 50,
  model: 'hsl',
  sat: 100,
};

const hsv = {
  hue: 200,
  model: 'hsv',
  sat: 100,
  val: 50
};

const rgb = {
  blue: 230,
  green: 200,
  model: 'rgb',
  red: 13,
};

const cmyk = {
  cyan: 65,
  key: 56,
  magenta: 100,
  model: 'cmyk',
  yellow: 12
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
