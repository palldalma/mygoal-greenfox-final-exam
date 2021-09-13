export const UPDATE_LEVEL_OF_CUSTOM_QUESTION =
  "UPDATE_LEVEL_OF_CUSTOM_QUESTION";

export const updateLevelOfCustomQuestion = (selectedLevel: string) => ({
  type: UPDATE_LEVEL_OF_CUSTOM_QUESTION,
  payload: selectedLevel,
});
