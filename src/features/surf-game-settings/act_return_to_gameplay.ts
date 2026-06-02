export interface ReturnToGameplayTarget {
  closeSettings: () => void;
}

export function actReturnToGameplay(target: ReturnToGameplayTarget): void {
  target.closeSettings();
}
