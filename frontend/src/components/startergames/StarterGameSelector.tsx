import { FC } from "react";

import {
  Tile,
  TileContainer,
  TranslationIcon,
} from "../../styles/tiles.styles";

export interface StarterGameSelectorProps {}

const StarterGameSelector: FC<StarterGameSelectorProps> = () => {
  return (
    <TileContainer>
      <Tile to="/starter/translation" style={{ backgroundColor: "	#00FFFF" }}>
        <TranslationIcon />
      </Tile>
      <Tile to="users/starter/dummy1" style={{ backgroundColor: "	#c6dddd" }}>
        DUMMY
      </Tile>
      <Tile to="users/starter/dummy2" style={{ backgroundColor: "	#c6dddd" }}>
        DUMMY
      </Tile>
    </TileContainer>
  );
};

export default StarterGameSelector;
