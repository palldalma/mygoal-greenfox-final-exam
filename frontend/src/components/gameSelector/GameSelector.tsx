import { FC } from "react";
import { Redirect } from "react-router";
import { PageContainer } from "../../styles/page.styles";
import {
  Tile,
  TileContainer,
  TranslationIcon,
} from "../../styles/tiles.styles";

export interface StarterPageProps {
  loggedIn: boolean;
  level: string;
}

const GameSelector: FC<StarterPageProps> = ({ loggedIn, level }) => {
  return (
    <PageContainer>
      {loggedIn ? (
        <TileContainer>
          <Tile
            to={`/${level}/translation`}
            style={{ backgroundColor: "	#00FFFF" }}
          >
            <TranslationIcon />
          </Tile>
          <Tile to={`/${level}/dummy1`} style={{ backgroundColor: "	#c6dddd" }}>
            DUMMY
          </Tile>
          <Tile to={`/${level}/dummy2`} style={{ backgroundColor: "	#c6dddd" }}>
            DUMMY
          </Tile>
        </TileContainer>
      ) : (
        <Redirect to={{ pathname: "/users/login" }} />
      )}
    </PageContainer>
  );
};

export default GameSelector;
