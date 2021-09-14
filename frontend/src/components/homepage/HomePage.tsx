import { FC, useEffect } from "react";
import LevelSelector from "../levelselector";
import { Redirect } from "react-router";
import { PageContainer } from "../../styles/page.styles";

export interface HomeProps {
  loggedIn: boolean;
  setBackBtnVisibility: Function;
  backBtn: boolean;
}

export const Home: FC<HomeProps> = ({
  loggedIn,
  setBackBtnVisibility,
  backBtn,
}) => {
  useEffect(() => {
    async function checkBackBtn() {
      function hideBackBtn() {
        if (backBtn === true) {
          setBackBtnVisibility(false);
        }
      }
      hideBackBtn();
    }

    checkBackBtn();
  }, [backBtn, setBackBtnVisibility]);

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
