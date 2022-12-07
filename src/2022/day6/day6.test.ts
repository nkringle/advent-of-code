import { anyRepeats, day6, day6Answer } from './day6';
import { logAnswer } from '../../utils/logging';

test('four letters have a repeat', () => {
  expect(anyRepeats('bvwb')).toBe(true);
  expect(anyRepeats('vwbj')).toBe(false);
});



test('Provided test cases', () => {
  expect(day6Answer('bvwbjplbgvbhsrlpgdmjqwftvncz')).toBe(5);
  expect(day6Answer('nppdvjthqldpwncqszvftbrmjlhg')).toBe(6);
  expect(day6Answer('nznrnfrfntjfmvfwmzdfjlvtqnbhcprsg')).toBe(10);
  expect(day6Answer('zcfzfwzzqfrljwzlrfnpqdbhtmscgvjw')).toBe(11);
});


test('Returns an answer', () => {
  const answer = day6();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
