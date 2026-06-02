export interface RestartGameTarget {
  reset: () => void;
}

export function actRestartGame(target: RestartGameTarget): void {
  target.reset();
}
