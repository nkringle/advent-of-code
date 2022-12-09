import { day7, day7Answer, parseToStructure } from './day7';
import { logAnswer } from '../../utils/logging';

test('parse into directory or file with size', () => {
  const structure = parseToStructure(`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`);


  const expected = {
    '/': {
      'a': {
        'e': {
          'i': 584
        },
        'f': 29116,
        'g': 2557,
        'h.lst': 62596
      },
      'b.txt': 14848514,
      'c.dat': 8504156,
      'd': {
        'j': 4060174,
        'd.log': 8033020,
        'd.ext': 5626152,
        'k': 7214296
      }
    }


  }

  expect(structure).toMatchObject(expected);
});


test('get directory size', () => { fail() });


test('find directories with size of at most 100000', () => { fail() });


test('Provided test cases', () => {
  expect(day7Answer(`$ cd /
$ ls
dir a
14848514 b.txt
8504156 c.dat
dir d
$ cd a
$ ls
dir e
29116 f
2557 g
62596 h.lst
$ cd e
$ ls
584 i
$ cd ..
$ cd ..
$ cd d
$ ls
4060174 j
8033020 d.log
5626152 d.ext
7214296 k`)).toBe(95437);
});


test('Returns an answer', () => {
  const answer = day7();
  logAnswer(answer);
  expect(typeof answer).toBe('number');
  expect(answer).toBeGreaterThan(0);
});
