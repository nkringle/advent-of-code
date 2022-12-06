import { input } from "./day4.data";


export function sectionAssignment(assignment: string): number[] {
  const output = [];

  const range = assignment.split('-');
  const lower = Number(range[0]);
  const upper = Number(range[1]);

  for (let i = lower; i <= upper; i++) {
    output.push(i);
  }

  return output;
}


const checker = (arr1: number[], arr2: number[]) => arr2.every(v => arr1.includes(v));

export function pairsAreFullyOverlapping(pair: string): boolean {
  const persons = pair.split(',');
  const person1Assignment = sectionAssignment(persons[0]);
  const person2Assignment = sectionAssignment(persons[1]);

  return checker(person1Assignment, person2Assignment) || checker(person2Assignment, person1Assignment);
}

export function getAnswer(input: string): number {
  return input.split('\n')
    .map((pair) => pairsAreFullyOverlapping(pair))
    .reduce((prev: number, cur: boolean) => {
      if (cur) {
        return prev + 1;
      }
      return prev;
    }, 0);
}

export const day4 = () => {
  return getAnswer(input);
};
