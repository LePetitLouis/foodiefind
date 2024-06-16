import { IGame } from "../entities/Game";

export const advanceRound = (game: IGame): IGame => {
  return {
    ...game,
    round: game.round + 1,
  };
}

export const advanceStep = (game: IGame): IGame => {
  const newStep = game.step + 1;
  return {
    ...game,
    step: newStep,
    round: 1,
  };
}