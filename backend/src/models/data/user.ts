export interface User {
  email: string;
  password: string;
}

export interface UserInfoPostLogin {
  id?: number;
}

export interface ExistingUserToAuthenticate {
  password: string;
  id: number;
  name: string;
}
