export const UPDATE_LEVEL = "UPDATE_LEVEL";
export const UPDATE_COURSEID = "UPDATE_COURSEID";

export const updateLevel = (selectedLevel: /*SelectedLevel*/ string) => ({
  type: UPDATE_LEVEL,
  payload: selectedLevel,
});

export const updateCourseid = (selectedCourse: /*SelectedCourse*/ number) => ({
  type: UPDATE_COURSEID,
  payload: selectedCourse,
});
