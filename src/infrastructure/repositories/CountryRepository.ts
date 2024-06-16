import { ICountry } from "@/core/entities/Country";
import { ICountryRepository } from "@/core/interfaces/ICountryRepository";
import { fetchCountries } from "@/infrastructure/api/countryApi";

export class CountryRepository implements ICountryRepository {
  getAllCountries(): ICountry[] {
    return fetchCountries();
  }
}