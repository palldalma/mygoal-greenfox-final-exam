export const SET_LOGGEDIN = "SET_LOGGEDIN";

export const setLoggedIn = (boolean: boolean) => ({
  type: SET_LOGGEDIN,
  payload: boolean,
});
