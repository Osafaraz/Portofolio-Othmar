export interface AudioConfig {
  bgmPath: string;
  defaultVolume: number;
  fadeInDuration: number;
  fadeOutDuration: number;
  storageKey: string;
}

export const audioConfig: AudioConfig = {
  bgmPath: '/assets/audio/bgm.mp3',
  defaultVolume: 0.35,
  fadeInDuration: 1.5,
  fadeOutDuration: 0.8,
  storageKey: 'othmar_portfolio_bgm_muted',
};
