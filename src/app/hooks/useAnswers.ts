import { useMemo } from "react";
import { ICountry } from "@/core/entities/Country";
import { IGame } from "@/core/entities/Game";
import { CountryRepository } from "@/infrastructure/repositories/CountryRepository";
import { generateCountryOptions } from "@/core/usecases/generateCountryOptions";

export const useAnswers = (game: IGame | null) => {
  const countryRepository = new CountryRepository();

  return useMemo(() => {
    if (!game) return [];
    const countries: ICountry[] = countryRepository.getAllCountries();
    return generateCountryOptions(game.countries[game.step - 1], countries);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [game?.step]);
};