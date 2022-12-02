import { scoreRound, TheirPlay, valueForYourResponse, YourResponse } from "./day2";
import { input } from "./day2.data";

const enum Outcome {
  X = "X", // Loose
  Y = "Y", // Draw
  Z = "Z" // Win
}
export const neededResponseForOutcome = {
  "X": {
    // loose
      "A" : YourResponse.Z,
      "B": YourResponse.X,
      "C": YourResponse.Y
  },
  "Y": {
    // draw
    "A": YourResponse.X,
    "B": YourResponse.Y,
    "C": YourResponse.Z
  },
  "Z": {
    // win
    "A": YourResponse.Y,
    "B": YourResponse.Z,
    "C": YourResponse.X
  }
};


function pickNeededOutcomeGivenTheirPlay(theirPlay: TheirPlay, neededOutcome: Outcome): YourResponse {
    return neededResponseForOutcome[neededOutcome][theirPlay]; 
  
}

export const playRound = (input: string) => {
  let rounds = input.split(" ");

  let theirPlay: TheirPlay = rounds[0] as TheirPlay;
  let neededOutcome: Outcome = rounds[1] as Outcome;
  
  let yourNeededResponse = pickNeededOutcomeGivenTheirPlay(theirPlay, neededOutcome);
  
  return scoreRound(theirPlay, yourNeededResponse);
};


export const playAllRounds = (input: string) => {
    let allRounds = input.split("\n");

    return allRounds
      .map((round) => playRound(round))
      .reduce((prev, cur) => {
        return prev + cur;
      }, 0)

}



export const day2part2 = () => {
    return playAllRounds(input);
};
