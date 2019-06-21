import { formatCmyk } from '../src/formatCmyk';

test('formats CMYK colors to readable strings', () => {
  expect(formatCmyk(null)).toBe('Invalid Color');
  expect(
    formatCmyk({
      cyan: 1,
      magenta: 20,
      yellow: 5,
      key: 10
    })
  ).toBe('cmyk(1,20,5,10)');

  expect(
    formatCmyk({
      cyan: 1,
      magenta: 20,
      yellow: 5,
      key: 10,
      alpha: 0.7
    })
  ).toBe('cmyka(1,20,5,10,0.7)');
});
