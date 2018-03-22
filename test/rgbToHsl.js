import rgbToHsl from '../src/rgbToHsl';

test('converts rgb color objects to hsl objects', () => {
  const rgb = {
    red: 13,
    green: 200,
    blue: 230
  };

  expect(rgbToHsl(rgb)).toMatch({
    invalid: false,
    hue: 188,
    sat: 89, // should be 89.3
    lum: 47 // should be 47.6
  });
});
