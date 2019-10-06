import { CSS_COLORS } from '../src/data';
import { hexToName } from '../src/hexToName';

test('Gets color name from hex value', () => {
  expect(hexToName('#ff0000', CSS_COLORS)).toBe('red');
  expect(hexToName('#0000ff', CSS_COLORS)).toBe('blue');
  expect(hexToName('#008000', CSS_COLORS)).toBe('green');
  expect(hexToName('#ffc0cb', CSS_COLORS)).toBe('pink');
  expect(hexToName('#ff69b4', CSS_COLORS)).toBe('hotpink');
  expect(hexToName('#800', CSS_COLORS)).toBe('darkred');
});
