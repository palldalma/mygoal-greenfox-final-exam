import { FC } from "react";
import LevelSelector from "../levelselector";
import { Redirect } from "react-router";
import { PageContainer } from "../../styles/page.styles";

export interface HomeProps {
  loggedIn: boolean;
}

export const Home: FC<HomeProps> = ({ loggedIn }) => {
  return (
    <PageContainer>
      {loggedIn ? (
        <LevelSelector />
      ) : (
        <Redirect to={{ pathname: "/users/login" }} />
      )}
    </PageContainer>
  );
};

export default Home;
