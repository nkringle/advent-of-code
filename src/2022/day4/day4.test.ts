import { day4 } from './day4';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day4()).toBe(4);
});

test('Returns an answer', () => {
  const answer = day4();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
