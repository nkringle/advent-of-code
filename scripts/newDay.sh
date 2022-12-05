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

mkdir src/$YEAR/day$1

if [ $? -ne 0 ] ; then
  echo "Day already exists!"
  exit
fi

echo "export const day$1 = () => {
  return $1;
};" >> src/$YEAR/day$1/day$1.ts

echo "import { day$1 } from './day$1';
import { logAnswer } from '../../utils/logging';

test('Provided test cases', () => {
  expect(day$1()).toBe($1);
});

test('Returns an answer', () => {
  const answer = day$1();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});" >> src/$YEAR/day$1/day$1.test.ts

echo "import { parseInput } from '../../utils/input';

const input = '';

export const data = parseInput(input);" >> src/$YEAR/day$1/day$1.data.ts
exit
