import { LoginInfo } from "../../interfaces/logininfo";

export const SAVE_USER_INFO = "SAVE_USER_INFO";
export const LOG_USER_OUT = "LOG_USER_OUT";

//a kódban ezeket a function-öket tudod meghívni
export const saveUserInfo = (logininfo: LoginInfo) => ({
  type: SAVE_USER_INFO,
  payload: logininfo,
});

export const deleteUserInfo = () => ({
  type: LOG_USER_OUT,
});
