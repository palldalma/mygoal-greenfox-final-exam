import { FC, useState } from "react";
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
}

const Resources: FC<ResourcesProps> = ({ updateResourceState }) => {
  const id = useSelector((state: UserInfo) => state.user.id);
  const [resources, setResources] = useState({ gem: 0, lives: 0 });

  useEffect(() => {
    async function gainResources() {
      await getResources(id).then((data) => {
        if (data.resources) {
          const gem = data.resources.gem;
          const lives = data.resources.lives;

          let tempResource = { gem: gem, lives: lives };
          setResources(tempResource as GemAndLives);
          updateResourceState(tempResource);
        }
      });
    }
    gainResources();
  }, []);

  return (
    <div>
      <ResourceContainer>
        <Lives />
        <LiveCounter>{resources.lives}</LiveCounter>
        <Gems />
        <GemCounter>{resources.gem}</GemCounter>
      </ResourceContainer>
    </div>
  );
};

export default Resources;
