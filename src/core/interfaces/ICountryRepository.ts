import { ICountry } from "../entities/Country";

export interface ICountryRepository {
  getAllCountries(): ICountry[];
}