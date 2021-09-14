import { FC, useEffect } from "react";
import { Redirect } from "react-router";
import { PageContainer } from "../../styles/page.styles";
import {
  Tile,
  TileContainer,
  TranslationIcon,
} from "../../styles/tiles.styles";

export interface gameSelectorProps {
  loggedIn: boolean;
  level: string;
  setBackBtnVisibility: Function;
  backBtn: boolean;
}

const GameSelector: FC<gameSelectorProps> = ({
  loggedIn,
  level,
  backBtn,
  setBackBtnVisibility,
}) => {
  useEffect(() => {
    async function checkBackBtn() {
      function hideBackBtn() {
        if (backBtn === false) {
          setBackBtnVisibility(true);
        }
      }
      hideBackBtn();
    }

    checkBackBtn();
  }, [backBtn, setBackBtnVisibility]);

  return (
    <PageContainer>
      {loggedIn ? (
        <>
          <TileContainer>
            <Tile
              to={`/${level}/translation`}
              style={{ backgroundColor: "	#00FFFF" }}
            >
              <TranslationIcon />
            </Tile>
            <Tile
              to={`/${level}/dummy1`}
              style={{ backgroundColor: "	#c6dddd" }}
            >
              Flashcards
            </Tile>
          </TileContainer>
        </>
      ) : (
        <Redirect to={{ pathname: "/users/login" }} />
      )}
    </PageContainer>
  );
};

export default GameSelector;
