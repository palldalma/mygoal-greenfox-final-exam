import { GemAndLives } from "../data/resource";

interface ResourceRequest {
  userid: number | undefined;
}

interface ResourceResponse {
  resources: GemAndLives;
}

export { ResourceRequest, ResourceResponse };
