import { FC, useState, useEffect } from "react";

import { useSelector } from "react-redux";

import { UserInfo } from "../../interfaces/logininfo";
import { PageContainer } from "../../styles/page.styles";
// import LevelSelector from "./LevelSelector";
// // import LevelSelector from "./LevelSelector";

import LevelSelector from "./";

export interface HomeProps {}

export const Home: FC<HomeProps> = () => {
  const token = useSelector((state: UserInfo) => state.user.token);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    const checkStore = (): void => {
      if (token) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    };
    checkStore();
  }, [token]);

  return (
    <PageContainer>
      {isLoggedIn ? <LevelSelector /> : <h1>You should login, buddy.</h1>}
    </PageContainer>
  );
};

export default Home;
