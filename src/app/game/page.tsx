"use client";

import React, { useEffect } from "react";

import ProgressBarComponent from "../components/ProgressBarComponent";
import ListDishComponent from "../components/ListDishComponent";
import InputComponent from "../components/InputComponent";
import ButtonComponent from "../components/ButtonComponent";
import AnswerComponent from "../components/AnswerComponent";
import Link from "next/link";

import { useGame } from "../hooks/useGame";

const GamePage: React.FC = () => {
  const {
    setAnswerCountry,
    checkCountry,
    nextStep,
    startGame,
    inputRef,
    isCorrect,
    game,
    answerCountry,
    progress,
  } = useGame();

  useEffect(() => {
    console.log("Game updated:", game);
  }, [game]);

  const renderNextStepButton = () => {
    return (
      <ButtonComponent
        className="w-fit mx-auto rounded bg-primary hover:bg-green-700 px-4 py-2 text-white"
        onClickAction={nextStep}
      >
        Manche suivante
      </ButtonComponent>
    );
  };

  const renderRestartButtons = () => {
    return (
      <div className="flex items-center gap-4 w-[400px] mx-auto">
        <Link href="/" className="flex-1">
          <ButtonComponent className="w-full rounded bg-black border border-grey hover:bg-grey px-4 py-2 text-white">
            Accueil
          </ButtonComponent>
        </Link>
        <ButtonComponent
          className="flex-1 rounded bg-primary hover:bg-green-700 px-4 py-2 text-white"
          onClickAction={startGame}
        >
          Recommencer
        </ButtonComponent>
      </div>
    );
  };

  return (
    <div className="h-full flex flex-col justify-center item-center gap-8">
      <div>
        <p className="text-center mb-2 text-lg">Manche {game?.step}</p>
        <h1 className="text-center text-2xl font-bold">
          Devine le pays ayant cette gastronomie
        </h1>
      </div>
      <ListDishComponent
        dishes={game?.countries[game.step - 1].dish}
        round={game?.round || 0}
        showInfo={isCorrect}
      />

      {game?.round === 5 || isCorrect ? null : (
        <ProgressBarComponent value={progress} max={100} />
      )}

      {game?.round === 5 ? (
        <AnswerComponent game={game} />
      ) : (
        <InputComponent
          value={answerCountry}
          placeholder="Nom du pays"
          hasError={isCorrect === false}
          readonly={isCorrect === true}
          inputRef={inputRef}
          onChange={(value) => setAnswerCountry(value)}
          onEnter={checkCountry}
        />
      )}

      {isCorrect && game?.step && game.step < 4 && renderNextStepButton()}
      {isCorrect && game?.step === 4 && renderRestartButtons()}

      <span className="fixed top-8 right-24 text-bold text-2xl text-primary">
        {game?.score}
      </span>
    </div>
  );
};

export default GamePage;
