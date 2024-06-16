import { incrementScore } from "../incrementScore";
import { IGame } from "@/core/entities/Game";

const mockGame: IGame = {
  round: 1,
  step: 1,
  score: 100,
  countries: [
    { name: 'Country1', dish: [{ name: 'Dish1-1', image: 'image1-1' }, { name: 'Dish1-2', image: 'image1-2' }, { name: 'Dish1-3', image: 'image1-3' }, { name: 'Dish1-4', image: 'image1-4' }] },
    { name: 'Country2', dish: [{ name: 'Dish2-1', image: 'image2-1' }, { name: 'Dish2-2', image: 'image2-2' }, { name: 'Dish2-3', image: 'image2-3' }, { name: 'Dish2-4', image: 'image2-4' }] },
    { name: 'Country3', dish: [{ name: 'Dish3-1', image: 'image3-1' }, { name: 'Dish3-2', image: 'image3-2' }, { name: 'Dish3-3', image: 'image3-3' }, { name: 'Dish3-4', image: 'image3-4' }] },
    { name: 'Country4', dish: [{ name: 'Dish4-1', image: 'image4-1' }, { name: 'Dish4-2', image: 'image4-2' }, { name: 'Dish4-3', image: 'image4-3' }, { name: 'Dish4-4', image: 'image4-4' }] },
  ],
};

describe("incrementScore function", () => {
  it("should increment score correctly for round 1", () => {
    const updatedGame = incrementScore(mockGame, 1);
    expect(updatedGame.score).toEqual(150);
  });

  it("should increment score correctly for round 2", () => {
    const updatedGame = incrementScore(mockGame, 2);
    expect(updatedGame.score).toEqual(140);
  });
  
  it("should increment score correctly for round 3", () => {
    const updatedGame = incrementScore(mockGame, 3);
    expect(updatedGame.score).toEqual(130);
  });

  it("should increment score correctly for round 4", () => {
    const updatedGame = incrementScore(mockGame, 4);
    expect(updatedGame.score).toEqual(120);
  });

  it("should increment score correctly for round 5", () => {
    const updatedGame = incrementScore(mockGame, 5);
    expect(updatedGame.score).toEqual(105);
  });

  it("should not change score for unknown round", () => {
    const updatedGame = incrementScore(mockGame, 6);
    expect(updatedGame.score).toEqual(100);
  });
});