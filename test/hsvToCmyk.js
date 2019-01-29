import hsvToCmyk from '../src/hsvToCmyk';
import { HsvColor } from '../src/types';

const hsv = new HsvColor({
  hue:45,
  sat:68,
  val:23
});

const cmyk = {
  invalid: false,
  cyan: 0, 
  magenta: 17, 
  yellow: 68, 
  key: 77, 
  alpha: 1,
  model: 'cmyk'
}

test('converts hsv color to cmyk color', () => {
  expect(hsvToCmyk(hsv)).toMatchObject(cmyk);
  expect(hsvToCmyk(hsv.toString())).toMatchObject(cmyk);
  expect(hsvToCmyk()).toHaveProperty('invalid', true);
});
