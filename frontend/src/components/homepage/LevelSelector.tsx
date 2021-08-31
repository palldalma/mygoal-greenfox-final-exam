import { FC } from "react";
import {
  Advanced,
  Beginner,
  Intermediate,
  Starter,
  Tile,
  TileContainer,
} from "../../styles/tiles.styles";

export interface LevelSelectorProps {}

const LevelSelector: FC<LevelSelectorProps> = () => {
  return (
    <TileContainer>
      <Tile to="/starter" style={{ backgroundColor: "#00FFFF" }}>
        <Starter />
      </Tile>
      <Tile to="/beginner" style={{ backgroundColor: "#00FF7F" }}>
        <Beginner />
      </Tile>
      <Tile to="/intermediate" style={{ backgroundColor: "#FFD700" }}>
        <Intermediate />
      </Tile>
      <Tile to="/advanced" style={{ backgroundColor: "	#FF4500" }}>
        <Advanced />
      </Tile>
    </TileContainer>
  );
};

export default LevelSelector;
