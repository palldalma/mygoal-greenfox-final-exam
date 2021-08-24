import { ResourcesInterface } from "../../interfaces/resourceinfo";

export const SAVE_RESOURCE = "SAVE_RESOURCE";

//a kódban ezeket a function-öket tudod meghívni
export const saveResources = (resources: ResourcesInterface) => ({
  type: SAVE_RESOURCE,
  payload: resources,
});
