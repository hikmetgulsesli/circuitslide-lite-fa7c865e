import { useCircuitSlideLiteStore } from "./features/circuitslide-lite/circuitslide-lite.store";
import {
  GameSettingsCircuitslideLite,
  GameplayCircuitslideLite,
  type GameSettingsCircuitslideLiteActionId,
  type GameplayCircuitslideLiteActionId,
} from "./screens";

export default function App() {
  const { state, runtime, actions } = useCircuitSlideLiteStore();
  const gameplayActions: Partial<Record<GameplayCircuitslideLiteActionId, () => void>> = {
    "pause-1": actions.pause,
    "refresh-2": actions.reset,
    "settings-3": actions.openSettings,
    "start-sequence-4": actions.tick,
    "start-5": actions.start,
  };
  const settingsActions: Partial<Record<GameSettingsCircuitslideLiteActionId, () => void>> = {
    "close-settings-1": actions.closeSettings,
    "easy-2": () => actions.setDifficulty("easy"),
    "medium-3": () => actions.setDifficulty("medium"),
    "hard-4": () => actions.setDifficulty("hard"),
    "reset-to-defaults-5": actions.resetDefaults,
    "return-6": actions.closeSettings,
    "save-config-7": actions.saveConfig,
  };

  return (
    <div data-setfarm-root="circuitslide-lite" data-testid="setfarm-app-root">
      {state.activeScreen === "settings" ? (
        <GameSettingsCircuitslideLite actions={settingsActions} />
      ) : (
        <GameplayCircuitslideLite actions={gameplayActions} runtime={runtime} />
      )}
      {state.lastError ? (
        <div
          className="fixed bottom-4 left-1/2 z-50 max-w-[min(28rem,calc(100vw-2rem))] -translate-x-1/2 rounded-lg border border-outline bg-surface px-4 py-3 text-sm text-on-surface shadow-lg"
          role="status"
        >
          {state.lastError}
        </div>
      ) : null}
    </div>
  );
}
