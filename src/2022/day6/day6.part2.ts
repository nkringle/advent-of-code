import { anyRepeats } from "./day6";
import { input } from "./day6.data";

export function day6AnswerPart2(str: string): number {
  let firstSpotWithoutDuplicates = 0;

  for (let i = 0; i < str.length; i++) {
    if(!anyRepeats(str.substring(i, i+14))) {
      firstSpotWithoutDuplicates = i + 14;
      break;
    }
  }

  return firstSpotWithoutDuplicates;
}

export const day6part2 = () => {
  return day6AnswerPart2(input);
};
