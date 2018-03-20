import hexToHsl from '../src/hexToHsl';

test('converts hex color objects to hsl objects', () => {
  const hex = {
    red: 'a1',
    green: '16',
    blue: '12'
  };

  // hue should be 2 not 1
  expect(hexToHsl(hex)).toEqual({
    hue: 2,
    sat: 79,
    lum: 35
  });
});
