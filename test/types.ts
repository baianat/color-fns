import * as types from '../src/types';

test('construct RGB color instances', () => {
  const validColor = new types.RgbColor({ red: 0, blue: 0, green: 0 });
  expect(validColor.invalid).toBe(false);
  expect(validColor.red).toBe(0);
  expect(validColor.green).toBe(0);
  expect(validColor.blue).toBe(0);
  expect(validColor.alpha).toBe(1);

  const invalidColor = new types.RgbColor({ red: 256, blue: -1, green: 100 });
  expect(invalidColor.invalid).toBe(true);
  expect(String(invalidColor)).toBe('Invalid Color');
  expect(invalidColor.red).toBe(0);
  expect(invalidColor.green).toBe(0);
  expect(invalidColor.blue).toBe(0);
});

test('construct CMYK color instances', () => {
  const validColor = new types.CmykColor({ cyan: 0, magenta: 0, yellow: 0, key: 0 });
  expect(validColor.invalid).toBe(false);
  expect(validColor.cyan).toBe(0);
  expect(validColor.yellow).toBe(0);
  expect(validColor.magenta).toBe(0);
  expect(validColor.cyan).toBe(0);
  expect(validColor.yellow).toBe(0);
  expect(validColor.key).toBe(0);
  expect(validColor.alpha).toBe(1);

  const invalidColor = new types.CmykColor({ cyan: 100, magenta: -1, yellow: 50, key: 100});
  expect(invalidColor.invalid).toBe(true);
  expect(String(invalidColor)).toBe('Invalid Color');
  expect(invalidColor.cyan).toBe(0);
  expect(invalidColor.yellow).toBe(0);
  expect(invalidColor.magenta).toBe(0);
});

test('construct HSL color instances', () => {
  const validColor = new types.HslColor({ hue: 0, sat: 0, lum: 0, alpha: 1 });
  expect(validColor.invalid).toBe(false);
  expect(validColor.hue).toBe(0);
  expect(validColor.lum).toBe(0);
  expect(validColor.sat).toBe(0);
  expect(validColor.alpha).toBe(1);

  const invalidColor = new types.HslColor({ hue: 361, sat: -1, lum: 100 });
  expect(invalidColor.invalid).toBe(true);
  expect(String(invalidColor)).toBe('Invalid Color');
  expect(invalidColor.hue).toBe(0);
  expect(invalidColor.lum).toBe(0);
  expect(invalidColor.sat).toBe(0);
});

test('construct HSV color instances', () => {
  const validColor = new types.HsvColor({ hue: 0, sat: 0, val: 0, alpha: 1 });
  expect(validColor.invalid).toBe(false);
  expect(validColor.hue).toBe(0);
  expect(validColor.val).toBe(0);
  expect(validColor.sat).toBe(0);
  expect(validColor.alpha).toBe(1);

  const invalidColor = new types.HsvColor({ hue: 361, sat: -1, val: 101 });
  expect(invalidColor.invalid).toBe(true);
  expect(String(invalidColor)).toBe('Invalid Color');
  expect(invalidColor.hue).toBe(0);
  expect(invalidColor.val).toBe(0);
  expect(invalidColor.sat).toBe(0);
});

test('construct Hex color instances', () => {
  const validColor = new types.HexColor({ red: 'ff', green: 'ff', blue: 'ff' });
  expect(validColor.invalid).toBe(false);
  expect(validColor.red).toBe('ff');
  expect(validColor.blue).toBe('ff');
  expect(validColor.green).toBe('ff');
  expect(validColor.alpha).toBe('ff');

  const invalidColor = new types.HexColor({ red: 'zz', green: 'z1', blue: 'yx' });
  expect(invalidColor.invalid).toBe(true);
  expect(String(invalidColor)).toBe('Invalid Color');
  expect(invalidColor.red).toBe('00');
  expect(invalidColor.blue).toBe('00');
  expect(invalidColor.green).toBe('00');
});
