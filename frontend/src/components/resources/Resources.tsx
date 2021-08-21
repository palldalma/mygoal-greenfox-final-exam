import { FC } from "react";
import {
  Lives,
  Gems,
  LiveCounter,
  GemCounter,
  ResourceContainer,
} from "../../styles/resources.styles";

export interface ResourcesProps {}

const Resources: FC<ResourcesProps> = () => {
  return (
    <>
      <ResourceContainer>
        <Lives />
        <LiveCounter>5</LiveCounter>
        <Gems />
        <GemCounter>20</GemCounter>
      </ResourceContainer>
    </>
  );
};

export default Resources;
