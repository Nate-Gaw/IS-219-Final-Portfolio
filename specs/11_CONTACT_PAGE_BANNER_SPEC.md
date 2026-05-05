TITLE: CONTACT PAGE HERO BANNER SPEC — COLLAGE BACKGROUND + SOCIAL CTA LAYER

AUTHOR: Lead UI/UX Architect
SCOPE: `contact.html` ONLY
CONSTRAINT: NO GLOBAL REFACTORING, NO CHANGES OUTSIDE CONTACT PAGE

---

# 1. OBJECTIVE

Create a **high-impact contact page** consisting of:

* full-screen visual banner (collage background)
* centered personal message overlay
* 3 primary contact buttons (LinkedIn, GitHub, Email)

This page must feel:

> personal, warm, and intentional — not transactional

---

# 2. HARD CONSTRAINTS (CRITICAL)

---

## 2.1 STRICT FILE SCOPE

The AI agent MUST ONLY modify:

✔ `contact.html`
✔ optionally `contact.css` (if already isolated or scoped)

---

## 2.2 NO GLOBAL CHANGES

❌ DO NOT modify:

* homepage
* projects page
* resume page
* scrollytelling system
* global navigation logic

---

## 2.3 ASSET CONSTRAINT

The background image MUST be used from:

```id="asset"
./Pics/collage.jpg
```

---

# 3. PAGE STRUCTURE (MANDATORY ARCHITECTURE)

---

## 3.1 HIGH LEVEL LAYOUT

The page MUST follow:

```id="structure"
ContactPage
 ├── Fullscreen Hero Banner (Collage Background)
 │     ├── Overlay Layer
 │     ├── Text Content
 │     └── CTA Buttons
 └── (Optional spacing footer if needed)
```

---

## 3.2 FULLSCREEN BANNER RULE

The banner MUST:

* occupy 100vh
* cover full width
* act as the primary visual element

---

# 4. HERO BANNER DESIGN

---

## 4.1 BACKGROUND IMAGE

```css id="bg"
background-image: url('./Pics/collage.jpg');
background-size: cover;
background-position: center;
```

---

## 4.2 DARK OVERLAY (CRITICAL FOR READABILITY)

Add overlay layer:

```css id="overlay"
background: rgba(0, 0, 0, 0.55);
```

Optional enhancement:

* gradient overlay for depth

---

# 5. TEXT CONTENT SPEC

---

## 5.1 PRIMARY MESSAGE (CENTERED)

### TITLE:

> Thank you for visiting my page.

---

### BODY TEXT:

> One thing I love most about life is being surrounded by people — learning, building, and growing together.

---

### CLOSING LINE (CTA TEXT):

> So please feel free to reach out to me.

---

## 5.2 TEXT STYLE RULES

* centered alignment
* white text
* high contrast
* responsive font sizing

---

# 6. BUTTON SYSTEM (MANDATORY)

---

## 6.1 BUTTON LAYOUT

Buttons MUST appear below text:

* horizontally aligned (desktop)
* stacked (mobile)

---

## 6.2 BUTTONS REQUIRED

### BUTTON 1 — LinkedIn

Label:

> LinkedIn

Link:
https://www.linkedin.com/in/nathanael-gaw/

---

### BUTTON 2 — GitHub

Label:

> GitHub

Link:
https://github.com/Nate-Gaw

---

### BUTTON 3 — Email

Label:

> Email Me

Action:
mailto link:

```id="email"
mailto:nathanaelgaw@gmail.com
```

---

## 6.3 BUTTON STYLE REQUIREMENTS

Buttons MUST:

* be visually consistent
* have hover effects
* be clearly clickable
* use spacing between each button

---

# 7. INTERACTION DESIGN

---

## 7.1 HOVER BEHAVIOR

Buttons should:

* slightly scale up on hover
* change background subtly
* feel interactive but not flashy

---

## 7.2 CLICK BEHAVIOR

* LinkedIn → open new tab
* GitHub → open new tab
* Email → open mail client

---

# 8. RESPONSIVENESS RULES

---

## 8.1 DESKTOP

* centered text block
* horizontal button row

---

## 8.2 MOBILE

* text scales down
* buttons stack vertically
* maintain readability over collage

---

# 9. ACCESSIBILITY REQUIREMENTS

---

## 9.1 TEXT READABILITY

Must ensure:

* strong contrast over image
* overlay never removed

---

## 9.2 LINK ACCESSIBILITY

* buttons must have clear labels
* keyboard navigable

---

# 10. QA TESTING FRAMEWORK

---

## TEST 1 — IMAGE LOAD

Check:

✔ collage.jpg loads correctly

FAIL IF:
❌ broken background

---

## TEST 2 — OVERLAY READABILITY

Check:

✔ text readable over image

FAIL IF:
❌ low contrast

---

## TEST 3 — BUTTON FUNCTIONALITY

Check:

✔ LinkedIn opens correctly
✔ GitHub opens correctly
✔ Email triggers mail client

---

## TEST 4 — RESPONSIVENESS

Check:

✔ mobile layout stacks correctly
✔ desktop layout centered

---

## TEST 5 — PAGE IS ISOLATED

Check:

✔ no changes affect other pages

---

# 11. FAILURE CONDITIONS

Reject implementation if:

❌ image not loading
❌ text unreadable
❌ buttons not working
❌ layout breaks on mobile
❌ global files modified

---

# 12. FINAL EXPECTATION

The contact page must feel like:

> a personal closing statement to the portfolio experience

NOT:

❌ a form page
❌ a generic contact list
❌ a cluttered UI

---

# 13. COMPLETION CRITERIA

✔ full-screen collage hero implemented
✔ overlay + text readable
✔ 3 functional contact buttons
✔ responsive design works
✔ no external file changes

---

END OF SPEC 11
