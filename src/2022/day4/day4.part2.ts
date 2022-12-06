import { sectionAssignment } from "./day4";
import { input } from "./day4.data";


export function pairsArePartiallyOverlapping(pair: string): boolean {
  const persons = pair.split(',');
  const person1Assignment = sectionAssignment(persons[0]);
  const person2Assignment = sectionAssignment(persons[1]);

  return person1Assignment.some(v => person2Assignment.includes(v));
}


export function getAnswerPart2(inp: string): number {
  return inp.split('\n')
    .map((pair) => pairsArePartiallyOverlapping(pair))
    .reduce((prev: number, cur: boolean) => {
      if (cur) {
        return prev + 1;
      }
      return prev;
    }, 0);
}

export const day4part2 = () => {
  return getAnswerPart2(input);
};
