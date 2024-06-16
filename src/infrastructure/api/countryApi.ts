import { ICountry } from "@/core/entities/Country";
import dataCountries from "@/data/dataCountries";

export const fetchCountries = (): ICountry[] => {
  const data = dataCountries;
  return data;
};