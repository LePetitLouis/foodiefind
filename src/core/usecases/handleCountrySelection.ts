import { IGame } from "../entities/Game";

export const handleCountrySelection = (game: IGame, selectedCountry: string): boolean => {
  const isCorrect = game.countries[game.step - 1].name.toLocaleLowerCase() === selectedCountry.toLocaleLowerCase();
  console.log(`Selected country: ${selectedCountry}, Correct: ${isCorrect}, Current country: ${game.countries[game.step - 1].name}`);
  return isCorrect
};