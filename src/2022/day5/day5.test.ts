import { calcAnswer, day5, parseCrates, parseMoves } from './day5';
import { logAnswer } from '../../utils/logging';

test('Parse Crates', () => {
  const crates = parseCrates(`
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`);
  

  expect(crates.length).toBe(3); // columns
  expect(crates[0]).toIncludeSameMembers(['Z', 'N']);
  expect(crates[1]).toIncludeSameMembers(['M', 'C', 'D']);
  expect(crates[2]).toIncludeSameMembers(['P']);
});


test('Parse moves', () => {
  const moves = parseMoves(`
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`);
  

  expect(moves.length).toBe(4); // columns
  expect(moves[0]).toEqual({
    qty: 1,
    from: 2,
    to: 1
  });
  expect(moves[1]).toEqual({
    qty: 3,
    from: 1,
    to: 3
  });
  expect(moves[2]).toEqual({
    qty: 2,
    from: 2,
    to: 1
  });
  expect(moves[3]).toEqual({
    qty: 1,
    from: 1,
    to: 2
  });
});


test('run test case', () => {
  const answer = calcAnswer(`
    [D]    
[N] [C]    
[Z] [M] [P]
 1   2   3 

move 1 from 2 to 1
move 3 from 1 to 3
move 2 from 2 to 1
move 1 from 1 to 2`);
  

  expect(answer).toEqual('CMZ')
});


test('Returns an answer', () => {
  const answer = day5();
  logAnswer(answer);
  expect(typeof answer).toBe('string');
  expect(answer.length).toBeGreaterThan(0);
});
