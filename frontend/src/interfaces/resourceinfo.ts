export interface ResourceInfo {
  resources?: {
    gem: number;
    lives: number;
  };
  error?: string;
}

export interface GemAndLives {
  gem: number;
  lives: number;
}

export interface updateResourceRequest {
  userid: string | undefined;
  gem: number | undefined;
  lives: number | undefined;
}
