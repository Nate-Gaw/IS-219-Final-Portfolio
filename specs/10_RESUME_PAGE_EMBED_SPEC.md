TITLE: RESUME PAGE EMBED SPEC — FULL-LENGTH PDF VIEWER (CLEAN, FOCUSED IMPLEMENTATION)

AUTHOR: Lead Frontend Architect
SCOPE: `resume.html` ONLY
CONSTRAINT: NO GLOBAL REFACTORING, NO ARCHITECTURE CHANGES OUTSIDE THIS PAGE

---

# 1. OBJECTIVE

Create a **dedicated resume viewing page** that:

* displays the resume PDF directly on the page
* uses the full vertical length of the viewport
* maintains a clean, professional layout
* preserves consistency with the rest of the site

---

# 2. HARD CONSTRAINTS (CRITICAL)

---

## 2.1 STRICT FILE SCOPE

The AI agent MUST:

✔ ONLY modify `resume.html`
✔ ONLY add code required for embedding the resume

---

## 2.2 NO GLOBAL REFACTORING

❌ DO NOT modify:

* homepage
* projects page
* technical page
* scrollytelling engine
* global CSS (unless absolutely necessary)

---

## 2.3 CLEANUP RULE

* DO NOT clean or refactor during implementation
* ONLY clean `resume.html` at the very end
* DO NOT touch any other file

---

# 3. IMPLEMENTATION STRATEGY (MANDATORY ORDER)

---

## PHASE 1 — ARCHITECTURE

Define the layout BEFORE embedding the PDF.

---

## 3.1 PAGE STRUCTURE

```html id="structure"
<div class="resume-container">
  <div class="resume-header">
    <h1>Resume</h1>
  </div>

  <div class="resume-viewer">
    <!-- PDF embed goes here -->
  </div>
</div>
```

---

## 3.2 LAYOUT RULES

* Resume must occupy **full page height**
* Width must be **constrained and centered**
* No unnecessary side content

---

# 4. PDF EMBED SYSTEM

---

## 4.1 SOURCE LOCATION

The resume file is located in:

```id="path"
/files/resume.pdf
```

---

## 4.2 EMBED METHOD (MANDATORY)

Use iframe:

```html id="iframe"
<iframe src="./files/resume.pdf"></iframe>
```

---

## 4.3 VIEWER REQUIREMENTS

The PDF viewer MUST:

* fill available vertical space
* be scrollable internally
* maintain aspect readability

---

# 5. STYLING REQUIREMENTS

---

## 5.1 FULL HEIGHT IMPLEMENTATION

```css id="height"
html, body {
  height: 100%;
  margin: 0;
}

.resume-container {
  height: 100vh;
  display: flex;
  flex-direction: column;
}
```

---

## 5.2 VIEWER BEHAVIOR

```css id="viewer"
.resume-viewer {
  flex: 1;
  display: flex;
  justify-content: center;
}

.resume-viewer iframe {
  width: 80%;
  height: 100%;
  border: none;
}
```

---

## 5.3 WIDTH CONTROL

* Keep width readable (not full stretch)
* Center horizontally

---

# 6. FALLBACK HANDLING (MANDATORY)

---

## IF PDF FAILS TO LOAD

Display:

```html id="fallback"
<p>Unable to display resume.</p>
<a href="./files/resume.pdf" target="_blank">
  Open Resume
</a>
```

---

# 7. USER EXPERIENCE REQUIREMENTS

---

## 7.1 SCROLL BEHAVIOR

* Page scroll should NOT interfere
* PDF scroll happens INSIDE iframe

---

## 7.2 VISUAL CLEANLINESS

* no clutter
* no extra sections
* focus entirely on resume

---

## 7.3 HEADER CONSISTENCY

* keep site navigation intact
* do NOT override existing header

---

# 8. QA TESTING (MANDATORY)

---

## TEST 1 — PDF LOAD

Check:

✔ resume displays correctly

---

## TEST 2 — FULL HEIGHT

Check:

✔ viewer fills screen height

---

## TEST 3 — WIDTH CONTROL

Check:

✔ resume is centered
✔ not stretched

---

## TEST 4 — INTERNAL SCROLL

Check:

✔ scrolling works inside PDF

---

## TEST 5 — FALLBACK

Check:

✔ fallback link works if PDF fails

---

## TEST 6 — NAVIGATION SAFETY

Check:

✔ page does not break site navigation

---

# 9. FAILURE CONDITIONS

Reject implementation if:

❌ PDF not visible
❌ page scroll breaks layout
❌ resume overflows incorrectly
❌ layout inconsistent with site

---

# 10. CLEANUP PHASE (FINAL STEP ONLY)

After implementation:

* clean indentation
* remove unused styles
* ensure readability

---

## DO NOT:

❌ refactor other pages
❌ modify global structure
❌ change unrelated code

---

# 11. FINAL EXPECTATION

The page must feel like:

> A clean, professional document viewer

NOT:

❌ a cluttered page
❌ a basic file link
❌ a broken embed

---

# 12. COMPLETION CRITERIA

✔ resume fully embedded
✔ full-height layout works
✔ width properly constrained
✔ fallback implemented
✔ no unintended changes outside page

---

END OF SPEC 10
