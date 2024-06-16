import { generateCountryOptions } from '../generateCountryOptions';
import { ICountry } from '@/core/entities/Country';

const mockCorrectCountry: ICountry = { name: 'Country1', dish: [{ name: 'Dish1-1', image: 'image1-1' }, { name: 'Dish1-2', image: 'image1-2' }, { name: 'Dish1-3', image: 'image1-3' }, { name: 'Dish1-4', image: 'image1-4' }] };
const mockOtherCountries: ICountry[] = [
  { name: 'Country1', dish: [{ name: 'Dish1-1', image: 'image1-1' }, { name: 'Dish1-2', image: 'image1-2' }, { name: 'Dish1-3', image: 'image1-3' }, { name: 'Dish1-4', image: 'image1-4' }] },
  { name: 'Country2', dish: [{ name: 'Dish2-1', image: 'image2-1' }, { name: 'Dish2-2', image: 'image2-2' }, { name: 'Dish2-3', image: 'image2-3' }, { name: 'Dish2-4', image: 'image2-4' }] },
  { name: 'Country3', dish: [{ name: 'Dish3-1', image: 'image3-1' }, { name: 'Dish3-2', image: 'image3-2' }, { name: 'Dish3-3', image: 'image3-3' }, { name: 'Dish3-4', image: 'image3-4' }] },
  { name: 'Country4', dish: [{ name: 'Dish4-1', image: 'image4-1' }, { name: 'Dish4-2', image: 'image4-2' }, { name: 'Dish4-3', image: 'image4-3' }, { name: 'Dish4-4', image: 'image4-4' }] },
];


describe('generateCountryOptions', () => {
  it("should generate options correctly", () => {
    const options = generateCountryOptions(mockCorrectCountry, mockOtherCountries);
    expect(options).toHaveLength(4);
    expect(options).toContain("Country1");
  });
});