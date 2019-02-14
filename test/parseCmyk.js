import { parseCmyk } from '@/parseCmyk';

test('parses CMYK strings', () => {
  const parsed = parseCmyk('cmyk(31, 20, 12, 19)');

  expect(parsed).toMatchObject({
    invalid: false,
    cyan: 31,
    magenta: 20,
    yellow: 12,
    key: 19
  });

  expect(parseCmyk('welp')).toMatchObject({
    invalid: true
  });
});
