import { day4part2, getAnswerPart2, pairsArePartiallyOverlapping } from './day4.part2';
import { logAnswer } from '../../utils/logging';

test('section pair fully contains the other', () => {
  expect(pairsArePartiallyOverlapping('2-4,6-8')).toEqual(false);
  expect(pairsArePartiallyOverlapping('2-3,4-5')).toEqual(false);
  expect(pairsArePartiallyOverlapping('5-7,7-9')).toEqual(true);
  expect(pairsArePartiallyOverlapping('2-8,3-7')).toEqual(true);
  expect(pairsArePartiallyOverlapping('6-6,4-6')).toEqual(true);
  expect(pairsArePartiallyOverlapping('2-6,4-8')).toEqual(true);
});


test('returns same answer as example', () => {
  expect(getAnswerPart2(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`)).toEqual(4);
});

test('Returns an answer', () => {
  const answer =day4part2();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
