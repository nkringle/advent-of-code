import { logAnswer } from '../../utils/logging';
import { calculateFuelForMass, day1 } from './day1';
import { input } from './day1.data';

test('Provided test cases', () => {
  expect(calculateFuelForMass(12)).toBe(2);
  expect(calculateFuelForMass(14)).toBe(2);
  expect(calculateFuelForMass(1969)).toBe(654);
  expect(calculateFuelForMass(100756)).toBe(33583);
});

test('Returns an answer', () => {
  logAnswer(day1(input));
  expect(typeof day1(input)).toBe('number');
  expect(day1(input)).toBeGreaterThan(0);
});
