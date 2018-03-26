import hexToHsl from '../src/hexToHsl';

test('converts hex color objects to hsl objects', () => {
  const hex = {
    red: 'a1',
    green: '16',
    blue: '12',
    alpha: '7f'
  };

  // hue should be 2 not 1
  expect(hexToHsl(hex)).toMatchObject({
    invalid: false,
    hue: 1,
    sat: 79,
    lum: 35,
    alpha: 0.5,
    model: 'hsl'
  });
});
