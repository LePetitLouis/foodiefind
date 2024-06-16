import { generateGame } from "../generateGame";
import { ICountry } from "@/core/entities/Country";
import { IGame } from "@/core/entities/Game";

const mockCountries: ICountry[] = [
  { name: 'Country1', dish: [{ name: 'Dish1-1', image: 'image1-1' }, { name: 'Dish1-2', image: 'image1-2' }, { name: 'Dish1-3', image: 'image1-3' }, { name: 'Dish1-4', image: 'image1-4' }] },
  { name: 'Country2', dish: [{ name: 'Dish2-1', image: 'image2-1' }, { name: 'Dish2-2', image: 'image2-2' }, { name: 'Dish2-3', image: 'image2-3' }, { name: 'Dish2-4', image: 'image2-4' }] },
  { name: 'Country3', dish: [{ name: 'Dish3-1', image: 'image3-1' }, { name: 'Dish3-2', image: 'image3-2' }, { name: 'Dish3-3', image: 'image3-3' }, { name: 'Dish3-4', image: 'image3-4' }] },
  { name: 'Country4', dish: [{ name: 'Dish4-1', image: 'image4-1' }, { name: 'Dish4-2', image: 'image4-2' }, { name: 'Dish4-3', image: 'image4-3' }, { name: 'Dish4-4', image: 'image4-4' }] },
  { name: 'Country5', dish: [{ name: 'Dish5-1', image: 'image5-1' }, { name: 'Dish5-2', image: 'image5-2' }, { name: 'Dish5-3', image: 'image5-3' }, { name: 'Dish5-4', image: 'image5-4' }] },
  { name: 'Country6', dish: [{ name: 'Dish6-1', image: 'image6-1' }, { name: 'Dish6-2', image: 'image6-2' }, { name: 'Dish6-3', image: 'image6-3' }, { name: 'Dish6-4', image: 'image6-4' }] },
  { name: 'Country7', dish: [{ name: 'Dish7-1', image: 'image7-1' }, { name: 'Dish7-2', image: 'image7-2' }, { name: 'Dish7-3', image: 'image7-3' }, { name: 'Dish7-4', image: 'image7-4' }] },
  { name: 'Country8', dish: [{ name: 'Dish8-1', image: 'image8-1' }, { name: 'Dish8-2', image: 'image8-2' }, { name: 'Dish8-3', image: 'image8-3' }, { name: 'Dish8-4', image: 'image8-4' }] },
];

describe('generateGame', () => {
  it('should generate a game with 4 countries', () => {
    const game: IGame = generateGame(mockCountries);
    expect(game.countries.length).toBe(4);
  });

  it('should set the initial round to 1', () => {
    const game: IGame = generateGame(mockCountries);
    expect(game.round).toBe(1);
  });

  it('should set the initial step to 1', () => {
    const game: IGame = generateGame(mockCountries);
    expect(game.step).toBe(1);
  });

  it('should select different countries each time', () => {
    const game1: IGame = generateGame(mockCountries);
    const game2: IGame = generateGame(mockCountries);
    expect(game1.countries).not.toEqual(game2.countries);
  });
});