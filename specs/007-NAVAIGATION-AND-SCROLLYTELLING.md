# SPEC 7 — NAVIGATION + SCROLLYTELLING INTERACTION BUG DIAGNOSIS

## Objective

Diagnose and resolve two critical issues:

1. **Navigation Failure**
   - "Home" button does not redirect to `/index.html`
   - Likely caused by incorrect relative paths or routing inconsistencies

2. **Unclickable Buttons in Scrollytelling UI**
   - Buttons only work when scroll is perfectly aligned to a step
   - Become unclickable when slightly scrolled past
   - Likely caused by overlay, z-index, or pointer-event conflicts

## Resolution

Both issues were reproduced and fixed in the current implementation.

- The navigation bug came from the shared header updater only rewriting the first `data-page="home"` element, which was the brand link. The visible Home link stayed at `#` on pages under `pages/`. The fix updates every matching `data-page` link and keeps `aria-current` limited to the navbar links.
- The scrollytelling click bug came from the scroll layer sitting in the hit-test path above the sticky action area. The visible closing buttons were rendered, but clicks were intercepted before they reached the sticky copy. The fix makes `#scroll-container` transparent to pointer events so the sticky controls receive clicks reliably.
- Validation confirmed that Home now resolves correctly on page routes and that the closing scrollytelling actions are clickable once the closing step is active.

---

# 🧠 CORE PRINCIPLE

This spec is NOT for guessing fixes.

The AI agent MUST:
> systematically diagnose, reproduce, isolate, and verify root causes before applying fixes

---

# 🚨 CRITICAL RULES

The AI agent MUST:

- NOT immediately patch code without diagnosis
- NOT assume cause without confirming via inspection
- Perform step-by-step validation
- Log findings before implementing fix
- Re-test after each fix

---

# 🧪 PART 1 — NAVIGATION ISSUE (HOME BUTTON)

## PROBLEM

"Home" button does not redirect to `index.html`

---

## 🔍 DIAGNOSTIC STEPS

### 1. Inspect HTML Anchor

Check:

```html id="nav_check"
<a href="...">Home</a>
2. Validate Path Context

AI must determine:

Current file location (e.g. /pages/about.html)
Target file location (/index.html)
3. Test Relative Path Variants

Test:

href="../index.html"
href="/index.html"
4. Browser Console Check

Verify:

Any navigation errors
404 responses
5. Network Tab Verification
Confirm request path
Confirm correct file resolution
✅ EXPECTED ROOT CAUSES

One of:

Incorrect relative path (./ vs ../)
Missing root-based routing
Incorrect deployment path assumptions
🛠 FIX REQUIREMENTS
Preferred Solution:

Use root-relative paths:

<a href="/index.html">Home</a>
Alternative (if static hosting requires):

Ensure consistent relative pathing across all pages.

🧪 VALIDATION
Clicking Home from ANY page must redirect correctly
Must work in:
local environment
deployed environment
🧪 PART 2 — SCROLLYTELLING BUTTON CLICK ISSUE
PROBLEM

Buttons inside scroll steps:

Only clickable when scroll is perfectly aligned
Become unclickable when partially between steps
🧠 LIKELY ROOT CAUSE MODEL

This strongly suggests:

A hidden or overlapping layer is intercepting pointer events

🔍 DIAGNOSTIC STEPS
1. Inspect DOM Layers

Using DevTools:

Identify overlapping elements
Check if sticky layer overlaps step content
2. Check z-index Hierarchy

Verify:

#sticky-layer
.step
#scroll-container

Look for:

sticky layer above steps
invisible overlays
3. Pointer Event Analysis

Check computed styles:

pointer-events: none / auto
4. Box Model Inspection

Use DevTools hover tool:

Confirm which element is receiving the click
Identify if invisible layer is blocking interaction
5. Scroll State Behavior Check

Confirm:

When aligned → correct element receives click
When between steps → wrong layer captures event
⚠️ COMMON FAILURE PATTERNS
Pattern 1:

Sticky layer covers screen with:

position: fixed;
z-index: high;

→ Blocks clicks

Pattern 2:

Scroll container stacking issue

Pattern 3:

Invisible overlay element

🛠 FIX REQUIREMENTS
SOLUTION 1 — POINTER EVENTS CONTROL

Apply:

#sticky-layer {
  pointer-events: none;
}

AND for interactive elements inside it:

#sticky-layer * {
  pointer-events: auto;
}
SOLUTION 2 — Z-INDEX CORRECTION

Ensure:

#scroll-container {
  position: relative;
  z-index: 2;
}

#sticky-layer {
  z-index: 1;
}
SOLUTION 3 — INTERACTION LAYER SEPARATION

Ensure:

Buttons exist in scroll layer (not behind sticky layer)
No invisible full-screen overlays
SOLUTION 4 — STEP HEIGHT + OVERLAP CHECK

Ensure:

Each .step fully occupies viewport
No overlapping margins collapsing into adjacent steps
🧪 VALIDATION (MANDATORY)
1. Click Test Matrix

Test buttons at:

top of step
middle of step
between steps
fast scroll positions
2. Layer Inspection

Confirm:

correct element receives click
no overlay interference
3. Cross-Browser Test

Test in:

Chrome
Edge
4. Mobile Responsiveness

Ensure:

touch events work
no tap blocking
🔁 REGRESSION CHECK

After fixes, verify:

scroll engine still works
step detection not broken
sticky visual still updates
🚫 FAILURE CONDITIONS

Spec is INVALID if:

navigation works only on some pages
buttons still fail when mid-scroll
fixes introduce layout shifts
scroll engine breaks
✅ SUCCESS CRITERIA

This spec is complete when:

Home button redirects correctly from all pages
All buttons are clickable at ANY scroll position
No hidden layers block interaction
Scroll system remains functional
Layout remains stable
🧠 FINAL DIRECTIVE

This is a debugging spec, not a feature spec.

The goal is to enforce:

disciplined engineering debugging — isolate → verify → fix → validate

No guessing. No blind fixes.