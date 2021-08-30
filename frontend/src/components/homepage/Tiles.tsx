import { FC } from "react";
import {
  Advanced,
  Beginner,
  Intermediate,
  Starter,
  Tile,
  TileContainer,
} from "../../styles/tiles.styles";

export interface TilesProps {}

const Tiles: FC<TilesProps> = () => {
  return (
    <TileContainer>
      <Tile to="/users/starter" style={{ backgroundColor: "#00FFFF" }}>
        <Starter />
      </Tile>
      <Tile to="/users/beginner" style={{ backgroundColor: "#00FF7F" }}>
        <Beginner />
      </Tile>
      <Tile to="/users/intermediate" style={{ backgroundColor: "#FFD700" }}>
        <Intermediate />
      </Tile>
      <Tile to="/users/advanced" style={{ backgroundColor: "	#FF4500" }}>
        <Advanced />
      </Tile>
    </TileContainer>
  );
};

export default Tiles;
