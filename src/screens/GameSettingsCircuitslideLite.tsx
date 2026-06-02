// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Game Settings - CircuitSlide Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bolt, Gauge, Keyboard, Music, RotateCcw, Volume2, X } from "lucide-react";


export type GameSettingsCircuitslideLiteActionId = "close-settings-1" | "easy-2" | "medium-3" | "hard-4" | "reset-to-defaults-5" | "return-6" | "save-config-7";

export interface GameSettingsCircuitslideLiteProps {
  actions?: Partial<Record<GameSettingsCircuitslideLiteActionId, () => void>>;

}

export function GameSettingsCircuitslideLite({ actions }: GameSettingsCircuitslideLiteProps) {
  return (
    <>
      {/* Simulated Game Background (Blurred) */}
      <div className="absolute inset-0 z-0 bg-surface-container-highest" style={{backgroundImage: "radial-gradient(circle at 50% 50%, rgba(17, 25, 40, 0.8) 0%, rgba(2, 6, 23, 1) 100%)"}}>
      {/* Abstract grid pattern for cyberpunk feel */}
      <div className="absolute inset-0 opacity-10" style={{backgroundImage: "linear-gradient(rgba(93, 230, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(93, 230, 255, 0.2) 1px, transparent 1px)", backgroundSize: "40px 40px"}}></div>
      </div>
      {/* Main Settings Modal */}
      <div className="glass-panel z-10 w-full max-w-lg mx-container-padding-mobile md:mx-auto rounded-xl flex flex-col max-h-[921px] shadow-[0_0_30px_rgba(0,0,0,0.8)] relative">
      {/* Header */}
      <div className="p-6 border-b border-white/10 flex justify-between items-center sticky top-0 bg-surface-container-lowest/80 backdrop-blur-md rounded-t-xl z-20">
      <div>
      <h1 className="font-headline-md text-headline-md text-primary uppercase tracking-wider neon-text-primary">System Config</h1>
      <p className="font-hud-label text-hud-label text-outline uppercase tracking-widest mt-1">v.2.4.1_circuit</p>
      </div>
      <button aria-label="Close settings" className="text-outline hover:text-secondary transition-colors" type="button" data-action-id="close-settings-1" onClick={actions?.["close-settings-1"]}>
      <X className="text-[32px]" aria-hidden={true} focusable="false" />
      </button>
      </div>
      {/* Scrollable Content Area */}
      <div className="p-6 overflow-y-auto flex flex-col gap-8">
      {/* Difficulty Section */}
      <section>
      <div className="flex items-center gap-2 mb-4">
      <Gauge  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary" aria-hidden={true} focusable="false" />
      <h2 className="font-hud-label text-hud-label text-secondary uppercase tracking-widest">Protocol Difficulty</h2>
      </div>
      <div className="grid grid-cols-3 gap-3">
      <button className="bg-surface-container-high border border-white/10 rounded-DEFAULT py-3 font-button-text text-button-text text-on-surface hover:border-secondary/50 transition-colors uppercase" type="button" data-action-id="easy-2" onClick={actions?.["easy-2"]}>Easy</button>
      <button className="bg-secondary/20 border border-secondary rounded-DEFAULT py-3 font-button-text text-button-text text-secondary neon-glow-secondary transition-colors uppercase relative overflow-hidden" type="button" data-action-id="medium-3" onClick={actions?.["medium-3"]}>
                              Medium
                              <div className="absolute inset-0 bg-secondary/10 w-full h-full animate-pulse-slow"></div>
      </button>
      <button className="bg-surface-container-high border border-white/10 rounded-DEFAULT py-3 font-button-text text-button-text text-on-surface hover:border-tertiary/50 transition-colors uppercase" type="button" data-action-id="hard-4" onClick={actions?.["hard-4"]}>Hard</button>
      </div>
      </section>
      {/* Sliders Section */}
      <section className="flex flex-col gap-6">
      {/* Speed Slider */}
      <div>
      <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
      <Bolt  style={{fontVariationSettings: "'FILL' 1"}} className="text-secondary" aria-hidden={true} focusable="false" />
      <label className="font-hud-label text-hud-label text-on-surface-variant uppercase tracking-wide">Data Flow Rate</label>
      </div>
      <span className="font-hud-label text-hud-label text-secondary">75%</span>
      </div>
      <div className="relative w-full h-6 flex items-center">
      <input className="w-full z-10" id="speedRange" max="100" min="0" type="range" defaultValue="75" />
      </div>
      </div>
      {/* SFX Volume */}
      <div>
      <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
      <Volume2  style={{fontVariationSettings: "'FILL' 1"}} className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <label className="font-hud-label text-hud-label text-on-surface-variant uppercase tracking-wide">SFX Amplitude</label>
      </div>
      <span className="font-hud-label text-hud-label text-outline">100%</span>
      </div>
      <div className="relative w-full h-6 flex items-center">
      <input className="w-full z-10" max="100" min="0" type="range" defaultValue="100" />
      </div>
      </div>
      {/* Music Volume */}
      <div>
      <div className="flex justify-between items-center mb-2">
      <div className="flex items-center gap-2">
      <Music  style={{fontVariationSettings: "'FILL' 1"}} className="text-on-surface-variant" aria-hidden={true} focusable="false" />
      <label className="font-hud-label text-hud-label text-on-surface-variant uppercase tracking-wide">BGM Amplitude</label>
      </div>
      <span className="font-hud-label text-hud-label text-outline">40%</span>
      </div>
      <div className="relative w-full h-6 flex items-center">
      <input className="w-full z-10" max="100" min="0" type="range" defaultValue="40" />
      </div>
      </div>
      </section>
      {/* Toggles Section */}
      <section className="flex flex-col gap-4 border-t border-white/5 pt-6">
      {/* Toggle Item */}
      <div className="flex justify-between items-center p-3 bg-surface-container-high/50 rounded-DEFAULT border border-white/5">
      <div>
      <h3 className="font-hud-label text-hud-label text-on-surface uppercase">Haptic Feedback</h3>
      <p className="text-xs text-outline mt-1 font-body-base">Device vibration on tile connect</p>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input defaultChecked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface border-4 appearance-none cursor-pointer z-10 transition-colors right-0 border-secondary" id="toggleHaptic" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-secondary cursor-pointer transition-colors" htmlFor="toggleHaptic"></label>
      </div>
      </div>
      {/* Toggle Item */}
      <div className="flex justify-between items-center p-3 bg-surface-container-high/50 rounded-DEFAULT border border-white/5">
      <div>
      <h3 className="font-hud-label text-hud-label text-on-surface uppercase">Visual Bloom</h3>
      <p className="text-xs text-outline mt-1 font-body-base">Enhanced neon glow effects</p>
      </div>
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-surface border-4 appearance-none cursor-pointer z-10 transition-colors right-6 border-outline-variant" id="toggleBloom" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-outline-variant cursor-pointer transition-colors" htmlFor="toggleBloom"></label>
      </div>
      </div>
      </section>
      {/* Help Section */}
      <section className="border-t border-white/5 pt-6">
      <div className="flex items-center gap-2 mb-4">
      <Keyboard  style={{fontVariationSettings: "'FILL' 1"}} className="text-outline" aria-hidden={true} focusable="false" />
      <h2 className="font-hud-label text-hud-label text-outline uppercase tracking-widest">Input Protocols</h2>
      </div>
      <div className="bg-surface-container/50 border border-white/5 rounded-DEFAULT p-4">
      <ul className="flex flex-col gap-3">
      <li className="flex justify-between items-center border-b border-white/5 pb-2">
      <span className="font-body-base text-sm text-on-surface-variant">Navigate Grid</span>
      <div className="flex gap-1">
      <span className="bg-surface-bright px-2 py-1 rounded text-xs font-hud-label text-secondary border border-white/10">W A S D</span>
      <span className="text-outline text-xs self-center">or</span>
      <span className="bg-surface-bright px-2 py-1 rounded text-xs font-hud-label text-secondary border border-white/10">ARROWS</span>
      </div>
      </li>
      <li className="flex justify-between items-center border-b border-white/5 pb-2">
      <span className="font-body-base text-sm text-on-surface-variant">Halt Simulation</span>
      <span className="bg-surface-bright px-3 py-1 rounded text-xs font-hud-label text-secondary border border-white/10">SPACE</span>
      </li>
      <li className="flex justify-between items-center">
      <span className="font-body-base text-sm text-on-surface-variant">Restart Sequence</span>
      <span className="bg-surface-bright px-3 py-1 rounded text-xs font-hud-label text-secondary border border-white/10">R</span>
      </li>
      </ul>
      </div>
      </section>
      <button className="text-tertiary text-xs font-hud-label uppercase tracking-wider self-start hover:text-error transition-colors flex items-center gap-1 mt-2" type="button" data-action-id="reset-to-defaults-5" onClick={actions?.["reset-to-defaults-5"]}>
      <RotateCcw className="text-[16px]" aria-hidden={true} focusable="false" />
                      Reset to Defaults
                  </button>
      </div>
      {/* Footer Actions */}
      <div className="p-6 border-t border-white/10 flex gap-4 bg-surface-container-lowest/80 backdrop-blur-md rounded-b-xl z-20 mt-auto">
      <button className="flex-1 bg-surface-container border border-outline-variant rounded-DEFAULT py-3 font-button-text text-button-text text-on-surface hover:bg-surface-bright transition-colors uppercase" type="button" data-action-id="return-6" onClick={actions?.["return-6"]}>
                      Return
                  </button>
      <button className="flex-1 bg-primary border border-primary-fixed rounded-DEFAULT py-3 font-button-text text-button-text text-on-primary hover:bg-primary-fixed neon-glow-primary transition-colors uppercase" type="button" data-action-id="save-config-7" onClick={actions?.["save-config-7"]}>
                      Save Config
                  </button>
      </div>
      </div>
      
    </>
  );
}
