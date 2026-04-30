# SPEC 4 — SCROLLYTELLING HOMEPAGE ARCHITECTURE (index2.html)

## Objective

Create a **second homepage variant (`index2.html`)** that implements a **scrollytelling architecture shell**.

This is NOT a content page.

This is ONLY the structural foundation for a narrative-driven, scroll-based portfolio experience.

All content will be injected in later specs.

---

# 🧠 WHAT IS SCROLLYTELLING (ARCHITECTURAL DEFINITION)

Scrollytelling is a UI/UX pattern where:

> Content is revealed progressively as the user scrolls, often triggering visual or layout transitions tied to scroll position.

### Core Principles:
- Narrative is **scroll-driven**
- Sections are **sequential story beats**
- Content appears via **progressive disclosure**
- Layout changes are tied to scroll position (not clicks)
- Often uses **sticky sections + transition states**

---

# 🧱 KEY DESIGN PATTERN

Scrollytelling =


Sticky Visual Layer (fixed)
+
Scrolling Narrative Layer (changing content)


---

# 🌐 FILE STRUCTURE REQUIREMENT

The AI agent MUST create:


/index2.html (NEW scrollytelling homepage)
/assets/
/js/
scroll.js (scrollytelling controller)
/css/
scroll.css (scroll layout system)


---

# 🚫 HARD CONSTRAINTS (CRITICAL)

The AI agent MUST:

- NOT include any real content (ONLY placeholders)
- NOT reuse index.html content structure
- NOT build full UI components yet
- NOT inject project or resume content
- ONLY build structural scroll system

---

# 🧭 index2.html — GLOBAL STRUCTURE

## REQUIRED LAYOUT MODEL

The page must follow this structure:


[Sticky Visual Container]
+
[Scroll Narrative Sections]


---

## TOP-LEVEL STRUCTURE

```html
<body>

  <div id="scrolly-container">

      <div id="sticky-visual">
          <!-- persistent visual area -->
      </div>

      <div id="scroll-sections">
          <section class="step"></section>
          <section class="step"></section>
          <section class="step"></section>
          <section class="step"></section>
          <section class="step"></section>
      </div>

  </div>

</body>
🧠 COMPONENT DESIGN
1. Sticky Visual Layer
ID: sticky-visual
Purpose:
Always visible
Changes state based on scroll position
Requirements:
Fixed position (top: 0)
Full viewport height
Placeholder box inside
Content:
Single placeholder container:
“VISUAL SYSTEM PLACEHOLDER”
2. Scroll Narrative Layer
Class: step

Each step represents:

A “beat” in the narrative timeline

Requirements:
Minimum 5 steps
Each step = full viewport height (100vh)
Empty placeholder blocks only
No real text or content
🧱 SCROLL ARCHITECTURE MODEL
Required Behavior Model (NOT IMPLEMENTED FULLY YET)

This spec defines structure only, but must support:

Scroll-driven state changes:
Step 1 → updates sticky visual state 1
Step 2 → updates sticky visual state 2
Step 3 → etc.
⚙️ JAVASCRIPT ARCHITECTURE (scroll.js)
Purpose:

Create foundation for scroll state tracking.

REQUIRED STRUCTURE

AI agent MUST implement:

1. Scroll Observer System
Detect current active .step
Track scroll position
2. State Manager (SIMPLE)

Pseudo-structure:

currentStep = 0

onScroll:
    detect visible step
    update state
    update sticky visual placeholder
3. DOM Mapping

Each .step must map to:

step-index → visual state index
IMPORTANT:

No animations or effects required yet.
Only structure + hooks.

🎨 CSS ARCHITECTURE (scroll.css)
Layout System
REQUIRED RULES:
1. Sticky Layer
position: fixed
top: 0
height: 100vh
width: 100%
2. Scroll Layer
position: relative
z-index above sticky
3. Step Sections
height: 100vh
display: flex (center placeholder)
SPACING MODEL
Each step is a full “scene”
Vertical scroll drives progression
🧠 DESIGN INTENT (IMPORTANT)

This architecture is meant to support:

1. Narrative Portfolio Flow

Instead of pages:

You are telling a story through scroll progression

2. System-Based Reveal

Each scroll step will later represent:

AI systems
FAA experience
RAG system
Decision system

But NOT YET.

3. Visual Anchoring

Sticky layer ensures:

user always sees system context while scrolling

🧪 QA REQUIREMENTS
1. Structural Validation
Must render without content errors
All sections must exist even if empty
2. Scroll Integrity Check
Each .step must be full viewport height
Scroll must trigger step changes correctly
3. Separation Check
Sticky layer must not scroll
Scroll layer must not be fixed
4. Script Isolation
scroll.js must not contain content logic
Only state + detection logic allowed
5. Dual Homepage Check
index.html remains untouched
index2.html is independent system
🚫 FAILURE CONDITIONS

Spec is INVALID if:

Real content is added
Sections are merged into static layout
Sticky and scroll layers are not separated
No step-based structure exists
Scroll system is missing
✅ SUCCESS CRITERIA

This spec is complete when:

index2.html exists as a fully structured scrollytelling shell
Sticky visual system is implemented (empty placeholder only)
Scroll steps exist and fill viewport
Scroll detection architecture is in place
No content is included anywhere
System is ready for future narrative injection
🧠 FINAL DIRECTIVE

This is not a homepage.

This is a:

narrative engine that will later transform your portfolio into a scroll-driven AI systems story.

Do not optimize for content.

Only optimize for:

structured storytelling infrastructure.