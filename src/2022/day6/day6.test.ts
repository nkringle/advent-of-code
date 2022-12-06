import { day6 } from './day6';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day6()).toBe(6);
});

test('Returns an answer', () => {
  const answer = day6();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
