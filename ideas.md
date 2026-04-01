# Scroll Morph Hero — Design Brainstorm

## Context
The centrepiece of this site is a scroll-driven hero animation: 20 flip-cards scatter, form a line, then morph into a rotating bottom arc. The surrounding page must frame this experience without competing with it.

---

<response>
<text>

## Idea A — "Brutalist Editorial"

**Design Movement:** Swiss International Typographic Style meets Digital Brutalism  
**Probability:** 0.07

**Core Principles:**
1. Raw, unapologetic structure — thick rules, stark contrast, zero decoration for its own sake
2. Typography as architecture — type sizes vary wildly (12px labels vs 96px headlines)
3. Asymmetric tension — content blocks deliberately off-balance
4. Monochrome base with a single acid accent (electric yellow #F5FF00)

**Color Philosophy:** Near-black (#0D0D0D) background with white text and one violent accent. The yellow is used only on interactive or transitional moments — it should feel like a warning light.

**Layout Paradigm:** Full-bleed sections separated by thick 3px horizontal rules. Navigation is a fixed left-side vertical strip with rotated labels. Hero takes 100vh. Below it: a two-column asymmetric layout (70/30 split).

**Signature Elements:**
1. Oversized section numbers (01, 02, 03) in a light-weight monospace
2. Thick horizontal rule dividers that bleed edge-to-edge
3. Uppercase tracking-widest labels above every heading

**Interaction Philosophy:** Hover states use color inversion (white bg, black text). No easing — instant state changes reinforce the brutalist ethos.

**Animation:** The scroll-morph hero runs as-is. Page transitions use a horizontal wipe (clip-path). No parallax elsewhere — the hero is the only moving thing.

**Typography System:**
- Display: "Space Grotesk" 700 — headlines
- Body: "IBM Plex Mono" 400 — all body copy and labels
- Scale: 12 / 14 / 18 / 32 / 56 / 96px

</text>
<probability>0.07</probability>
</response>

---

<response>
<text>

## Idea B — "Luminous Minimal" ✅ CHOSEN

**Design Movement:** Refined Minimalism with Luminous Depth  
**Probability:** 0.06

**Core Principles:**
1. Silence is a design element — vast negative space lets the animation breathe
2. Layered luminosity — soft glows, frosted glass, and subtle gradients create depth without noise
3. Typographic restraint — one serif display font, one geometric sans body
4. Every element earns its place — nothing decorative that doesn't serve the animation

**Color Philosophy:** Off-white (#FAFAFA) hero background (matching the component's own bg) transitions to a deep ink (#0C0C14) for below-the-fold sections. The transition itself is a design moment. Accent: a cool periwinkle (#7C8CF8) used sparingly for interactive states and highlights.

**Layout Paradigm:** Full-viewport hero (the animation). Below: a centered single-column narrative section with generous line-height, then a 3-column feature grid. Navigation is a minimal top bar that fades to transparent over the hero.

**Signature Elements:**
1. A soft radial glow behind the animation area (matches the arc's center)
2. Frosted-glass nav bar that becomes visible on scroll
3. Thin 1px horizontal rules as section separators, with a periwinkle gradient fade

**Interaction Philosophy:** Hover states use gentle scale + opacity transitions (200ms ease-out). The flip-card interaction (built into the component) is the primary delight.

**Animation:** Hero animation is the star. Below-fold sections use subtle fade-up entrance animations triggered by IntersectionObserver. Nav fades in with a blur transition.

**Typography System:**
- Display: "Playfair Display" 400/700 — hero headline and section titles
- Body: "DM Sans" 300/400/500 — all body copy, labels, nav
- Scale: 11 / 13 / 16 / 24 / 40 / 64px

</text>
<probability>0.06</probability>
</response>

---

<response>
<text>

## Idea C — "Kinetic Noir"

**Design Movement:** Neo-Noir with Kinetic Typography  
**Probability:** 0.05

**Core Principles:**
1. Dark as default — deep charcoal (#111118) everywhere
2. Motion is narrative — text elements drift and pulse subtly
3. Neon accents used like film-noir lighting — selective, atmospheric
4. Grain texture overlay on all sections for cinematic feel

**Color Philosophy:** Deep charcoal base, with teal (#00E5C8) and magenta (#FF2D78) neon accents. The hero component's #FAFAFA bg becomes a "screen" floating in the dark — a deliberate contrast.

**Layout Paradigm:** The hero is presented as a "screen" with a dark frame/border around it, like a cinema screen. Below: full-bleed dark sections with oversized kinetic text.

**Signature Elements:**
1. A grain/noise SVG filter applied as a CSS overlay on all sections
2. Neon glow text-shadow on key headings
3. The hero component framed in a dark border with corner brackets (like a viewfinder)

**Interaction Philosophy:** Hover states trigger neon glow intensification. Cursor changes to a crosshair over the hero.

**Animation:** Hero runs as-is within the frame. Page sections use staggered letter-by-letter text reveal animations.

**Typography System:**
- Display: "Bebas Neue" — all caps, ultra-condensed headlines
- Body: "Outfit" 300/400 — body copy
- Scale: 12 / 14 / 18 / 28 / 48 / 88px

</text>
<probability>0.05</probability>
</response>

---

## Selected Approach: **Idea B — Luminous Minimal**

Off-white hero → deep ink below fold. Playfair Display + DM Sans. Periwinkle accent. Frosted nav. Soft radial glow. The animation is the hero — everything else serves it.
