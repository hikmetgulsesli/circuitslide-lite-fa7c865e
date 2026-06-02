// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Gameplay - CircuitSlide Lite
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Wire interactive controls through the typed actions prop
// 4. Replace placeholder data with props/state

import { Bolt, LogOut, Pause, Play, RefreshCw, Settings, Timer, Trophy } from "lucide-react";


export type GameplayCircuitslideLiteActionId = "pause-1" | "refresh-2" | "settings-3" | "start-sequence-4" | "start-5";

export interface GameplayCircuitslideLiteProps {
  actions?: Partial<Record<GameplayCircuitslideLiteActionId, () => void>>;
  runtime?: { player?: { lane?: number; position?: number }; obstacles?: Array<{ lane?: number; position?: number }>; shards?: Array<{ lane?: number; position?: number }>; score?: number; energy?: number; lives?: number; paused?: boolean };

}

export function GameplayCircuitslideLite({ actions, runtime }: GameplayCircuitslideLiteProps) {
  const score = runtime?.score ?? 0;
  const energy = runtime?.energy ?? 100;
  const lives = runtime?.lives ?? 3;
  const paused = runtime?.paused ?? false;
  const timerText = paused ? "PAUSED" : "ACTIVE";

  return (
    <>
      {/* Ambient Grid Overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/10 via-background to-background"></div>
      {/* TopAppBar JSON Component */}
      <header className="bg-background/80 backdrop-blur-xl fixed top-0 w-full border-b border-white/10 flex justify-between items-center px-container-padding-mobile md:px-container-padding-desktop h-16 w-full z-50">
      <div className="flex items-center">
      <span className="font-headline-md text-headline-md italic tracking-tighter text-secondary drop-shadow-[0_0_8px_rgba(93,230,255,0.6)]">CIRCUIT_SLIDE</span>
      </div>
      <div className="flex items-center gap-4">
      <button aria-label="Pause" className="text-outline hover:text-primary transition-colors duration-300 active:scale-95 transition-transform" data-action="ACT_PAUSE_GAME" type="button" data-action-id="pause-1" onClick={actions?.["pause-1"]}>
      <Pause  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Refresh" className="text-outline hover:text-primary transition-colors duration-300 active:scale-95 transition-transform" data-action="ACT_RESTART_GAME" type="button" data-action-id="refresh-2" onClick={actions?.["refresh-2"]}>
      <RefreshCw  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      <button aria-label="Settings" className="text-outline hover:text-primary transition-colors duration-300 active:scale-95 transition-transform" type="button" data-action-id="settings-3" onClick={actions?.["settings-3"]}>
      <Settings  style={{fontVariationSettings: "'FILL' 0"}} aria-hidden={true} focusable="false" />
      </button>
      </div>
      </header>
      {/* Main Game Area */}
      <main className="flex-1 flex items-center justify-center pt-16 relative z-10 w-full max-w-max-width mx-auto px-container-padding-desktop">
      {/* Puzzle Grid Canvas */}
      <div className="relative flex items-center justify-center w-full max-w-4xl aspect-square md:aspect-video glass-panel rounded-xl p-8">
      {/* Power Source (Left) */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-16 h-16 rounded-full bg-secondary-container flex items-center justify-center neon-glow-cyan z-20">
      <Bolt  style={{fontVariationSettings: "'FILL' 1"}} className="text-background font-bold text-3xl" aria-hidden={true} focusable="false" />
      </div>
      {/* Exit Node (Right) */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-16 h-16 rounded-full glass-panel border-outline flex items-center justify-center z-20">
      <LogOut className="text-outline text-3xl" aria-hidden={true} focusable="false" />
      </div>
      {/* The Grid */}
      <div className="grid grid-cols-5 grid-rows-5 gap-grid-gap w-full h-full p-4 relative z-10">
      {/* Row 1 */}
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors">
      <div className="absolute inset-0 flex items-center justify-center opacity-30 group-hover:opacity-100 transition-opacity"><div className="w-2 h-full bg-outline rounded-full"></div></div>
      </div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      {/* Row 2 */}
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors">
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-2 bg-outline rounded-full transform rotate-45"></div></div>
      </div>
      <div className="bg-surface-container-high border border-secondary rounded-DEFAULT relative overflow-hidden neon-box circuit-pulse z-20">
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-2 h-full bg-secondary rounded-full neon-glow-cyan"></div></div>
      </div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      {/* Row 3 (Main Path) */}
      <div className="bg-surface-container-high border border-secondary rounded-DEFAULT relative overflow-hidden neon-box circuit-pulse z-20">
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-2 bg-secondary rounded-full neon-glow-cyan"></div></div>
      </div>
      <div className="bg-surface-container-high border border-secondary rounded-DEFAULT relative overflow-hidden neon-box circuit-pulse z-20">
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-2 bg-secondary rounded-full neon-glow-cyan"></div></div>
      </div>
      <div className="bg-surface-container-high border border-secondary rounded-DEFAULT relative overflow-hidden neon-box circuit-pulse z-20">
      <div className="absolute inset-0 flex items-center justify-center">
      <div className="w-full h-2 bg-secondary rounded-full absolute"></div>
      <div className="w-2 h-1/2 bg-secondary rounded-b-full absolute top-0"></div>
      </div>
      </div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors">
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-full h-2 bg-outline rounded-full"></div></div>
      </div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      {/* Row 4 */}
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors">
      <div className="absolute inset-0 flex items-center justify-center"><div className="w-2 h-full bg-outline rounded-full"></div></div>
      </div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      {/* Row 5 */}
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      <div className="bg-surface-container-high border border-outline/20 rounded-DEFAULT relative overflow-hidden group cursor-pointer hover:border-secondary/50 transition-colors"></div>
      </div>
      </div>
      </main>
      {/* SideNavBar JSON Component (HUD) */}
      <nav className="bg-surface-container-lowest/50 backdrop-blur-md fixed right-4 top-20 rounded-xl border border-white/5 shadow-[0_0_15px_rgba(255,178,183,0.3)] animate-pulse-slow flex flex-col gap-grid-gap p-4 w-fit z-40 hidden md:flex">
      <div className="mb-4 pb-2 border-b border-white/10 text-center">
      <h2 className="font-hud-label text-hud-label text-secondary uppercase tracking-widest">SYSTEM_HUD</h2>
      <p className="font-hud-label text-[10px] text-tertiary mt-1 opacity-80">{paused ? "PAUSED" : "CONNECTED"}</p>
      </div>
      <div className="flex flex-col gap-4">
      {/* Score */}
      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
      <Trophy className="text-on-surface-variant font-hud-label" aria-hidden={true} focusable="false" />
      <span className="text-on-surface-variant font-hud-label uppercase">SCORE: {score}</span>
      </div>
      {/* Level */}
      <div className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors">
      <Bolt className="text-on-surface-variant font-hud-label" aria-hidden={true} focusable="false" />
      <span className="text-on-surface-variant font-hud-label uppercase">ENERGY: {energy}</span>
      </div>
      {/* Timer (Active) */}
      <div className="flex items-center gap-3 p-2 rounded-lg bg-white/5">
      <Timer className="text-tertiary font-hud-timer neon-glow-pink" aria-hidden={true} focusable="false" />
      <span className="text-tertiary font-hud-timer neon-glow-pink">{lives} LIVE{lives === 1 ? "" : "S"}</span>
      </div>
      </div>
      <div className="mt-4 pt-4 border-t border-white/10 flex flex-col gap-2">
      <button className="bg-secondary text-on-primary font-button-text text-button-text uppercase py-2 px-4 rounded-DEFAULT hover:shadow-[0_0_12px_rgba(93,230,255,0.8)] transition-shadow w-full" data-action="ACT_START_GAME" type="button" data-action-id="start-sequence-4" onClick={actions?.["start-sequence-4"]}>
                      Start Sequence
                  </button>
      </div>
      </nav>
      {/* Mobile Bottom Controls Overlay (visible only on small screens) */}
      <div className="md:hidden fixed bottom-4 left-4 right-4 flex justify-between items-end z-40 pointer-events-none">
      <div className="glass-panel p-3 rounded-lg flex flex-col gap-1 pointer-events-auto border-tertiary/30">
      <span className="font-hud-label text-[10px] text-tertiary uppercase">Run Status</span>
      <span className="text-tertiary font-hud-timer text-2xl neon-glow-pink leading-none">{timerText}</span>
      </div>
      <button className="bg-secondary text-on-primary font-button-text text-button-text uppercase h-14 px-6 rounded-full shadow-[0_0_15px_rgba(93,230,255,0.4)] pointer-events-auto flex items-center gap-2" data-action="ACT_START_GAME" type="button" data-action-id="start-5" onClick={actions?.["start-5"]}>
      <Play  style={{fontVariationSettings: "'FILL' 1"}} aria-hidden={true} focusable="false" />
                  Start
              </button>
      </div>
    </>
  );
}
