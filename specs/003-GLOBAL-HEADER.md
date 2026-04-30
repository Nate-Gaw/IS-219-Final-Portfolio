# SPEC 3 — GLOBAL HEADER + MULTI-PAGE SHELL INITIALIZATION

## Objective

Create a **global header component** and establish the **multi-page site architecture shell** for the portfolio.

This spec focuses ONLY on:
- Header UI structure
- Navigation system
- Creation of empty page shells

No page content is allowed beyond the header.

---

# 🧠 ARCHITECTURAL INTENT

This step establishes the portfolio as a:

> Multi-page structured application with shared navigation and consistent layout behavior.

NOT:
- a single-page portfolio
- a scrolling landing page with sections

---

# 🧱 REQUIRED OUTPUT STRUCTURE

The AI agent MUST generate:


/index.html
/pages/
about.html
projects.html
resume.html
systems.html
/assets/
(unchanged)
/components/
header.html


---

# 🚫 HARD CONSTRAINTS (CRITICAL)

The AI agent MUST:

- ONLY implement the HEADER at this stage
- NOT add any content inside pages (except header inclusion)
- NOT design page sections yet
- NOT populate body content beyond layout skeleton
- NOT create UI beyond navigation structure

---

# 🌐 HEADER SPECIFICATION (GLOBAL COMPONENT)

## File: `/components/header.html`

---

## Layout Structure

The header must follow a **2-zone layout system**:

LEFT SIDE RIGHT SIDE

Nathanael Gaw's Portfolio Navigation Buttons


---

## LEFT SIDE (BRAND IDENTITY)

### Content:
- Text only (no logo image)

### REQUIRED TEXT:

> Nathanael Gaw’s Portfolio

### Styling Intent:
- Acts as brand anchor
- Left-aligned
- Visually dominant but minimal

---

## RIGHT SIDE (NAVIGATION)

### Navigation Items (buttons or links):

Must include EXACTLY:

- Home
- Projects
- Systems
- About
- Resume

---

## NAVIGATION RULES

- Each item must be a reusable link component
- No dropdowns
- No icons (at this stage)
- No animations beyond hover state
- Must support multi-page routing via anchor links

---

## RESPONSIVE BEHAVIOR

### Desktop:
- Left aligned brand
- Right aligned nav links in horizontal row

### Mobile:
- Nav collapses into stacked vertical menu OR hamburger placeholder (structure only, no JS behavior required yet)

---

# 🧱 PAGE GENERATION REQUIREMENT (CRITICAL)

The AI agent MUST create the following files:

---

## 1. `/index.html`

### Requirement:
- Must ONLY include:
  - header include
  - empty `<main>` tag
- No content allowed inside main

---

## 2. `/pages/about.html`

- Must include header only
- Empty body content

---

## 3. `/pages/projects.html`

- Must include header only
- Empty body content

---

## 4. `/pages/systems.html`

- Must include header only
- Empty body content

---

## 5. `/pages/resume.html`

- Must include header only
- Empty body content

---

# 🔗 NAVIGATION BEHAVIOR REQUIREMENTS

Each navigation item must link to:

- Home → `/index.html`
- Projects → `/pages/projects.html`
- Systems → `/pages/systems.html`
- About → `/pages/about.html`
- Resume → `/pages/resume.html`

---

# 🧠 COMPONENT DESIGN REQUIREMENTS

## Header Must Be:

- Reusable across all pages
- Stored in `/components/header.html`
- Loaded dynamically or included consistently

---

## CONSISTENCY RULE

Every page MUST render identical header structure.

No page-specific header variation is allowed.

---

# 🎨 DESIGN INTENT (NO IMPLEMENTATION YET)

The header should communicate:

### 1. Professional identity
> This is a systems engineering portfolio, not a personal site

### 2. Structural clarity
> Navigation is predictable and minimal

### 3. Engineering discipline
> No decorative or unnecessary UI elements

---

# ⚙️ IMPLEMENTATION GUIDELINES

AI agent SHOULD:

- Use semantic HTML:
  - `<header>`
  - `<nav>`
- Keep structure clean and minimal
- Avoid inline styles
- Prepare for future CSS modularization

---

# 🧪 QA REQUIREMENTS

## 1. Navigation Integrity
- All links must resolve to correct pages
- No broken or duplicate routes

---

## 2. Page Isolation Check
- Each page must be independent HTML file
- No cross-page content leakage

---

## 3. Header Consistency Check
- Header must appear identical across all pages

---

## 4. Empty Page Validation
- Pages must contain ONLY header + empty body/main

---

## 5. Semantic HTML Check
- Proper use of header/nav tags required

---

# 🚫 FAILURE CONDITIONS

Spec is INVALID if:
- Any page contains content beyond header
- Any section other than header is implemented
- Navigation is incomplete or inconsistent
- Pages are merged into single-file structure

---

# ✅ SUCCESS CRITERIA

This spec is complete when:

- A reusable header component exists
- Multi-page structure is fully created
- All pages include only header + empty body
- Navigation is functional and consistent
- No content exists beyond structural shell

---

# 🧠 FINAL DIRECTIVE

This step is not about design.

It is about establishing:

> A scalable multi-page architecture with a consistent navigation backbone that all future content will attach to.