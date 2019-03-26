import { toCmyk } from '../src/toCmyk';

test('converts any of the supported color models to cmyk', () => {
  const purplish = {
    cyan: 0,
    magenta: 58,
    yellow: 15,
    key: 40,
    alpha: 1
  };

  expect(toCmyk('rgb(152, 63, 128)')).toMatchObject(purplish);
  expect(toCmyk('hsl(316, 41%, 42%)')).toMatchObject(purplish);
  expect(toCmyk('hsv(315, 58%, 60%)')).toMatchObject(purplish);
  expect(toCmyk('#983F80')).toMatchObject(purplish);
  expect(toCmyk('cmyk(0, 58, 15, 40)')).toMatchObject(purplish);
  expect(toCmyk('wat')).toBe(null);
});
