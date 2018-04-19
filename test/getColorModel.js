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

const rgb = {
  red: 13,
  green: 200,
  blue: 230,
  model: 'rgb'
};

test('get color model', () => {
  expect(getColorModel(hex)).toMatch(/hex/);
  expect(getColorModel(hsl)).toMatch(/hsl/);
  expect(getColorModel(rgb)).toMatch(/rgb/);
  expect(getColorModel('#a11612')).toMatch(/hex/);
  expect(getColorModel('#a11612ff')).toMatch(/hex/);
  expect(getColorModel('hsl(200, 100%, 50%)')).toMatch(/hsl/);
  expect(getColorModel('hsla(200, 100%, 50%, 1)')).toMatch(/hsl/);
  expect(getColorModel('rgb(13, 200, 230)')).toMatch(/rgb/);
  expect(getColorModel('rgba(13, 200, 230, 1)')).toMatch(/rgb/);
});
