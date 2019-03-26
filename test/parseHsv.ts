import { parseHsv } from '../src/parseHsv';

test('parses Hsv strings', () => {
  const parsed = parseHsv('hsv(31.2, 30.2%, 14.15%)');

  expect(parsed).toMatchObject({
    hue: 31.2,
    sat: 30.2,
    val: 14.15
  });

  expect(parseHsv('welp')).toBeNull();
  // Decimals can be disabled.
  const hsv = parseHsv('hsv(31.2, 30.2%, 14.15%)', { allowDecimal: false });
  expect(hsv).toBe(null);
  expect(parseHsv(null)).toBe(null);
});
