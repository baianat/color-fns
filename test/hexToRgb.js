import hexToRgb from '../src/hexToRgb';

test('converts hex color objects to rgb objects', () => {
  const hex = {
    red: 'a1',
    green: '16',
    blue: '12'
  };

  expect(hexToRgb(hex)).toEqual({
    red: 161,
    green: 22,
    blue: 18
  });
});
