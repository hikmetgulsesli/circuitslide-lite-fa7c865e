import { useCallback, useEffect, useMemo, useState } from "react";
import {
  advanceCircuitSlide,
  type CircuitSlideDifficulty,
  type CircuitSlideState,
  createInitialCircuitSlideState,
  moveCircuitSlidePlayer,
  resetCircuitSlide,
  setCircuitSlideDifficulty,
  toRuntimeSnapshot,
} from "../../game/game-runtime";
import { installCircuitSlideBridge } from "../../test/bridge";
import {
  loadCircuitSlidePreferences,
  saveCircuitSlidePreferences,
} from "./circuitslide-lite.repo";

export function useCircuitSlideLiteStore() {
  const [state, setState] = useState<CircuitSlideState>(() => {
    const loaded = loadCircuitSlidePreferences();
    return {
      ...createInitialCircuitSlideState(loaded.preferences),
      storageStatus: loaded.status,
      lastError: loaded.error,
    };
  });

  const persist = useCallback((nextState: CircuitSlideState) => {
    const status = saveCircuitSlidePreferences({
      difficulty: nextState.difficulty,
      highScore: nextState.highScore,
    });

    return {
      ...nextState,
      storageStatus: status,
      lastError: status === "error" ? "Game preferences could not be saved." : nextState.lastError,
    };
  }, []);

  const actions = useMemo(
    () => ({
      start: () => setState((current) => ({ ...current, paused: false, gameOver: false, lastError: null })),
      pause: () => setState((current) => ({ ...current, paused: true })),
      resume: () => setState((current) => ({ ...current, paused: false })),
      reset: () => setState((current) => persist(resetCircuitSlide(current))),
      resetDefaults: () =>
        setState((current) =>
          persist({
            ...resetCircuitSlide({
              ...current,
              difficulty: "medium",
              highScore: 0,
            }),
            storageStatus: current.storageStatus,
          }),
        ),
      tick: () => setState((current) => persist(advanceCircuitSlide(current))),
      moveLeft: () => setState((current) => moveCircuitSlidePlayer(current, -1)),
      moveRight: () => setState((current) => moveCircuitSlidePlayer(current, 1)),
      openSettings: () => setState((current) => ({ ...current, activeScreen: "settings" })),
      closeSettings: () => setState((current) => ({ ...current, activeScreen: "gameplay" })),
      setDifficulty: (difficulty: CircuitSlideDifficulty) =>
        setState((current) => persist(setCircuitSlideDifficulty(current, difficulty))),
      saveConfig: () =>
        setState((current) =>
          persist({
            ...current,
            activeScreen: "gameplay",
          }),
        ),
    }),
    [persist],
  );

  useEffect(() => {
    installCircuitSlideBridge({ state, actions });
  }, [actions, state]);

  return {
    state,
    runtime: toRuntimeSnapshot(state),
    actions,
  };
}
