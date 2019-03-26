import { toHsl } from '../src/toHsl';

test('converts any of the supported color models to HSL', () => {
  // PANTONE 7406 C
  const yellowish = {
    hue: 48,
    sat: 100,
    lum: 47
  };

  expect(toHsl('rgb(241, 196, 0)')).toMatchObject(yellowish);
  expect(toHsl('hsl(48, 100%, 47%)')).toMatchObject(yellowish);
  expect(toHsl('hsv(48.8, 100%, 94.51%)')).toMatchObject(yellowish);
  expect(toHsl('#f1c400')).toMatchObject(yellowish);
  expect(toHsl('cmyk(0, 19, 100, 5)')).toMatchObject(yellowish);
  expect(toHsl('wat')).toBe(null);
});
