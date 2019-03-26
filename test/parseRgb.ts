import { parseRgb } from '../src/parseRgb';

test('parses RGB strings', () => {
  const parsed = parseRgb('rgb(31, 234, 12)');

  expect(parsed).toMatchObject({
    red: 31,
    green: 234,
    blue: 12
  });

  expect(parseRgb('welp')).toBeNull();
  expect(parseRgb(null)).toBeNull();
});
