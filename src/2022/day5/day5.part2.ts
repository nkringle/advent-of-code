import { parseCrates, parseMoves } from "./day5";
import { input } from "./day5.data";

export function calcAnswer(inp: string): string {
  const crates: string[][] = parseCrates(inp);
  const moves: object[] = parseMoves(inp);
  
  moves.forEach(move => {
    const thisMove = crates[move.from - 1].slice( crates[move.from - 1].length - move.qty);

    crates[move.to - 1 ].push(...thisMove);

    for (let i = 0; i < move.qty; i++) {
      crates[move.from - 1].pop();
    }

  });  
  
  return crates.map(column => {
    return String(column.pop());
  }).reduce((prev, cur) => prev?.concat(cur), ""); 
}


export const day5part2 = () => {
  return calcAnswer(input);
};
