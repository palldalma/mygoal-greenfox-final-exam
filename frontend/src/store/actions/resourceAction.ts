import { GemAndLives } from "../../interfaces/resourceinfo";

export const SAVE_RESOURCES = "SAVE_RESOURCES";

export const updateResourceState = (gemAndLives: GemAndLives) => ({
  type: SAVE_RESOURCES,
  payload: gemAndLives,
});
