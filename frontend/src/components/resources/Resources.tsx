import { FC } from "react";
import { useSelector } from "react-redux";
import { getResources } from "../../services/resource-service";
import {
  Lives,
  Gems,
  LiveCounter,
  GemCounter,
  ResourceContainer,
} from "../../styles/resources.styles";

import { UserInfo } from "../../interfaces/logininfo";
import { useEffect } from "react";
import { GemAndLives } from "../../interfaces/resourceinfo";

interface ResourcesProps {
  updateResourceState: Function;
  resourcesFromStore: GemAndLives;
  id: string;
  token: string;
}

const Resources: FC<ResourcesProps> = ({
  updateResourceState,
  resourcesFromStore,
  token,
  id,
}) => {
  useEffect(() => {
    async function gainResources() {
      await getResources(id, token).then((data) => {
        if (data.resources) {
          const gem = data.resources.gem;
          const lives = data.resources.lives;

          let tempResource = { gem: gem, lives: lives };

          updateResourceState(tempResource);
        }
      });
    }
    gainResources();
  }, [id, updateResourceState]);

  return (
    <div>
      <ResourceContainer>
        <div>
          <Lives />
          <LiveCounter>{resourcesFromStore.lives}</LiveCounter>
        </div>
        <div>
          <Gems />
          <GemCounter>{resourcesFromStore.gem}</GemCounter>
        </div>
      </ResourceContainer>
    </div>
  );
};

export default Resources;
