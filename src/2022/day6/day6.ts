import { input } from "./day6.data";


export function anyRepeats(str: string): boolean {
    const chars = str.split('');
    const carsSet = new Set(chars);
    return chars.length > carsSet.size;
}

export function day6Answer(str: string): number {
  let firstSpotWithoutDuplicates = 0;

  for (let i = 0; i < str.length; i++) {
    if(!anyRepeats(str.substring(i, i+4))) {
      firstSpotWithoutDuplicates = i + 4;
      break;
    }
  }

  return firstSpotWithoutDuplicates;
}


export const day6 = () => {
  return day6Answer(input);
};
