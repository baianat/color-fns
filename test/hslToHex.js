import hslToHex from '../src/hslToHex';

test('converts hsl color objects to hex objects', () => {
  const hsl = {
    hue: 2,
    sat: 80,
    lum: 35
  };

  expect(hslToHex(hsl)).toMatchObject({
    invalid: false,
    hex: '#a11612',
    red: 'a1',
    green: '16',
    blue: '12'
  });
});
