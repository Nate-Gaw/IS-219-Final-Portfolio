# SPEC 0 — HOMEPAGE FOUNDATION (STRUCTURE ONLY)

## Objective
Create the initial homepage (landing page) of the portfolio with:
- Fully structured layout
- Clean, modular architecture
- Reusable components
- Zero real content (structure-only placeholders)
- Strong separation of concerns (HTML / CSS / JS)

This homepage will act as the base shell for future content injection.

---

## Architectural Principles (MANDATORY)

### 1. Clean Architecture (Separation of Concerns)
- HTML = structure only (presentation layer)
- CSS = styling and layout
- JS = behavior (minimal for now)
- No inline styles or scripts
- No business logic in HTML

---

### 2. Component-Based Design (GoF Principles)
- Reusable UI components must be modular
- Use composition over duplication
- Shared components:
  - Navbar
  - Footer
  - Section wrapper
  - Cards

---

### 3. Maintainability
- Each page is a separate HTML file
- Components should be reusable across pages
- CSS should be modular and scalable

---

## Project Structure (REQUIRED)

portfolio/
│
├── index.html
├── pages/
│   └── (future pages)
│
├── assets/
│   ├── css/
│   │   ├── main.css
│   │   ├── layout.css
│   │   └── components.css
│   │
│   ├── js/
│   │   └── main.js
│   │
│   └── images/
│
└── components/
    ├── navbar.html
    ├── footer.html
    └── section.html

---

## Homepage Structure (index.html)

Structure must follow:

<header>
  (navbar component loads here)
</header>

<main>
  <section id="hero"></section>
  <section id="trust-strip"></section>
  <section id="capabilities"></section>
  <section id="featured-systems"></section>
  <section id="technical-depth"></section>
  <section id="cta"></section>
</main>

<footer>
  (footer component loads here)
</footer>

---

## Section Specifications

### 1. Navbar Component
File: /components/navbar.html

Requirements:
- Sticky positioning
- Left: logo placeholder block
- Right: navigation placeholder blocks
- No real labels or text

---

### 2. Hero Section

Layout:
- Two-column grid

Left column:
- 3 stacked placeholder blocks (title, subtitle, buttons)

Right column:
- One large rectangular placeholder (represents system diagram)

Responsive:
- Collapse into single column on smaller screens

---

### 3. Trust Strip

Layout:
- Horizontal row

Requirements:
- 3–5 small placeholder blocks (pill style or text blocks)

---

### 4. Capabilities Section (Bento Grid)

Layout (asymmetric grid):

| LARGE BLOCK | SMALL BLOCK |
|-------------|-------------|
| MEDIUM      | MEDIUM      |

Requirements:
- Total of 4 cards
- Each card uses reusable component class
- Placeholder title + placeholder lines

---

### 5. Featured Systems Section

Layout:
- Vertical stacked cards

Each card layout:
- Left: text placeholder blocks
- Right: diagram placeholder block

Requirements:
- Minimum 2 cards
- Use reusable system-card structure

---

### 6. Technical Depth Section

Layout:
- Horizontal scroll container (optional but preferred)

Requirements:
- Multiple small rectangular placeholder items

---

### 7. CTA Section

Layout:
- Centered content

Requirements:
- 2–3 button placeholder blocks

---

### 8. Footer Component
File: /components/footer.html

Requirements:
- Minimal structure
- Placeholder blocks only

---

## CSS Specification

### Global Variables

:root {
  --bg-primary: #0B0F17;
  --bg-secondary: #111827;
  --text-primary: #F9FAFB;
  --text-secondary: #9CA3AF;
  --accent-primary: #4F46E5;
}

---

### Layout Rules
- 12-column grid system
- Max width: 1200–1300px
- Consistent spacing scale (8px increments)
- All elements must align to grid

---

### Required CSS Classes

.container
.section
.grid
.grid-2
.grid-bento
.card
.placeholder
.button-placeholder

---

## JavaScript Specification

File: /assets/js/main.js

Responsibilities:
- Dynamically load reusable components:
  - navbar.html
  - footer.html

No additional logic required at this stage.

---

## Testing & QA Requirements (MANDATORY)

### 1. Structural Validation
- HTML must be valid
- Use semantic tags:
  - <header>, <main>, <section>, <footer>

---

### 2. Responsiveness Testing
Test at:
- Desktop (≥1200px)
- Tablet (~768px)
- Mobile (~375px)

Ensure:
- No overflow
- No broken layouts
- Proper stacking behavior

---

### 3. Reusability Check
- No duplicated structures
- Components are reusable

---

### 4. CSS Validation
- No inline styles
- No unused classes
- Consistent spacing

---

### 5. Performance Baseline
- No large unused assets
- CSS properly split into modules

---

### 6. Manual QA Pass
Agent must verify:
- Sections are visually distinct
- Layout hierarchy is clear even with placeholders
- Structure matches spec exactly

---

## Hard Constraints

The AI agent MUST NOT:
- Add real content
- Add real images
- Use inline CSS or JS
- Merge files into one
- Skip component modularization

---

## Success Criteria

This spec is complete when:
- Homepage renders fully structured layout
- All sections are present and distinct
- Code is modular and clean
- Layout matches architecture plan
- Ready for content injection

---

## Final Directive

This is not a finished homepage.

This is a layout foundation that must:
- Support future scaling
- Allow content injection without restructuring
- Maintain clean architecture standards

Only proceed when all QA checks pass.