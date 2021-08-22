export interface LoginInfo {
  token?: string;
  name?: string;
  error?: string;
  id?: string;
}

export interface UserInfo {
  user: LoginInfo;
}
