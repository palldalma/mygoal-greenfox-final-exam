import { GemAndLives } from "../data/resource";

interface ResourceRequest {
  userid: number | undefined;
}

interface ResourceResponse {
  resources: GemAndLives;
}

interface updateResourceRequest {
  userid: number | undefined;

  body: GemAndLives;
}

interface updateResourceResponse {
  resources: Response;
}

export {
  ResourceRequest,
  ResourceResponse,
  updateResourceRequest,
  updateResourceResponse,
};
