import { SyntheticEvent } from "react";
import { FC, useState } from "react";
import { useSelector } from "react-redux";
import { UserInfo } from "../../interfaces/logininfo";
import { GemAndLives, ResourceInfo } from "../../interfaces/resourceinfo";
import { updateResources } from "../../services/resource-service";
import {
  PlusSign,
  HeartshopContainer,
  MinusSign,
  SaveButton,
} from "../../styles/heartshop.styles";
import { Gems, Lives } from "../../styles/resources.styles";

export interface HeartShopProps {
  handleClose: Function;
  updateResourceState: Function;
  setRerenderNeeded: Function;
}

const HeartShop: FC<HeartShopProps> = ({
  handleClose,
  updateResourceState,
  setRerenderNeeded,
}) => {
  const userid = useSelector((state: UserInfo) => state.user?.id);
  const token = useSelector((state: UserInfo) => state.user?.token);
  const gem = useSelector((state: ResourceInfo) => state.resources?.gem);
  const lives = useSelector((state: ResourceInfo) => state.resources?.lives);

  const initialGem = gem;
  const initialLives = lives;

  const [customGem, setCustomGem] = useState(gem);
  const [customLives, setCustomLives] = useState(lives);

  const decreaseLives = (e: SyntheticEvent) => {
    e.preventDefault();

    if (
      customGem !== undefined &&
      customLives !== undefined &&
      initialLives !== undefined &&
      initialGem !== undefined &&
      lives !== undefined &&
      gem !== undefined
    ) {
      if (customLives <= 5 && customLives > 1 && customGem < initialGem) {
        setCustomLives(customLives - 1);
        setCustomGem(customGem + 100);
      }
    }
  };

  const increaseLives = (e: SyntheticEvent) => {
    e.preventDefault();

    if (
      customGem !== undefined &&
      customLives !== undefined &&
      initialLives !== undefined &&
      initialGem !== undefined &&
      lives !== undefined &&
      gem !== undefined
    ) {
      if (customLives < 5 && customLives >= 0 && customGem >= 100) {
        setCustomLives(customLives + 1);
        setCustomGem(customGem - 100);
      }
    }
  };

  const handleSave = () => {
    handleClose();

    updateResourceState({ gem: customGem, lives: customLives } as GemAndLives);
    // setRerenderNeeded(true);
    updateResources(
      { userid: userid, lives: customLives, gem: customGem },
      token
    );
  };

  return (
    <HeartshopContainer>
      <div className="indicators">
        <div className="setgems">
          <Gems /> {customGem}
        </div>
        <div className="setlives">
          <Lives /> {customLives}
        </div>
      </div>
      <div className="shopbuttons">
        <button className="plusminus">
          <MinusSign onClick={decreaseLives} />
        </button>
        <div id="heartContainer">
          <Lives />
        </div>
        <button className="plusminus">
          <PlusSign onClick={increaseLives} />
        </button>
      </div>
      <SaveButton onClick={() => handleSave()}>SAVE</SaveButton>
    </HeartshopContainer>
  );
};

export default HeartShop;
