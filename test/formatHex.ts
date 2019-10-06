import { formatHex } from '../src/formatHex';

test('formats HEX colors to readable strings', () => {
  expect(formatHex(null)).toBe('Invalid Color');
  expect(
    formatHex({
      red: 'ff',
      green: 'ff',
      blue: '00'
    })
  ).toBe('#ffff00');

  expect(
    formatHex({
      red: 'ff',
      green: 'ff',
      blue: '00',
      alpha: '00'
    })
  ).toBe('#ffff0000');
});
