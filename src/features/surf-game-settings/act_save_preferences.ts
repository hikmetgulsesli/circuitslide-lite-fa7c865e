export interface SavePreferencesTarget {
  saveConfig: () => void;
}

export function actSavePreferences(target: SavePreferencesTarget): void {
  target.saveConfig();
}
