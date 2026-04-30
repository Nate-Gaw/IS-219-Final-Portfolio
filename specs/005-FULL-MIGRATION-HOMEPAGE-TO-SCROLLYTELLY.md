# SPEC 5 (v2) — SCROLLYTELLING ARCHITECTURE REBUILD (ZERO-COUPLING SYSTEM)

## Objective

Design and implement a **production-grade Scrollytelling Architecture v2** that fully separates:

- Content (DATA layer)
- Rendering (UI layer)
- Scroll behavior (ENGINE layer)

This spec introduces a **clean, scalable system design** inspired by:
- Clean Architecture (Uncle Bob)
- Component-driven UI design (GoF principles)
- Data-driven front-end rendering patterns

---

# 🧠 CORE DESIGN GOAL

Replace all hardcoded scroll content with a **fully decoupled system**:

> Content is data  
> UI is renderer  
> Scroll is state machine  

NO overlap between responsibilities.

---

# 🚨 CRITICAL CONSTRAINTS

The AI agent MUST:

- NOT embed content inside HTML steps
- NOT couple scroll logic with UI text
- NOT reuse index.html or index2.html directly
- NOT hardcode any system or project content into DOM
- ONLY use JSON-driven content rendering

---

# 🌐 OUTPUT FILES (REQUIRED)

The AI agent MUST create:


/index3.html
/assets/js/
scroll-engine.js
renderer.js
content-data.json
/assets/css/
scrolly-v2.css


---

# 🧱 SYSTEM ARCHITECTURE OVERVIEW

## 3-LAYER MODEL


┌──────────────────────────────┐
│ CONTENT LAYER │
│ content-data.json (DATA) │
└─────────────┬────────────────┘
↓
┌──────────────────────────────┐
│ RENDERER LAYER │
│ renderer.js (UI builder) │
└─────────────┬────────────────┘
↓
┌──────────────────────────────┐
│ SCROLL ENGINE │
│ scroll-engine.js (STATE) │
└──────────────────────────────┘


---

# 📦 LAYER 1 — CONTENT LAYER (JSON ONLY)

## File: `/assets/js/content-data.json`

### RULE:
- NO HTML
- NO styling
- ONLY structured narrative data

---

## REQUIRED STRUCTURE:

```json id="content_schema"
{
  "steps": [
    {
      "id": 0,
      "type": "hero",
      "title": "...",
      "subtitle": "...",
      "support": "..."
    },
    {
      "id": 1,
      "type": "credibility",
      "items": []
    },
    {
      "id": 2,
      "type": "capabilities",
      "items": []
    },
    {
      "id": 3,
      "type": "system",
      "title": "...",
      "description": "...",
      "diagram": "..."
    }
  ]
}
CONTENT MIGRATION RULES

All previous spec content MUST be mapped into:

Step types:
hero (identity)
credibility (FAA experience)
capabilities (AI systems)
system (RAG system)
system (Document RAG)
system (College Decision AI)
closing (identity reinforcement)
🧠 LAYER 2 — RENDERER SYSTEM
File: /assets/js/renderer.js
RESPONSIBILITY:

Convert JSON → DOM elements

RULES:
NO scroll logic
NO state tracking
ONLY rendering functions
REQUIRED FUNCTIONS:
1. renderStep(stepData)
function renderStep(step) {
  // returns DOM node for a step
}
2. renderAllSteps(content)
function renderAllSteps(data) {
  data.steps.forEach(step => renderStep(step))
}
IMPORTANT:

Renderer MUST be:

completely unaware of scroll position

🧠 LAYER 3 — SCROLL ENGINE
File: /assets/js/scroll-engine.js
RESPONSIBILITY:

Track scroll position and emit active step state

RULES:
NO DOM construction
NO content knowledge
ONLY state detection
REQUIRED SYSTEM:
1. Intersection Observer
observe(".step")
2. Active State Manager
let activeStep = null
3. State Emission
onStepChange(stepId)
OUTPUT CONTRACT:

Scroll engine ONLY outputs:

activeStepChanged → stepId
🌐 LAYER 4 — index3.html (NEW SCROLLYTELLING HOMEPAGE)
PURPOSE:

This is now the entry point of the system

STRUCTURE RULE:

index3.html MUST contain ONLY:

sticky visual container
empty scroll container
script imports

NO content allowed.

REQUIRED STRUCTURE:
<body>

  <div id="scrolly-app">

    <div id="sticky-layer">
      <!-- dynamic visual state only -->
    </div>

    <div id="scroll-container">
      <!-- renderer injects steps here -->
    </div>

  </div>

</body>
SCRIPT LOADING ORDER:
content-data.json
renderer.js
scroll-engine.js
🎨 LAYER 5 — SCROLLY-V2 CSS
File: /assets/css/scrolly-v2.css
DESIGN RULES:
1. Sticky Layer
fixed position
full viewport height
no content dependency
2. Step Layout
100vh per step
flex-centered placeholders only
3. System Aesthetic (from Spec 2)

Apply styling direction:

dark UI base
clean grid
system-like spacing
no decorative UI
🔁 CONTENT MIGRATION (FROM SPEC 2)

All previous resume + AI system content must now be encoded into JSON:

MUST INCLUDE:
Identity Layer:
AI Systems Engineer positioning
FAA Layer:
AI Research Intern
Cloud Systems Intern
automation + system exposure
AI SYSTEMS:
1. RAG Academic Advisor
retrieval pipeline
hallucination reduction
2. Document RAG System
structured document grounding
3. College Decision AI
financial + stress + lifestyle modeling
🧪 QA REQUIREMENTS
1. ZERO COUPLING CHECK
renderer does not access scroll state
scroll engine does not access content
content has no UI assumptions
2. DATA FLOW CHECK

Correct flow MUST be:

JSON → Renderer → DOM → Scroll Engine → State Updates
3. CONTENT INTEGRITY CHECK
all previous content preserved
no missing FAA or AI systems
no content duplication
4. SCROLL FUNCTIONALITY CHECK
step activation works
sticky layer updates state
no layout dependency on JS logic
🚫 FAILURE CONDITIONS

Spec is INVALID if:

any content is hardcoded in HTML
scroll engine renders DOM
renderer tracks scroll position
JSON contains UI logic
coupling exists between layers
✅ SUCCESS CRITERIA

This spec is complete when:

index3.html is a clean scroll shell
content is fully JSON-driven
renderer builds UI dynamically
scroll engine only tracks state
system is fully decoupled and scalable
all prior portfolio content is preserved and migrated
🧠 FINAL DIRECTIVE

This is the production-grade refactor.

You are no longer building a webpage.

You are building:

a modular, data-driven narrative rendering system for AI portfolio storytelling