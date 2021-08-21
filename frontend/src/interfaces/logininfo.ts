export interface LoginInfo {
  token?: string;
  name?: string;
  error?: string;
}

export interface UserInfo {
  user: LoginInfo;
}
