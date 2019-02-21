import { randomHex } from '../src/randomHex';

test('generates random hex', () => {
  expect(randomHex()).toMatchObject({
    red: expect.stringMatching(/[0-9A-F]{2}/i),
    green: expect.stringMatching(/[0-9A-F]{2}/i),
    blue: expect.stringMatching(/[0-9A-F]{2}/i)
  });
});
