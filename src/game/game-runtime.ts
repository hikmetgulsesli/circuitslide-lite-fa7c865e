export type CircuitSlideDifficulty = "easy" | "medium" | "hard";

export type CircuitSlideScreen = "gameplay" | "settings";

export interface CircuitSlideEntity {
  lane: number;
  position: number;
}

export interface CircuitSlideRuntime {
  player: CircuitSlideEntity;
  obstacles: CircuitSlideEntity[];
  shards: CircuitSlideEntity[];
  score: number;
  energy: number;
  lives: number;
  paused: boolean;
}

export interface CircuitSlideState extends CircuitSlideRuntime {
  activeScreen: CircuitSlideScreen;
  difficulty: CircuitSlideDifficulty;
  highScore: number;
  gameOver: boolean;
  storageStatus: "idle" | "ready" | "recovered" | "unavailable" | "error";
  lastError: string | null;
}

export interface CircuitSlidePreferences {
  difficulty: CircuitSlideDifficulty;
  highScore: number;
}

const DIFFICULTY_SPEED: Record<CircuitSlideDifficulty, number> = {
  easy: 8,
  medium: 12,
  hard: 16,
};

export function createInitialCircuitSlideState(
  preferences: Partial<CircuitSlidePreferences> = {},
): CircuitSlideState {
  const difficulty = normalizeDifficulty(preferences.difficulty);

  return {
    activeScreen: "gameplay",
    difficulty,
    highScore: normalizeScore(preferences.highScore),
    player: { lane: 1, position: 8 },
    obstacles: [
      { lane: 0, position: 24 },
      { lane: 2, position: 42 },
    ],
    shards: [
      { lane: 1, position: 18 },
      { lane: 2, position: 34 },
    ],
    score: 0,
    energy: 100,
    lives: 3,
    paused: false,
    gameOver: false,
    storageStatus: "idle",
    lastError: null,
  };
}

export function toRuntimeSnapshot(state: CircuitSlideState): CircuitSlideRuntime {
  return {
    player: state.player,
    obstacles: state.obstacles,
    shards: state.shards,
    score: state.score,
    energy: state.energy,
    lives: state.lives,
    paused: state.paused,
  };
}

export function moveCircuitSlidePlayer(state: CircuitSlideState, laneDelta: number): CircuitSlideState {
  if (state.paused || state.gameOver) {
    return state;
  }

  return {
    ...state,
    player: {
      ...state.player,
      lane: clamp(state.player.lane + laneDelta, 0, 2),
    },
  };
}

export function advanceCircuitSlide(state: CircuitSlideState): CircuitSlideState {
  if (state.paused || state.gameOver) {
    return state;
  }

  const speed = DIFFICULTY_SPEED[state.difficulty];
  const obstacles = state.obstacles.map((obstacle, index) => advanceEntity(obstacle, speed, 28 + index * 12));
  const shards = state.shards.map((shard, index) => advanceEntity(shard, speed, 22 + index * 10));
  const obstacleHit = obstacles.some((obstacle) => collides(state.player, obstacle));
  const shardHits = shards.filter((shard) => collides(state.player, shard)).length;
  const nextLives = obstacleHit ? Math.max(0, state.lives - 1) : state.lives;
  const score = state.score + 10 + shardHits * 25;

  return {
    ...state,
    obstacles: obstacleHit ? recycleCollisions(obstacles, state.player, 46) : obstacles,
    shards: shardHits > 0 ? recycleCollisions(shards, state.player, 38) : shards,
    score,
    highScore: Math.max(state.highScore, score),
    energy: Math.max(0, state.energy - (state.difficulty === "hard" ? 4 : 3)),
    lives: nextLives,
    gameOver: nextLives === 0,
    paused: nextLives === 0 ? true : state.paused,
  };
}

export function setCircuitSlideDifficulty(
  state: CircuitSlideState,
  difficulty: CircuitSlideDifficulty,
): CircuitSlideState {
  return {
    ...state,
    difficulty,
    lastError: null,
  };
}

export function resetCircuitSlide(state: CircuitSlideState): CircuitSlideState {
  return {
    ...createInitialCircuitSlideState({
      difficulty: state.difficulty,
      highScore: state.highScore,
    }),
    storageStatus: state.storageStatus,
  };
}

export function normalizeDifficulty(value: unknown): CircuitSlideDifficulty {
  return value === "easy" || value === "hard" || value === "medium" ? value : "medium";
}

export function normalizeScore(value: unknown): number {
  return typeof value === "number" && Number.isFinite(value) && value > 0 ? Math.floor(value) : 0;
}

function advanceEntity(entity: CircuitSlideEntity, speed: number, resetPosition: number): CircuitSlideEntity {
  const position = entity.position - speed;

  if (position >= 0) {
    return { ...entity, position };
  }

  return {
    lane: (entity.lane + 1) % 3,
    position: resetPosition,
  };
}

function recycleCollisions(
  entities: CircuitSlideEntity[],
  player: CircuitSlideEntity,
  resetPosition: number,
): CircuitSlideEntity[] {
  return entities.map((entity, index) =>
    collides(player, entity) ? { lane: (entity.lane + index + 1) % 3, position: resetPosition + index * 8 } : entity,
  );
}

function collides(player: CircuitSlideEntity, entity: CircuitSlideEntity): boolean {
  return player.lane === entity.lane && Math.abs(player.position - entity.position) <= 5;
}

function clamp(value: number, min: number, max: number): number {
  return Math.min(max, Math.max(min, value));
}
