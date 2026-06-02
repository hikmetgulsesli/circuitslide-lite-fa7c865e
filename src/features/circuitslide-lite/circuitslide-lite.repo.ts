import {
  type CircuitSlidePreferences,
  normalizeDifficulty,
  normalizeScore,
} from "../../game/game-runtime";

export type CircuitSlidePersistenceStatus = "ready" | "recovered" | "unavailable" | "error";

export interface CircuitSlideLoadResult {
  preferences: Partial<CircuitSlidePreferences>;
  status: CircuitSlidePersistenceStatus;
  error: string | null;
}

const STORAGE_KEY = "circuitslide-lite:preferences";

export function loadCircuitSlidePreferences(storage: Storage | undefined = getStorage()): CircuitSlideLoadResult {
  if (!storage) {
    return { preferences: {}, status: "unavailable", error: "Local storage is unavailable." };
  }

  try {
    const raw = storage.getItem(STORAGE_KEY);

    if (!raw) {
      return { preferences: {}, status: "ready", error: null };
    }

    const parsed = JSON.parse(raw) as Partial<CircuitSlidePreferences>;

    return {
      preferences: {
        difficulty: normalizeDifficulty(parsed.difficulty),
        highScore: normalizeScore(parsed.highScore),
      },
      status: "ready",
      error: null,
    };
  } catch {
    try {
      storage.removeItem(STORAGE_KEY);
    } catch {
      return { preferences: {}, status: "error", error: "Stored game preferences could not be recovered." };
    }

    return { preferences: {}, status: "recovered", error: "Stored game preferences were reset." };
  }
}

export function saveCircuitSlidePreferences(
  preferences: CircuitSlidePreferences,
  storage: Storage | undefined = getStorage(),
): CircuitSlidePersistenceStatus {
  if (!storage) {
    return "unavailable";
  }

  try {
    storage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        difficulty: normalizeDifficulty(preferences.difficulty),
        highScore: normalizeScore(preferences.highScore),
      }),
    );
    return "ready";
  } catch {
    return "error";
  }
}

function getStorage(): Storage | undefined {
  if (typeof window === "undefined") {
    return undefined;
  }

  try {
    return window.localStorage;
  } catch {
    return undefined;
  }
}
