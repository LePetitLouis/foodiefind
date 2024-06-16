import React, { useState } from "react";
import ButtonComponent from "./ButtonComponent";

import { useAnswers } from "../hooks/useAnswers";

import { IGame } from "@/core/entities/Game";
import { useGame } from "../hooks/useGame";

interface AnswerComponentProps {
  game: IGame;
}

const AnswerComponent: React.FC<AnswerComponentProps> = ({ game }) => {
  const [showCorrectAnswer, setShowCorrectAnswer] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  const correctAnswer = game.countries[game.step - 1].name;
  const answers = useAnswers(game);
  const { setIsCorrect, isCorrect } = useGame();

  const onSelection = (answer: string) => {
    setSelectedCountry(answer);
    setShowCorrectAnswer(true);
    setIsCorrect(true);
    console.log(isCorrect);
  }
  
  return (
    <div className="grid grid-cols-2 gap-4 w-[450px] mx-auto">
      {answers.map((answer, index) => {

        return (
          <ButtonComponent
            className={`rounded hover:bg-grey border border-grey px-4 py-2 text-white disabled:hover:bg-transparent ${showCorrectAnswer && answer === correctAnswer ? 'bg-green-700 border-green-700 disabled:hover:bg-green-700' : ''} ${showCorrectAnswer && answer === selectedCountry && answer !== correctAnswer ? 'bg-red-700 border-red-700 disabled:hover:bg-red-700' : ''}`}
            key={index}
            disabled={showCorrectAnswer}
            onClickAction={() => onSelection(answer)}
          >
            {answer}
          </ButtonComponent>
        );
      })}
    </div>
  );
}

export default AnswerComponent;