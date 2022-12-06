import { input } from "./day5.data";


export function parseCrates(inp: string): string[][] {
  
  const crateJunk = new RegExp('\[*\]*');

  const cleaned = inp.replace(crateJunk, '').split('\n');
  const crates = cleaned.filter((line) => !line.startsWith('move') && !line.startsWith(' 1'));
  const columnsRow = cleaned
    .map((line) => line.trim())
    .filter((line) => line.startsWith('1'))[0];
  const columns = Number(columnsRow.split('   ').pop());

  const crateArrangement: string[][] = Array(columns).fill([]);

  // todo need to get creates and put in list

  return crateArrangement;
}



export function calcAnswer(inp: string): number {
  return 0;
}


export const day5 = () => {
  return calcAnswer(input);
};
