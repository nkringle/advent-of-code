import { day2part2, playAllRounds, playRound } from './day2.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(playRound('A Y')).toBe(4);
  expect(playRound('B X')).toBe(1);
  expect(playRound('C Z')).toBe(7)
});

test('full test case', () => {
  expect(playAllRounds(`A Y
B X
C Z`)).toBe(12);
});

test('Returns an answer', () => {
  const out = day2part2();
  
  logAnswer(out);
  expect(typeof out).toBe('number');
  expect(out).toBeGreaterThan(0);
});
