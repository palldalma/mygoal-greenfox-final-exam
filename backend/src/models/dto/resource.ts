import { Resource } from "../data/resource";

interface ResourceRequest {
  userid: number | undefined;
}

interface ResourceResponse {
  resources: Resource;
}

export { ResourceRequest, ResourceResponse };
