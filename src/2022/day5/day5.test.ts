import { day5 } from './day5';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day5()).toBe(5);
});

test('Returns an answer', () => {
  const answer = day5();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
