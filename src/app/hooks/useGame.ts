import { useEffect, useState } from "react";

import { ICountry } from "@/core/entities/Country";
import { IGame } from "@/core/entities/Game";

import { CountryRepository } from "@/infrastructure/repositories/CountryRepository";

import { generateGame } from "@/core/usecases/generateGame";
import { advanceStep } from "@/core/usecases/advanceRoundAndStep";
import { handleCountrySelection } from "@/core/usecases/handleCountrySelection";
import { incrementScore } from "@/core/usecases/incrementScore";

import { useInputFocus } from "./useInputFocus";
import { useProgress } from "./useProgress";

export const useGame = () => {
  const [game, setGame] = useState<IGame | null>(null);
  const [answerCountry, setAnswerCountry] = useState<string>("");
  const [isCorrect, setIsCorrect] = useState<boolean | null>(null);
  const countryRepository = new CountryRepository();
  const inputRef = useInputFocus(game);
  const progress = useProgress(game, setGame, isCorrect);

  useEffect(() => {
    const fetchData = async () => {
      const countries: ICountry[] = countryRepository.getAllCountries();
      const newGame = generateGame(countries);
      setGame(newGame);
    };

    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const checkCountry = () => {
    if (!game) return;

    const isCorrectCountry = handleCountrySelection(game, answerCountry);
    setIsCorrect(isCorrectCountry);

    if (isCorrectCountry) {
      setGame(prevGame => {
        if (!prevGame) return prevGame;
        return incrementScore(prevGame, prevGame.round);
      });
    } else {
      setTimeout(() => {
        setIsCorrect(null);
      }, 3000);
    }
  };

  const nextStep = () => {
    setGame((prevGame) => {
      if (prevGame) return advanceStep(prevGame);
      return prevGame;
    });

    setAnswerCountry("");
    setIsCorrect(false);
  };

  const startGame = () => {
    const countries: ICountry[] = countryRepository.getAllCountries();
    const newGame = generateGame(countries);
    setGame(newGame);
    setAnswerCountry("");
    setIsCorrect(null);
  };

  return {
    setAnswerCountry,
    checkCountry,
    nextStep,
    startGame,
    setGame,
    setIsCorrect,
    progress,
    inputRef,
    isCorrect,
    game,
    answerCountry,
  };
};
