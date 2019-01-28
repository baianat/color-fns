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
  expect(invalidColor.red).toBe(undefined);
  expect(invalidColor.green).toBe(undefined);
  expect(invalidColor.blue).toBe(undefined);
});

test('construct HSL color instances', () => {
  const validColor = new types.HslColor({ hue: 0, sat: 0, lum: 0, alpha: 0 });
  expect(validColor.invalid).toBe(false);
  expect(validColor.hue).toBe(0);
  expect(validColor.lum).toBe(0);
  expect(validColor.sat).toBe(0);
  expect(validColor.alpha).toBe(0);

  const invalidColor = new types.HslColor({ hue: 361, sat: -1, lum: 100 });
  expect(invalidColor.invalid).toBe(true);
  expect(String(invalidColor)).toBe('Invalid Color');
  expect(invalidColor.hue).toBe(undefined);
  expect(invalidColor.lum).toBe(undefined);
  expect(invalidColor.sat).toBe(undefined);
});

test('construct HSV color instances', () => {
  const validColor = new types.HsvColor({ hue: 0, sat: 0, val: 0, alpha: 0 });
  expect(validColor.invalid).toBe(false);
  expect(validColor.hue).toBe(0);
  expect(validColor.val).toBe(0);
  expect(validColor.sat).toBe(0);
  expect(validColor.alpha).toBe(0);

  const invalidColor = new types.HsvColor({ hue: 361, sat: -1, val: 101 });
  expect(invalidColor.invalid).toBe(true);
  expect(String(invalidColor)).toBe('Invalid Color');
  expect(invalidColor.hue).toBe(undefined);
  expect(invalidColor.val).toBe(undefined);
  expect(invalidColor.sat).toBe(undefined);
});

test('construct Hex color instances', () => {
  const validColor = new types.HexColor({ red: 'ff', green: 'ff', blue: 'ff' });
  expect(validColor.invalid).toBe(false);
  expect(validColor.red).toBe('ff');
  expect(validColor.blue).toBe('ff');
  expect(validColor.green).toBe('ff');
  expect(validColor.alpha).toBe('ff');
  
  const invalidColor = new types.HexColor({ red: 0, green: 'z1', blue: 0 });
  expect(invalidColor.invalid).toBe(true);
  expect(String(invalidColor)).toBe('Invalid Color');
  expect(invalidColor.red).toBe(undefined);
  expect(invalidColor.blue).toBe(undefined);
  expect(invalidColor.green).toBe(undefined);
});
