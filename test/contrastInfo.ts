import { contrastInfo } from '../src/contrastInfo';
import { parseRgb } from '../src/parseRgb';

test('it provides WCAG contrast info between two HSL colors', () => {
  const c1 = parseRgb(`rgb(20, 210, 255)`);
  const c2 = parseRgb('rgb(97, 26, 149)');

  expect(
    contrastInfo(c1, c2)
  ).toMatchObject({
    ratio: 5.59,
    isAA: true,
    isAALarge: true,
    isAAA: false,
    isAAALarge: true,
    isUIAA: true
  });
});
