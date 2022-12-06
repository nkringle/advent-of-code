import { day6part2 } from './day6.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day6part2()).toBe(6);
});

test('Returns an answer', () => {
  const answer =day6part2();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
