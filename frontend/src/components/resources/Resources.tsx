import { FC } from "react";
import { useDispatch } from "react-redux";
import { getResources } from "../../services/resource-service";
import {
  Lives,
  Gems,
  LiveCounter,
  GemCounter,
  ResourceContainer,
} from "../../styles/resources.styles";

import { useEffect } from "react";
import { GemAndLives } from "../../interfaces/resourceinfo";
import {
  hideLoadingSign,
  showLoadingSign,
} from "../../store/actions/loadingAction";

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
  const dispatch = useDispatch();

  useEffect(() => {
    async function gainResources() {
      dispatch(showLoadingSign(`navbar`));
      await getResources(id, token).then((data) => {
        if (data.resources) {
          const gem = data.resources.gem;
          const lives = data.resources.lives;

          let tempResource = { gem: gem, lives: lives };

          updateResourceState(tempResource);
        }
      });
      dispatch(hideLoadingSign(`navbar`));
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
