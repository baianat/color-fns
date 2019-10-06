import { toRgb } from '../src/toRgb';

test('converts any of the supported color models to RGB', () => {
  const blueish = {
    red: 33,
    green: 89,
    blue: 152
  };

  expect(toRgb('rgb(33, 89, 152)')).toMatchObject(blueish);
  expect(toRgb('hsl(211.8, 64.32%, 36.27%)')).toMatchObject({
    red: 32,
    green: 88,
    blue: 151
  });
  expect(toRgb('hsv(211.8, 78.29%, 59.61%)')).toMatchObject({
    ...blueish,
    green: 88
  });
  expect(toRgb('#215998')).toMatchObject(blueish);
  expect(toRgb('cmyk(78, 41, 0, 40)')).toMatchObject({
    ...blueish,
    blue: 153,
    green: 90
  });
  expect(toRgb('wat')).toBe(null);
});
