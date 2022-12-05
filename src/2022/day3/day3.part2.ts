import { sumValuesInArray } from "../../utils/arrays";
import { assignPriority } from "./day3";
import { input } from "./day3.data";



export function breakIntoGroups(backpacks: string): string[][] {
  const individuals = backpacks.split(`\n`)
  const groups = individuals.reduce((result : string[][], item, index) => {
    const chunk = Math.floor(index/3);

    if (!result[chunk]) {
      result[chunk] = [];
    }

    result[chunk].push(item);

    return result;
  }, []);
  return groups;
}


export function findSimilarItems(backpackGroup: string[]): string {

  const backpack1 = Array.from(backpackGroup[0]).sort();
  const backpack2 = Array.from(backpackGroup[1]).sort();
  const backpack3 = Array.from(backpackGroup[2]).sort();

  const sharedItemsBtwn1And2: string[] = [];
  const similarItem: string[] = [];

  backpack1.forEach(item => {
    if (backpack2.includes(item)) {
      sharedItemsBtwn1And2.push(item);
    }
  });

  sharedItemsBtwn1And2.forEach((item) => {
    if (backpack3.includes(item)) {
      similarItem.push(item);
    }
  })

  return similarItem[0];

}
export function scoreGroups(rawInput: string): number {
  return sumValuesInArray(breakIntoGroups(rawInput)
  .map((group) => findSimilarItems(group))
  .map((groupItem) => assignPriority(groupItem)));
}



export const day3part2 = () => {
  return scoreGroups(input);
};



