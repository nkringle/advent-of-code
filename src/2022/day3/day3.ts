


// first half always first component, second half always second
// case sensitive

import { sumValuesInArray } from "../../utils/arrays";
import { input } from "./day3.data";

export function singleBackpackSides(singleBackpack: string): string[] {
  const midpoint = Math.round(singleBackpack.length / 2);
  
  return [ singleBackpack.slice(0, midpoint), singleBackpack.slice(midpoint, singleBackpack.length)];
}

export function backpackSharedItems(singleBackpack: string): string[] {
  const sides = singleBackpackSides(singleBackpack);
  const side1 = Array.from(sides[0]).sort();
  const side2 = Array.from(sides[1]).sort();

  const sharedItems: string[] = [];

  side1.forEach(item => {
    if (side2.includes(item)) {
      sharedItems.push(item);
    }
  });


  return [... new Set(sharedItems)];

}





export function assignPriority(item: string): number {
  const alphaUpper = Array.from(Array(26)).map((e, i) => i + 65);
  const alphaLower = Array.from(Array(26)).map((e, i) => i + 97);
  const alphabet = alphaLower.concat(alphaUpper).map((x)=> String.fromCharCode(x));

  let score = 0;

  alphabet.forEach((thisLetter, index) => {
    if (thisLetter === item) {
      score = index + 1;
    }
  });

  return score;
}


export function scoreWholeBunch(backpacks: string): number {
  const backpackArr = backpacks.split('\n');
  const individualScores = backpackArr
    .map((bp) => bp.trim())  
    .map((bp) => backpackSharedItems(bp))
    .map((si) => {
      return si.map((it) => assignPriority(it));
    })
    .map((score) => {
      return sumValuesInArray(score);
    });

  return sumValuesInArray(individualScores);
}


export const day3 = () => {
  return scoreWholeBunch(input);
};
