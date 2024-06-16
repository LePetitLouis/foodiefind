import { IGame } from "../entities/Game";

export const incrementScore = (game: IGame, round: number): IGame => {
  const scoreMapping: Record<number, number> = {
    1: 50,
    2: 40,
    3: 30,
    4: 20,
    5: 5,
  };

  const scoreIncrement = scoreMapping[round] || 0;
  const score = game.score + scoreIncrement;

  return {
    ...game,
    score,
  };
}