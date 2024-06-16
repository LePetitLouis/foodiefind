import { useEffect, useState } from "react";
import { IGame } from "@/core/entities/Game";
import { advanceRound } from "@/core/usecases/advanceRoundAndStep";

export const useProgress = (
  game: IGame | null,
  setGame: React.Dispatch<React.SetStateAction<IGame | null>>,
  isCorrect: boolean | null
) => {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    let startTime: number | null = null;
    let animationFrame: number | null = null;

    const totalTime = 10000; // 10 secondes

    const animateProgress = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;

      setProgress(Math.min((elapsed / totalTime) * 100, 100));

      if (elapsed < totalTime && !isCorrect) {
        animationFrame = requestAnimationFrame(animateProgress);
      } else {
        setProgress(0);
        if (!isCorrect) {
          setGame(prevGame => {
            if (prevGame) return advanceRound(prevGame);
            return prevGame;
          });
        }
      }
    };

    if (game && game.round < 5 && !isCorrect) {
      animationFrame = requestAnimationFrame(animateProgress);
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [game, isCorrect, setGame]);

  return progress;
};