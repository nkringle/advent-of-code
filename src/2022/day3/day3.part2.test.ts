import { day3part2 } from './day3.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day3part2()).toBe(3);
});

test('Returns an answer', () => {
  logAnswer(day3part2());
  expect(typeof day3part2()).toBe('number');
  expect(day3part2()).toBeGreaterThan(0);
});
import { day3part2 } from './day3.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day3part2()).toBe(3);
});

test('Returns an answer', () => {
  logAnswer(day3part2());
  expect(typeof day3part2()).toBe('number');
  expect(day3part2()).toBeGreaterThan(0);
});
