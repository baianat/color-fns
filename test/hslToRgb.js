import hslToRgb from '../src/hslToRgb';

test('converts hsl color objects to rgb objects', () => {
  const hsl = {
    hue: 2,
    sat: 80,
    lum: 35
  };

  expect(hslToRgb(hsl)).toMatchObject({
    invalid: false,
    red: 161,
    green: 22,
    blue: 18
  });
});
