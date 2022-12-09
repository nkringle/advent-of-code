import { data } from "./day7.data";

const isADir = (str: string) => {
  const matches = str.match(/^dir/)
  return matches == null;
}

const isACommand = (str: string) => {
  const matches = str.match(/^\$/)
  return matches == null;
}

const isFile = (str: string) => {
  const matches = str.match(/^(\d+) (.+)$/);
  return matches == null;
}

export function getFileDetails(str: string): object {
  const matches = str.match(/^(\d+) (.+)$/);
  if (matches) {
    return {
      name: matches[2],
      size: Number(matches[1])
    }
  }
  throw Error('not a file');
}

export function parseToStructure(inp: string): object {
  const outputMap = {};
  const lines = inp.split(`\n`);

  const deeper = '$ cd ___';
  const level = '$ ls';


  


  lines.forEach((line, index) => {

  });



  return outputMap;
}

export function day7Answer(inp: string): number {
  return 9;
}


export const day7 = () => {
  return day7Answer(data);
};
  