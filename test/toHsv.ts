import { toHsv } from '../src/toHsv';

test('converts any of the supported color models to HSV', () => {
  // PANTONE 7406 C
  const yellowish = {
    hue: 48,
    sat: 100,
    val: 94
  };

  expect(toHsv('rgb(241, 196, 0)')).toMatchObject(yellowish);
  expect(toHsv('hsl(48.8, 100%, 47.25%)')).toMatchObject(yellowish);
  expect(toHsv('hsv(48, 100%, 94%)')).toMatchObject(yellowish);
  expect(toHsv('#f1c400')).toMatchObject(yellowish);
  expect(toHsv('cmyk(0, 19, 100, 5)')).toMatchObject(yellowish);
  expect(toHsv('wat')).toBe(null);
});
