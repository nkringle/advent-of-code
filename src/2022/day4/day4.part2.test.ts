import { day4part2 } from './day4.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day4part2()).toBe(4);
});

test('Returns an answer', () => {
  logAnswer(day4part2());
  expect(typeof day4part2()).toBe('number');
  expect(day4part2()).toBeGreaterThan(0);
});
