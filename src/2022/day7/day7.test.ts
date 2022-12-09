import { day7 } from './day7';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day7()).toBe(7);
});

test('Returns an answer', () => {
  const answer = day7();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
