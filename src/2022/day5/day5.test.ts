import { calcAnswer, day5, parseCrates } from './day5';
import { logAnswer } from '../../utils/logging';

test('Parse Crates', () => {
  const crates = parseCrates(`    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 `);

  expect(crates.length).toBe(3); // columns
  expect(crates[0]).toIncludeSameMembers(['N', 'Z']);
  expect(crates[1]).toIncludeSameMembers(['D', 'C', 'M']);
  expect(crates[2]).toIncludeSameMembers(['P']);


});


test('given full test cases', () => {
  expect(calcAnswer(``)).toEqual(3);
});


test('Returns an answer', () => {
  const answer = day5();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
