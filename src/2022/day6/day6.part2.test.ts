import { day6AnswerPart2, day6part2 } from './day6.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day6AnswerPart2('mjqjpqmgbljsphdztnvjfqwrcgsmlb')).toBe(19);
  expect(day6AnswerPart2('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(23);
  expect(day6AnswerPart2('nppdvjthqldpwncqszvftbrmjlhg')).toBe(23);
  expect(day6AnswerPart2('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(29);
  expect(day6AnswerPart2('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(26);
});

test('Returns an answer', () => {
  const answer =day6part2();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
