import { ICountry } from "./Country";

export interface IGame {
  round: number;
  step: number;
  score: number;
  countries: ICountry[];
}