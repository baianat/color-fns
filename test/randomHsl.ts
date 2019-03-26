import { randomHsl } from '../src/randomHsl';

test('generates random hex', () => {
  expect(randomHsl()).toMatchObject({
    hue: expect.any(Number),
    sat: expect.any(Number),
    lum: expect.any(Number)
  });
});
