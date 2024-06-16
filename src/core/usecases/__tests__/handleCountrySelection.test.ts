import { handleCountrySelection } from "../handleCountrySelection";
import { IGame } from "@/core/entities/Game";

const mockGame: IGame = {
  round: 1,
  step: 1,
  score: 0,
  countries: [
    { name: 'Country1', dish: [{ name: 'Dish1-1', image: 'image1-1' }, { name: 'Dish1-2', image: 'image1-2' }, { name: 'Dish1-3', image: 'image1-3' }, { name: 'Dish1-4', image: 'image1-4' }] },
    { name: 'Country2', dish: [{ name: 'Dish2-1', image: 'image2-1' }, { name: 'Dish2-2', image: 'image2-2' }, { name: 'Dish2-3', image: 'image2-3' }, { name: 'Dish2-4', image: 'image2-4' }] },
    { name: 'Country3', dish: [{ name: 'Dish3-1', image: 'image3-1' }, { name: 'Dish3-2', image: 'image3-2' }, { name: 'Dish3-3', image: 'image3-3' }, { name: 'Dish3-4', image: 'image3-4' }] },
    { name: 'Country4', dish: [{ name: 'Dish4-1', image: 'image4-1' }, { name: 'Dish4-2', image: 'image4-2' }, { name: 'Dish4-3', image: 'image4-3' }, { name: 'Dish4-4', image: 'image4-4' }] },
  ],
};

describe('handleCountrySelection', () => {
  it("should return true for the correct country", () => {
    const result = handleCountrySelection(mockGame, "Country1");
    expect(result).toBe(true);
  });

  it("should return false for an incorrect country", () => {
    const result = handleCountrySelection(mockGame, "Country2");
    expect(result).toBe(false);
  });

  it("should be case insensitive", () => {
    const result = handleCountrySelection(mockGame, "country1");
    expect(result).toBe(true);
  });

  it("should handle multiple steps correctly", () => {
    const gameStep2 = { ...mockGame, step: 2 };
    const result = handleCountrySelection(gameStep2, "Country2");
    expect(result).toBe(true);
  });

  it("should handle multiple steps incorrectly", () => {
    const gameStep2 = { ...mockGame, step: 2 };
    const result = handleCountrySelection(gameStep2, "Country1");
    expect(result).toBe(false);
  });

  it("should return false for an empty string", () => {
    const result = handleCountrySelection(mockGame, "");
    expect(result).toBe(false);
  });
});