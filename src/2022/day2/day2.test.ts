import { day2, playRound } from './day2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(playRound('A Y')).toBe(8);
  expect(playRound('B X')).toBe(1);
  expect(playRound('C Z')).toBe(6)
});

test('full test case', () => {
  expect(playAllRounds(`A Y
B X
C Z`)).toBe(15);
});

test('Returns an answer', () => {
  const out = day2();
  logAnswer(out);
  expect(typeof out).toBe('number');
  expect(out).toBeGreaterThan(0);
});
