import type { CircuitSlideState } from "../game/game-runtime";

export interface CircuitSlideAppBridge {
  state: CircuitSlideState;
  actions: {
    start: () => void;
    pause: () => void;
    resume: () => void;
    reset: () => void;
    resetDefaults: () => void;
    tick: () => void;
    moveLeft: () => void;
    moveRight: () => void;
    openSettings: () => void;
    closeSettings: () => void;
    setDifficulty: (difficulty: CircuitSlideState["difficulty"]) => void;
    saveConfig: () => void;
  };
}

declare global {
  interface Window {
    app?: CircuitSlideAppBridge;
  }
}

export function installCircuitSlideBridge(bridge: CircuitSlideAppBridge): void {
  if (typeof window !== "undefined") {
    window.app = bridge;
  }
}
