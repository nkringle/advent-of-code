#!/bin/bash

if [ -z $1 ]; then
  echo "You must provide a day"
  exit 1
fi

if [ -z $2 ]; then
  echo "No year provided, defualting to current year"
  YEAR=`date +%Y`
else
  YEAR=`$2`
fi

echo "export const day$1part2 = () => {
  return $1;
};" >> src/$YEAR/day$1/day$1.part2.ts

echo "import { day$1part2 } from './day$1.part2';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day$1part2()).toBe($1);
});

test('Returns an answer', () => {
  logAnswer(day$1part2());
  expect(typeof day$1part2()).toBe('number');
  expect(day$1part2()).toBeGreaterThan(0);
});" >> src/$YEAR/day$1/day$1.part2.test.ts
