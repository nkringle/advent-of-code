import { input } from "./day2.data";


// Column 1
// A - Rock
// B - Paper
// C - Scissors

// Column 2
// X - Rock ; 1 point
// Y - Paper; 2 points
// Z - Scissors; 3 points

// outcome scores
// 0 - lost
// 3 - draws
// 6 - win

export const enum TheirPlay {
  A = "A",  // Rock
  B = "B", // Paper
  C = "C" // Scissors
};

export const enum YourResponse {
  X = "X", // "Rock"
  Y = "Y", // "Paper"
  Z = "Z" // Scissors
}

export const valueForYourResponse = {
  "X": {
    name: 'Rock',
    points: 1,
    beats: TheirPlay.C,
    draw: TheirPlay.A,
    loose: TheirPlay.B
  },
  "Y": {
    name: 'Paper',
    points: 2,
    beats: TheirPlay.A,
    draw: TheirPlay.B,
    loose: TheirPlay.C
  },
  "Z": {
    name: 'Scissors',
    points: 3,
    beats: TheirPlay.B,
    draw: TheirPlay.C,
    loose: TheirPlay.A 
  }
}


export function scoreRound(them: TheirPlay, you: YourResponse): number {
  const valueOfRound = valueForYourResponse[you];
  let handPoint: number = valueOfRound.points;

  let roundScore = 0;

  if (them === valueOfRound.beats) {
    roundScore = 6;
  }
  if (them === valueOfRound.draw){
    roundScore = 3
  }

  return handPoint + roundScore;
}



export const playRound = (input: string) => {
  let rounds = input.split(" ");
  
  
  return scoreRound(rounds[0] as TheirPlay, rounds[1] as YourResponse);
};


export const playAllRounds = (input: string) => {
    let allRounds = input.split("\n");

    return allRounds
      .map((round) => playRound(round))
      .reduce((prev, cur) => {
        return prev + cur;
      }, 0)

}


export const day2 = () => {
    return playAllRounds(input);
};
