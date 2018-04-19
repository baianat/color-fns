import alpha from '../src/alpha';

const hex = {
  red: 'a1',
  green: '16',
  blue: '12',
  model: 'hex'
};

const hsl = {
  hue: 200,
  sat: 100,
  lum: 50,
  model: 'hsl'
};

const rgb = {
  red: 13,
  green: 200,
  blue: 230,
  model: 'rgb'
};

test('adds alpha value to color object', () => {
  expect(alpha(hex, 0.5)).toHaveProperty('alpha', '7f');
  expect(alpha(hsl, 0.5)).toHaveProperty('alpha', 0.5);
  expect(alpha(rgb, 0.6)).toHaveProperty('alpha', 0.6);
  expect(alpha(hex, 1.1)).toMatch(/Invalid alpha/);
  expect(alpha(rgb, -1)).toMatch(/Invalid alpha/);
  expect(alpha(rgb, 'foo')).toMatch(/Invalid alpha/);
  expect(alpha('bar', 1)).toMatch(/Invalid color/);
});
