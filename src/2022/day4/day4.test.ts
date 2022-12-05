import { day4 } from './day4';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day4()).toBe(4);
});

test('Returns an answer', () => {
  logAnswer(day4());
  expect(typeof day4()).toBe('number');
  expect(day4()).toBeGreaterThan(0);
});
