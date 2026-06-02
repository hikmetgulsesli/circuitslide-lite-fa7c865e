---
name: CircuitSlide Lite Design System
colors:
  surface: '#0b1326'
  surface-dim: '#0b1326'
  surface-bright: '#31394d'
  surface-container-lowest: '#060e20'
  surface-container-low: '#131b2e'
  surface-container: '#171f33'
  surface-container-high: '#222a3d'
  surface-container-highest: '#2d3449'
  on-surface: '#dae2fd'
  on-surface-variant: '#c2c6d6'
  inverse-surface: '#dae2fd'
  inverse-on-surface: '#283044'
  outline: '#8c909f'
  outline-variant: '#424754'
  surface-tint: '#adc6ff'
  primary: '#adc6ff'
  on-primary: '#002e6a'
  primary-container: '#4d8eff'
  on-primary-container: '#00285d'
  inverse-primary: '#005ac2'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#ffb2b7'
  on-tertiary: '#67001b'
  tertiary-container: '#ff516a'
  on-tertiary-container: '#5b0017'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#d8e2ff'
  primary-fixed-dim: '#adc6ff'
  on-primary-fixed: '#001a42'
  on-primary-fixed-variant: '#004395'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#ffdadb'
  tertiary-fixed-dim: '#ffb2b7'
  on-tertiary-fixed: '#40000d'
  on-tertiary-fixed-variant: '#92002a'
  background: '#0b1326'
  on-background: '#dae2fd'
  surface-variant: '#2d3449'
typography:
  display-lg:
    fontFamily: Inter
    fontSize: 48px
    fontWeight: '800'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '700'
    lineHeight: '1.2'
  hud-timer:
    fontFamily: JetBrains Mono
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1'
    letterSpacing: 0.05em
  hud-label:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: 16px
  body-base:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  button-text:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: 20px
rounded:
  sm: 0.125rem
  DEFAULT: 0.25rem
  md: 0.375rem
  lg: 0.5rem
  xl: 0.75rem
  full: 9999px
spacing:
  unit: 4px
  grid-gap: 8px
  container-padding-mobile: 16px
  container-padding-desktop: 24px
  max-width: 1200px
---

## Brand & Style
The design system is engineered to evoke a high-velocity, technical atmosphere tailored for a browser-based puzzle experience. It draws heavily from **Cyberpunk** and **Neon-Futurism**, utilizing a dark-mode-first approach that prioritizes high-contrast "light-emitting" UI elements against a void-like background.

The aesthetic combines **Glassmorphism** for non-intrusive overlays with **High-Contrast Neon** accents to signal state changes and connectivity. The emotional goal is to make the player feel like they are interfacing with a high-speed mainframe, where every move is precise and every connection is high-voltage.

## Colors
This design system utilizes a high-octane palette designed for visibility in dark environments.

- **Background (Void):** A deep, near-black slate (#020617) used to maximize the "glow" effect of neon elements.
- **Primary (Electric Blue):** The core UI color used for primary actions, buttons, and navigation.
- **Secondary (Neon Cyan):** Reserved for "Active," "Connected," or "Powered" states. This color should utilize an outer glow (bloom) effect.
- **Tertiary (Neon Pink):** Dedicated to high-urgency elements, including timers, warnings, and critical errors.
- **Neutral (Slate/Charcoal):** Used for base surfaces and containers where high contrast is not required.

## Typography
The typographic hierarchy balances modern readability with technical precision. 

- **Inter** is used for the majority of the UI to ensure clarity at small sizes and high-impact branding in large displays.
- **JetBrains Mono** is reserved for the HUD (Heads-Up Display), including the game timer, score, and technical readouts. This monospaced choice reinforces the "circuitry" theme and ensures that shifting numbers do not cause layout jitters.
- **Text Transformations:** Use uppercase for labels and buttons to mimic terminal interfaces.

## Layout & Spacing
This design system utilizes a **compact fluid grid** optimized for browser viewports. The logic is centered on a 4px base unit to maintain technical precision.

- **Game Board:** Should be centered with a maximum width to prevent excessive eye travel. Tiles use a tight 8px gutter to feel interconnected.
- **Responsive Behavior:** On mobile, the HUD transitions from a side-bar to a top-pinned bar to maximize vertical space for the puzzle grid. 
- **Z-Axis:** Layout is flat on the base layer, with glassmorphic modals appearing on a higher Z-index during "Game Over" or "Settings" states.

## Elevation & Depth
Depth is achieved through **luminance and transparency** rather than traditional shadows.

- **The Base:** Solid #020617 background.
- **The Glass Layer:** Overlays use a backdrop-filter (blur: 12px) and a semi-transparent fill of the neutral color. A 1px border of low-opacity white (rgba(255,255,255,0.1)) defines the edge.
- **The Neon Glow:** Active components do not use shadows; they use `box-shadow` or `drop-shadow` with 0px blur and a wide spread of the accent color at 40-60% opacity to simulate a glowing light source.

## Shapes
The shape language is **geometric and sharp**. A subtle 0.25rem (4px) corner radius is applied to buttons and cards to prevent the UI from feeling "aggressive," but it remains strictly "Soft" rather than "Rounded."

Puzzle tiles should remain perfectly square (0px radius) to emphasize the grid-based nature of the circuitry, while UI containers like the HUD and menus use the soft 4px radius.

## Components
- **Buttons:** High-contrast backgrounds (Electric Blue). On hover, the button should trigger a "Bloom" effect (Cyan glow). Text is always uppercase Inter.
- **Puzzle Tiles:** Dark surfaces with 1px inset borders. When "Powered," the border and center icon switch to Neon Cyan with an external glow.
- **Timer/HUD:** Monospaced text in Neon Pink. Backgrounds should be minimal—either a simple stroke or a glassmorphic pane.
- **Input Fields:** Dark background with a 1px Electric Blue bottom border only. On focus, the border glows Cyan.
- **Modals:** Centered glassmorphic containers. All content within should be vertically stacked with high internal padding (32px).
- **Progress Bars:** Thin 4px tracks in neutral slate, with a Neon Cyan fill that has a subtle pulse animation.