import rgbToHex from '../src/rgbToHex';

test('converts rgb color objects to hex objects', () => {
  const rgb = {
    red: 13,
    green: 200,
    blue: 230
  };

  expect(rgbToHex(rgb)).toEqual({
    hex: '#0dc8e6',
    red: '0d',
    green: 'c8',
    blue: 'e6'
  });
});
