import { day5part2 } from './day5.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day5part2()).toBe(5);
});

test('Returns an answer', () => {
  const answer =day5part2();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
