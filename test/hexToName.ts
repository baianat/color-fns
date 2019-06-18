import { hexToName } from '../src/hexToName';

test('Gets color name from hex value', () => {
  expect(hexToName('#ff0000')).toBe('red');
  expect(hexToName('#0000ff')).toBe('blue');
  expect(hexToName('#008000')).toBe('green');
  expect(hexToName('#ffc0cb')).toBe('pink');
  expect(hexToName('#ff69b4')).toBe('hotpink');
  expect(hexToName('#800')).toBe('darkred');
});

test('List of colors can be extended', () => {
  expect(hexToName('#af231c', { 'PANTONE 2350 C': '#af231c' })).toBe('PANTONE 2350 C');
});
