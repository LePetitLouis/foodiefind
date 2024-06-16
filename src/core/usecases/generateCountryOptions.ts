import { ICountry } from "../entities/Country";

export const generateCountryOptions = (correctCountry: ICountry, allCountries: ICountry[]): string[] => {
  const otherCountries = allCountries.filter(country => country.name !== correctCountry.name);
  const shuffledCountries = otherCountries.sort(() => 0.5 - Math.random()).slice(0, 3);
  const options = [...shuffledCountries, correctCountry].sort(() => 0.5 - Math.random());
  return options.map(country => country.name);
}