import { calcAnswer, day5part2 } from './day5.part2';
import { logAnswer } from '../../utils/logging';

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
  

  expect(answer).toEqual('MCD')
});

test('Returns an answer', () => {
  const answer = day5part2();
  logAnswer(answer);
  expect(typeof answer).toBe('string');
  expect(answer.length).toBeGreaterThan(0);
});
