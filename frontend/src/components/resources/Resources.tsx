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
import { ResourceInfo } from "../../interfaces/resourceinfo";

export interface ResourcesProps {}

const Resources: FC<ResourcesProps> = () => {
  const id = useSelector((state: UserInfo) => state.user.id);
  const [resources, setResources] = useState({
    resources: { gem: 0, live: 0 },
  } as ResourceInfo);

  useEffect(() => {
    async function gainResources() {
      const resources = await getResources(id);

      if (resources.resources) {
        setResources(resources);
      }
    }

    gainResources();
  }, []);

  return (
    <>
      <ResourceContainer>
        <Lives />
        <LiveCounter>{resources.resources?.live}</LiveCounter>
        <Gems />
        <GemCounter>{resources.resources?.gem}</GemCounter>
      </ResourceContainer>
    </>
  );
};

export default Resources;
