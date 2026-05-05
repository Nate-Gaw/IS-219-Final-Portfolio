TITLE: PROJECTS PAGE EMBED SYSTEM SPEC — CLEAN, REUSABLE, CONTROLLED IMPLEMENTATION

AUTHOR: Lead Frontend Architect
SCOPE: `projects.html` ONLY
CONSTRAINT: NO GLOBAL REFACTORING, NO ARCHITECTURE CHANGES OUTSIDE THIS PAGE

---

# 1. OBJECTIVE

Create a **clean, reusable project embedding system** inside `projects.html` that:

* displays each project professionally
* embeds or previews the provided links
* uses a consistent, reusable component structure
* maintains clean, minimal code

---

# 2. HARD CONSTRAINTS (CRITICAL)

---

## 2.1 STRICT FILE SCOPE

The AI agent MUST:

✔ ONLY modify `projects.html`
✔ ONLY add code required for this feature

---

## 2.2 NO GLOBAL REFACTORING

❌ DO NOT modify:

* homepage
* technical page
* scrollytelling engine
* global CSS (unless absolutely required)
* navigation system

---

## 2.3 CLEANUP RULE

* DO NOT clean or refactor during implementation
* ONLY clean `projects.html` at the very end
* DO NOT touch other files during cleanup

---

# 3. IMPLEMENTATION STRATEGY (MANDATORY ORDER)

---

## PHASE 1 — ARCHITECTURE (DO FIRST)

You MUST first define a reusable structure BEFORE inserting projects.

---

## 3.1 PROJECT COMPONENT MODEL

Each project MUST follow:

```id="component"
ProjectCard
 ├── Title
 ├── Description (optional)
 ├── Embed Container
 └── Action Link (fallback)
```

---

## 3.2 PAGE STRUCTURE

```html id="page-structure"
<div class="projects-container">
  <!-- ProjectCard instances go here -->
</div>
```

---

## 3.3 COMPONENT TEMPLATE

```html id="template"
<div class="project-card">
  <h2 class="project-title">Project Name</h2>

  <div class="project-embed">
    <!-- iframe OR preview -->
  </div>

  <a class="project-link" href="#" target="_blank">
    View Full Project
  </a>
</div>
```

---

# 4. DESIGN REQUIREMENTS

---

## 4.1 VISUAL STYLE

Each project MUST be:

* clean
* centered
* spaced evenly
* consistent across all entries

---

## 4.2 LAYOUT

Preferred layout:

* stacked vertically
* each card separated clearly
* max-width constraint for readability

---

## 4.3 EMBED CONTAINER

```css id="embed-style"
.project-embed iframe {
  width: 100%;
  height: 400px;
  border: none;
}
```

---

# 5. LINK HANDLING SYSTEM

---

## 5.1 LINK TYPES PROVIDED

Projects:

1. RAG AI Document Assistant
2. Financial AI College Advisor
3. Global Meeting Scheduler
4. Car Rental Program
5. Weather Map Analyzer

---

## 5.2 EMBED STRATEGY

---

### CASE 1 — GitHub Links

Use:

```html id="github"
<iframe src="https://github.com/..."></iframe>
```

⚠️ If blocked:

Fallback:

* show clean card
* include "View on GitHub" button

---

### CASE 2 — TinyURL Links

Attempt:

```html id="tiny"
<iframe src="https://tinyurl.com/..."></iframe>
```

---

### IF EMBED FAILS (MANDATORY FALLBACK)

Display:

* clean preview box
* title
* button:

> "Open Project"

---

# 6. PROJECT IMPLEMENTATION (REQUIRED ENTRIES)

---

## PROJECT 1

Title:
RAG AI Document Assistant

Link:
https://github.com/Nate-Gaw/RAG-AI-Document-Assistant

---

## PROJECT 2

Title:
Financial AI College Advisor

Link:
https://github.com/Nate-Gaw/student-reality-lab-GAW

---

## PROJECT 3

Title:
Global Meeting Scheduler

Link:
https://tinyurl.com/5vw8dsyb

---

## PROJECT 4

Title:
Car Rental Program

Link:
https://tinyurl.com/yc2zzebt

---

## PROJECT 5

Title:
Weather Map Analyzer

Link:
https://tinyurl.com/2p87hsk4

---

# 7. REUSABILITY REQUIREMENT

---

## 7.1 NO DUPLICATE STRUCTURE

Each project MUST:

* use the SAME HTML structure
* differ ONLY in:

  * title
  * link

---

## 7.2 OPTIONAL (IF JS USED)

You MAY define:

```js id="data"
const projects = [
  { title: "...", link: "..." }
];
```

Then render dynamically.

---

# 8. QA TESTING (MANDATORY)

---

## TEST 1 — CONSISTENCY

Check:

* all cards look identical in structure

---

## TEST 2 — EMBED FUNCTIONALITY

Check:

* iframe loads (if allowed)

---

## TEST 3 — FALLBACK

Check:

* if embed fails → button works

---

## TEST 4 — RESPONSIVENESS

Check:

* layout works on smaller screens

---

## TEST 5 — NAVIGATION SAFETY

Check:

* page does not break existing nav

---

# 9. CLEANUP PHASE (FINAL STEP ONLY)

---

After implementation:

* remove redundant code
* ensure indentation is clean
* ensure readability

---

## DO NOT:

❌ refactor other pages
❌ modify global styles unnecessarily
❌ restructure project

---

# 10. FINAL EXPECTATION

The page must feel like:

> A professional portfolio showcase with interactive previews

NOT:

❌ a list of links
❌ inconsistent layouts
❌ cluttered UI

---

# 11. COMPLETION CRITERIA

✔ all 5 projects displayed
✔ consistent component structure
✔ embeds OR fallbacks working
✔ clean layout
✔ no unintended code changes outside page

---

END OF SPEC 09
