import { useCircuitSlideLiteStore } from "./features/circuitslide-lite/circuitslide-lite.store";
import { actPauseGame } from "./features/surf-gameplay/act_pause_game";
import { actRestartGame } from "./features/surf-gameplay/act_restart_game";
import { actStartGame } from "./features/surf-gameplay/act_start_game";
import {
  GameSettingsCircuitslideLite,
  GameplayCircuitslideLite,
  type GameSettingsCircuitslideLiteActionId,
  type GameplayCircuitslideLiteActionId,
} from "./screens";

export default function App() {
  const { state, runtime, actions } = useCircuitSlideLiteStore();
  const gameplayActions: Partial<Record<GameplayCircuitslideLiteActionId, () => void>> = {
    "pause-1": () => actPauseGame(actions),
    "refresh-2": () => actRestartGame(actions),
    "settings-3": actions.openSettings,
    "start-sequence-4": () => actStartGame(actions),
    "start-5": () => actStartGame(actions),
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
    <div
      className="relative flex h-dvh min-h-screen w-full flex-col overflow-hidden bg-background"
      data-setfarm-root="circuitslide-lite"
      data-testid="setfarm-app-root"
    >
      {state.activeScreen === "settings" ? (
        <div className="min-h-0 w-full max-w-full flex-1 overflow-x-hidden [&_*]:min-w-0 [&_*]:max-w-[calc(100vw-2rem)] md:[&_*]:max-w-full">
          <GameSettingsCircuitslideLite actions={settingsActions} />
        </div>
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
