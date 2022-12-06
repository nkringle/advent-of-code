import { createScanner } from "typescript";
import { input } from "./day5.data";


export function parseCrates(inp: string): string[][] {
  const crateJunk = /\[*\]*/g;
  const lines = inp.split('\n');
  const columnsRow = lines
    .map((line) => line.trim())
    .filter((line) => line.startsWith('1'))[0];
  const columns = Number(columnsRow.split('   ').pop());
  const crateArrangement: string[][] = [];
  const crates = lines
  .filter((line) => !line.startsWith('move') && !line.startsWith(' 1') && line !== '')
  .map((line) => {
    const crateLine = [];
    const split = 4;
    
    for(let i = 0; i < line.length; i += split) {
      crateLine.push(line.substring(i, i + split));
    }

    return crateLine;
  })
  .map((line) => line.map((crate) => crate.trim()))
  .map((line) => line.map((crate) => crate.replace(crateJunk, '')));

  crates.reverse().forEach((value, level) => {
    value
      .forEach((crate, column) => {
        if (crate.length > 0) {
          if (crateArrangement[column] !== undefined){
            crateArrangement[column].push(crate);
          }
          else {
            crateArrangement[column] = [crate];
          }
        }
      });
  });

  // todo need to get creates and put in list

  return crateArrangement;
}

export function parseMoves(inp: string): object[] {
  const instructions = inp.split('\n').filter((line) => line.startsWith('move'));

  const output = instructions.map(instruction => {
    const matchingRegex = /^move (\d+) from (\d+) to (\d+)/
    
    const outputMatches = instruction.match(matchingRegex);
    const qty = Number(outputMatches[1]);
    const from = Number(outputMatches[2]);
    const to = Number(outputMatches[3]);


    return {
      qty,
      from,
      to
    }
  });

  return output;
}


export function calcAnswer(inp: string): string {
  const crates: string[][] = parseCrates(inp);
  const moves: object[] = parseMoves(inp);
  
  moves.forEach(move => {
    for (let i = 0; i < move.qty; i++) {
      const thisMove = String(crates[move.from - 1].pop());
      crates[move.to - 1].push(thisMove);
    }
  })  
  
  return crates.map(column => {
    return String(column.pop());
  })
  .reduce((prev, cur) => prev?.concat(cur), ""); 
}


export const day5 = () => {
  return calcAnswer(input);
};
