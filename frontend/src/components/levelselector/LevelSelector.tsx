import { FC } from "react";
import {
  Advanced,
  Beginner,
  Intermediate,
  Starter,
  Tile,
  TileContainer,
} from "../../styles/tiles.styles";

export interface LevelSelectorProps {
  updateLevel: Function;
}

const LevelSelector: FC<LevelSelectorProps> = ({ updateLevel }) => {
  const onClickHandlerStarter = () => {
    updateLevel({ level: "starter" });
  };
  const onClickHandlerBeginner = () => {
    updateLevel({ level: "beginner" });
  };
  const onClickHandlerIntermediate = () => {
    updateLevel({ level: "intermediate" });
  };
  const onClickHandlerAdvanced = () => {
    updateLevel({ level: "advanced" });
  };

  return (
    <TileContainer>
      <Tile
        to="/starter"
        style={{ backgroundColor: "#00FFFF" }}
        onClick={onClickHandlerStarter}
      >
        <Starter />
      </Tile>
      <Tile
        to="/beginner"
        style={{ backgroundColor: "#00FF7F" }}
        onClick={onClickHandlerBeginner}
      >
        <Beginner />
      </Tile>
      <Tile
        to="/intermediate"
        style={{ backgroundColor: "#FFD700" }}
        onClick={onClickHandlerIntermediate}
      >
        <Intermediate />
      </Tile>
      <Tile
        to="/advanced"
        style={{ backgroundColor: "	#FF4500" }}
        onClick={onClickHandlerAdvanced}
      >
        <Advanced />
      </Tile>
    </TileContainer>
  );
};

export default LevelSelector;
