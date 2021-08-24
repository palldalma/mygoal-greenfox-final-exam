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
import {
  ResourceInfo,
  ResourcesInterface,
} from "../../interfaces/resourceinfo";
import store from "../../store";

interface ResourcesProps {
  saveResourcesREDUX: Function;
  //resourcesInfo: ResourceInfo;
}

const Resources: FC<ResourcesProps> = ({ saveResourcesREDUX }) => {
  const id = useSelector((state: UserInfo) => state.user.id);
  const [resources, setResources] = useState({} as ResourceInfo);

  useEffect(() => {
    async function gainResources() {
      await getResources(id).then((data) => {
        if (data.resources) {
          setResources(data as ResourceInfo);
        }
      });
    }

    gainResources();
    const res = resources.resources as ResourcesInterface;
    saveResourcesREDUX({ res });
  }, [resources]);

  // useEffect(() => {
  //   console.log(resources.resources);
  //   saveResources(resources.resources as ResourcesInterface);
  // }, [resources.resources as ResourcesInterface]);

  //useeffect amit a resources-ra figyel? abban kéne meghívni a saveResources?

  return (
    <div>
      <ResourceContainer>
        <Lives />
        <LiveCounter>{resources.resources?.live}</LiveCounter>
        <Gems />
        <GemCounter>{resources.resources?.gem}</GemCounter>
      </ResourceContainer>
    </div>
  );
};

export default Resources;
