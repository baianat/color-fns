import { expandHexShorthand } from '../src/expandHexShorthand';

test('expands hex shorthands', () => {
  expect(expandHexShorthand('#fff')).toBe('#ffffff');
  expect(expandHexShorthand('#000')).toBe('#000000');
  expect(expandHexShorthand('#fff0')).toBe('#ffffff00'); // alpha

  // invalid shorthands would remain unchanged.
  expect(expandHexShorthand('#ffzz')).toBe('#ffzz');
});
