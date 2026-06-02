import {
  type CircuitSlidePreferences,
  createInitialCircuitSlideState,
} from "../game/game-runtime";

export const circuitSlideLiteFixture = {
  preferences: {
    difficulty: "medium",
    highScore: 120,
  } satisfies CircuitSlidePreferences,
  state: createInitialCircuitSlideState({
    difficulty: "medium",
    highScore: 120,
  }),
};
