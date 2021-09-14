import { FC, useEffect } from "react";
import { Redirect } from "react-router";
import { PageContainer } from "../../styles/page.styles";
import {
  Tile,
  TileContainer,
  TranslationIcon,
} from "../../styles/tiles.styles";

export interface CustomSelectorProps {
  loggedIn: boolean;
  level: string;
  setBackBtnVisibility: Function;
  backBtn: boolean;
}

const CustomSelector: FC<CustomSelectorProps> = ({
  loggedIn,
  level,
  setBackBtnVisibility,
  backBtn,
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
              to={`/create/translation`}
              style={{ backgroundColor: "	#1d3030" }}
            >
              <TranslationIcon />
            </Tile>
            <Tile
              to={`/create/flashcards`}
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

export default CustomSelector;
