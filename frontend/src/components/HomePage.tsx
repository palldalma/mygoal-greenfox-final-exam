import { FC } from "react";

import { useSelector } from "react-redux";

import { UserInfo } from "../interfaces/logininfo";

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const name = useSelector((state: UserInfo) => state.user.name);
  return <h1>Hello{name}</h1>;
};

export default Home;
