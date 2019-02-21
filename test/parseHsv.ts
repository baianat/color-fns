import { parseHsv } from '../src/parseHsv';

test('parses Hsv strings', () => {
  const parsed = parseHsv('hsv(31, 30%, 14%)');

  expect(parsed).toMatchObject({
    hue: 31,
    sat: 30,
    val: 14
  });

  expect(parseHsv('welp')).toBeNull();
});
