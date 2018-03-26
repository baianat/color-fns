import rgbToHex from '../src/rgbToHex';

test('converts rgb color objects to hex objects', () => {
  const rgb = {
    red: 13,
    green: 200,
    blue: 230,
    alpha: 0.5
  };

  expect(rgbToHex(rgb)).toMatchObject({
    invalid: false,
    red: '0d',
    green: 'c8',
    blue: 'e6',
    alpha: '7f',
    model: 'hex'
  });
});
