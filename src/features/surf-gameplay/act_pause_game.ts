export interface PauseGameTarget {
  pause: () => void;
}

export function actPauseGame(target: PauseGameTarget): void {
  target.pause();
}
