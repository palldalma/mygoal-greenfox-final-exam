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
