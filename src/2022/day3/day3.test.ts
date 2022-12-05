import { assignPriority, backpackSharedItems, day3, scoreWholeBunch, singleBackpackSides } from './day3';
import { logAnswer } from '../../utils/logging';

test('Provided test cases - split', () => {
  const backpack1Sides = singleBackpackSides('vJrwpWtwJgWrhcsFMMfFFhFp');

  expect(backpack1Sides.length).toBe(2)
  expect(backpack1Sides[0]).toBe('vJrwpWtwJgWr')
  expect(backpack1Sides[1]).toBe('hcsFMMfFFhFp')

  const backpack2Sides = singleBackpackSides('jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL');

  expect(backpack2Sides.length).toBe(2)
  expect(backpack2Sides[0]).toBe('jqHRNqRjqzjGDLGL')
  expect(backpack2Sides[1]).toBe('rsFMfFZSrLrFZsSL')

  const backpack3Sides = singleBackpackSides('PmmdzqPrVvPwwTWBwg');

  expect(backpack3Sides.length).toBe(2)
  expect(backpack3Sides[0]).toBe('PmmdzqPrV')
  expect(backpack3Sides[1]).toBe('vPwwTWBwg')
  
});


test('same letter in both sides', () => {
  expect(backpackSharedItems('vJrwpWtwJgWrhcsFMMfFFhFp')[0]).toBe('p');
  expect(backpackSharedItems('vJrwpWtwJgWrhcsFMMfFFhFp').length).toBe(1);
  expect(backpackSharedItems('jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL')[0]).toBe('L');
  expect(backpackSharedItems('PmmdzqPrVvPwwTWBwg')[0]).toBe('P');
  expect(backpackSharedItems('wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn')[0]).toBe('v');
  expect(backpackSharedItems('ttgJtRGJQctTZtZT')[0]).toBe('t');
  expect(backpackSharedItems('CrZsJsPPZsGzwwsLwLmpwMDw')[0]).toBe('s');
});


test('score letters', () => {
  expect(assignPriority('p')).toBe(16);
  expect(assignPriority('L')).toBe(38);
  expect(assignPriority('P')).toBe(42);
  expect(assignPriority('v')).toBe(22);
  expect(assignPriority('t')).toBe(20);
  expect(assignPriority('s')).toBe(19);

});

test('total Score', () => {
  expect(scoreWholeBunch(`vJrwpWtwJgWrhcsFMMfFFhFp
jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL
PmmdzqPrVvPwwTWBwg
wMqvLMZHhHMvwLHjbvcjnnSBnvTQFn
ttgJtRGJQctTZtZT
CrZsJsPPZsGzwwsLwLmpwMDw`)).toBe(157);


});

test('Returns an answer', () => {
  const day3answer = day3();

  logAnswer(day3answer);
  expect(typeof day3answer).toBe('number');
  expect(day3answer).toBeGreaterThan(0);
});
