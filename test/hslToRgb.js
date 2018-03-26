import hslToRgb from '../src/hslToRgb';

test('converts hsl color objects to rgb objects', () => {
  const hsl = {
    hue: 2,
    sat: 80,
    lum: 35,
    alpha: 1
  };

  expect(hslToRgb(hsl)).toMatchObject({
    invalid: false,
    red: 160,
    green: 22,
    blue: 17,
    alpha: 1,
    model: 'rgb'
  });
});
