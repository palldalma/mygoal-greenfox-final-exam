export const SAVE_USER_INFO = "SAVE_USER_INFO";
export const LOG_USER_OUT = "LOG_USER_OUT";

//a kódban ezeket a function-öket tudod meghívni
export const saveUserInfo = (token: string) => ({
  type: SAVE_USER_INFO,
  payload: token,
});

export const deleteUserInfo = () => ({
  type: LOG_USER_OUT,
});
