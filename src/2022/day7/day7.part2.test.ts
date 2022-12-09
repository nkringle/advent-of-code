import { day7part2 } from './day7.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day7part2()).toBe(7);
});

test('Returns an answer', () => {
  const answer =day7part2();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
