import { IGame } from "../entities/Game";
import { ICountry } from "../entities/Country";

export const generateGame = (countries: ICountry[]): IGame => {
  const selectedCountries = countries.sort(() => 0.5 - Math.random()).slice(0, 4);
  return {
    round: 1,
    step: 1,
    score: 0,
    countries: selectedCountries,
  };
}