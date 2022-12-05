import { day5part2 } from './day5.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day5part2()).toBe(5);
});

test('Returns an answer', () => {
  logAnswer(day5part2());
  expect(typeof day5part2()).toBe('number');
  expect(day5part2()).toBeGreaterThan(0);
});
