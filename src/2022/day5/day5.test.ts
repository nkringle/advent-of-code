import { day5 } from './day5';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day5()).toBe(5);
});

test('Returns an answer', () => {
  logAnswer(day5());
  expect(typeof day5()).toBe('number');
  expect(day5()).toBeGreaterThan(0);
});
