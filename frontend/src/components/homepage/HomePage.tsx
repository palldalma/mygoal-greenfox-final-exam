import { FC, useState } from "react";

import { useSelector } from "react-redux";

import { UserInfo } from "../../interfaces/logininfo";
import { HomepageContainer } from "../../styles/homepage.styles";
import Tiles from "./Tiles";

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const name = useSelector((state: UserInfo) => state.user.name);
  const token = useSelector((state: UserInfo) => state.user.token);
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <HomepageContainer>
      <h1>Hello{name}</h1>
      <Tiles />
    </HomepageContainer>
  );
};

export default Home;
