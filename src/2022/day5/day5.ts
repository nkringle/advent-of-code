import { input } from "./day5.data";


export function parseCrates(inp: string): string[][] {
  const crateJunk = /\[*\]*/g;
  const lines = inp.split('\n');
  const columnsRow = lines
    .map((line) => line.trim())
    .filter((line) => line.startsWith('1'))[0];
  const columns = Number(columnsRow.split('   ').pop());
  const crateArrangement: string[][] = Array(columns).fill([]);
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
          console.log(JSON.stringify(
            level,
            column,
            crate
          ));
          crateArrangement[column].push(crate);
        }
      });
  });

  // todo need to get creates and put in list

  return crateArrangement;
}

export function parseMoves(inp: string): string[] {
  const instructions = inp.split('\n').filter((line) => line.startsWith('move'));

  return [];
}


export function calcAnswer(inp: string): number {
  return 0;
}


export const day5 = () => {
  return calcAnswer(input);
};
