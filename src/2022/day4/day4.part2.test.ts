import { day4part2 } from './day4.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day4part2()).toBe(4);
});

test('Returns an answer', () => {
  const answer =day4part2();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
