import hslToHex from '../src/hslToHex';

test('converts hsl color objects to hex objects', () => {
  const hsl = {
    hue: 200,
    sat: 100,
    lum: 50
  };

  expect(hslToHex(hsl)).toMatchObject({
    invalid: false,
    red: '00',
    green: 'a9',
    blue: 'ff',
    alpha: 'ff',
    model: 'hex'
  });
});
