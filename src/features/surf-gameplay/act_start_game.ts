export interface StartGameTarget {
  start: () => void;
}

export function actStartGame(target: StartGameTarget): void {
  target.start();
}
