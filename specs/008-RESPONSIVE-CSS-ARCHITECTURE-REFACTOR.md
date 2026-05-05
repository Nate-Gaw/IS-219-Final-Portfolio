# SPEC 8 — RESPONSIVE CSS ARCHITECTURE REFACTOR (SCROLLYTELLING FIT SYSTEM)

## Objective

Refactor the CSS architecture to ensure that:

- ALL content dynamically fits within the viewport
- NO content overflows off-screen (especially in scrollytelling steps)
- ALL content remains:
  - **below the header**
  - **above the bottom of the viewport**
- Layout scales cleanly across:
  - Desktop
  - Tablet
  - Mobile
- UI maintains a **professional, stable, non-glitchy appearance**

---

# 🧠 CORE PROBLEM

Current issues:

- Fixed heights (e.g. `100vh`) ignore header height
- Content boxes exceed available vertical space
- Text + cards overflow screen on certain steps (e.g. Step 3)
- No scaling system for typography or containers
- Layout assumes ideal screen size → breaks on others

---

# 🎯 DESIGN PRINCIPLE (MANDATORY)

> The viewport is a constraint system — content must adapt to it, not exceed it.

---

# 🧱 ARCHITECTURE CHANGE OVERVIEW

We introduce a **3-layer responsive system**:


Viewport Constraint Layer
↓
Layout Scaling System
↓
Content Adaptation Rules


---

# 🧭 PART 1 — VIEWPORT CONSTRAINT SYSTEM

## 🔥 CRITICAL FIX

Replace ALL usages of:

```css
height: 100vh;
WITH:
height: calc(100vh - var(--header-height));
DEFINE GLOBAL VARIABLE
:root {
  --header-height: 80px;
}
APPLY TO ALL SCROLL STEPS
.step {
  height: calc(100vh - var(--header-height));
}
RESULT
Content NEVER goes behind header
Step height is true usable viewport
🧱 PART 2 — CONTENT CONTAINER SYSTEM
🔥 INTRODUCE SAFE CONTENT WRAPPER

Every step MUST contain:

<div class="step-inner">
  <!-- content -->
</div>
CSS RULES
.step-inner {
  height: 100%;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 2rem;
  box-sizing: border-box;

  overflow: hidden;
}
RESULT
Content is vertically centered
Content is bounded within viewport
No overflow outside step
🧠 PART 3 — FLEXIBLE GRID SYSTEM (CARDS)
🔥 PROBLEM

Cards currently:

fixed size
overflow horizontally or vertically
SOLUTION: AUTO-FIT GRID

Replace rigid layouts with:

.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1rem;
  width: 100%;
  max-width: 1000px;
}
CARD RULES
.card {
  padding: 1rem;
  border-radius: 12px;

  min-height: 80px;
  max-height: 100%;

  overflow: hidden;
}
RESULT
Cards shrink/expand based on screen
No overflow beyond container
Maintains clean grid structure
🔤 PART 4 — TYPOGRAPHY SCALING SYSTEM
🔥 PROBLEM

Text sizes are fixed → overflow on smaller screens

SOLUTION: CLAMP-BASED TYPOGRAPHY

Replace ALL fixed font sizes with:

h1 {
  font-size: clamp(1.8rem, 4vw, 3rem);
}

h2 {
  font-size: clamp(1.4rem, 3vw, 2rem);
}

p {
  font-size: clamp(0.9rem, 1.5vw, 1.1rem);
}
RESULT
Text shrinks on small screens
Expands on large screens
Prevents overflow
📦 PART 5 — CONTENT COMPRESSION RULES
🔥 WHEN SPACE IS LIMITED:

The system MUST prioritize:

Fit within viewport
Maintain readability
Avoid overflow
CSS STRATEGIES
1. Reduce spacing dynamically
.step-inner {
  padding: clamp(1rem, 2vw, 2rem);
}
2. Limit vertical stacking overflow
.card-grid {
  max-height: 70%;
  overflow: hidden;
}
3. Prevent text overflow
.card p {
  overflow: hidden;
  text-overflow: ellipsis;
}
🧠 PART 6 — SCROLL STEP ALIGNMENT FIX
🔥 PROBLEM

Content appears partially cut between steps

FIX

Ensure:

.step {
  display: flex;
  align-items: center;
  justify-content: center;
}
RESULT
Each step = full “scene”
Content always centered
No partial clipping
🧪 PART 7 — RESPONSIVENESS BREAKPOINTS
REQUIRED BREAKPOINTS
Desktop (≥1200px)
full layout
multi-column grid
Tablet (768px–1199px)
.card-grid {
  grid-template-columns: repeat(2, 1fr);
}
Mobile (<768px)
.card-grid {
  grid-template-columns: 1fr;
}
ADDITIONAL MOBILE RULES
.step-inner {
  justify-content: flex-start;
}
🧪 QA REQUIREMENTS (MANDATORY)
1. VIEWPORT FIT TEST

For each step:

No vertical scroll inside step
No content cut off
No overlap with header
2. SCREEN SIZE TEST MATRIX

Test at:

1920x1080
1366x768
1024x768
768x1024
375x812 (mobile)
3. CONTENT STABILITY TEST
No jumping layout
No flickering
No overflow on resize
4. TEXT SCALING VALIDATION
Text never exceeds container
No horizontal scroll
5. CARD GRID VALIDATION
Cards never overflow parent
Grid adapts correctly
🚫 FAILURE CONDITIONS

Spec is INVALID if:

Any text or card goes off-screen
Content overlaps header
Content exceeds viewport height
Layout breaks at any tested resolution
Fixed sizes remain in use
✅ SUCCESS CRITERIA

This spec is complete when:

ALL steps fully fit within visible viewport
Layout adapts dynamically across screen sizes
No content overflow exists anywhere
UI remains clean and professional at all sizes
Typography and layout scale smoothly
🧠 FINAL DIRECTIVE

You are not designing for a screen size.

You are designing a constraint-based layout system where:

every pixel must adapt to the viewport without breaking structure, hierarchy, or readability.