import { day4, getAnswer, pairsAreFullyOverlapping, sectionAssignment } from './day4';
import { logAnswer } from '../../utils/logging';


test('section assignment deciphering', () => {
  expect(sectionAssignment('2-4')).toIncludeSameMembers([2,3,4]);
  expect(sectionAssignment('6-8')).toIncludeSameMembers([6,7,8]);
  expect(sectionAssignment('2-3')).toIncludeSameMembers([2,3]);
  expect(sectionAssignment('4-5')).toIncludeSameMembers([4,5]);
  expect(sectionAssignment('8-10')).toIncludeSameMembers([8,9,10]);
  expect(sectionAssignment('6-6')).toIncludeSameMembers([6]);
});


test('section pair fully contains the other', () => {
  expect(pairsAreFullyOverlapping('2-4,6-8')).toEqual(false);
  expect(pairsAreFullyOverlapping('2-3,4-5')).toEqual(false);
  expect(pairsAreFullyOverlapping('5-7,7-9')).toEqual(false);
  expect(pairsAreFullyOverlapping('2-8,3-7')).toEqual(true);
  expect(pairsAreFullyOverlapping('6-6,4-6')).toEqual(true);
  expect(pairsAreFullyOverlapping('2-6,4-8')).toEqual(false);
});


test('returns same answer as example', () => {
  expect(getAnswer(`2-4,6-8
2-3,4-5
5-7,7-9
2-8,3-7
6-6,4-6
2-6,4-8`)).toEqual(2);
});

test('Returns an answer', () => {
  const answer = day4();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});


