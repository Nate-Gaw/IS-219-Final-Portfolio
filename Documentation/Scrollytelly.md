# Scrollytelly Architecture

## What was created

I added a new `index2.html` homepage variant for the portfolio and a documentation folder at `Documentation/` with this file.

The goal of `index2.html` is to express the existing homepage content as a scroll-driven narrative instead of a single static page. The original `index.html` stays untouched.

## Source content strategy

The content in `index.html` was translated into a sequence of scroll scenes:

1. Hero introduction
2. About / credibility
3. Core toolkit
4. Featured system: Document RAG System
5. Featured system: AI College Decision System
6. Technical depth
7. Closing call to action

Each scene becomes one full-height step so the story progresses as the user scrolls.

## Architecture

The scrollytelling page follows a three-part layout:

- `#scrolly-app` wraps the entire experience
- `#sticky-layer` is the fixed visual system
- `#scroll-container` contains the narrative steps

Each narrative block uses the `.step` class and a `data-step-id` value. The page is styled by `assets/css/scrolly-v2.css`, which provides the fixed sticky layer, the viewport-height step layout, and the active-state styling.

## How it works

The scroll engine is already present in `assets/js/scroll-engine.js`.

That script:

- watches `.step` elements with `IntersectionObserver`
- tracks the active step in `activeStep`
- emits an `activeStepChanged` custom event whenever the visible step changes

`index2.html` listens for that event and uses it to:

- update the sticky placeholder state text
- mark the current step as active
- keep the scroll narrative and the sticky visual layer in sync

## Why this approach works

This keeps the architecture simple:

- the homepage content is reused instead of rewritten into a separate app
- the scrollytelling behavior lives in a small observer-based engine
- the sticky layer stays fixed while the narrative scrolls underneath it
- the implementation is independent from the original homepage

## Files involved

- `index.html` keeps the original portfolio homepage
- `index2.html` is the scrollytelling version
- `assets/css/scrolly-v2.css` supplies the layout system
- `assets/js/scroll-engine.js` supplies the scroll state engine

## Summary

The result is a portfolio page that tells the same story through scroll progression instead of a standard stacked layout. The content is now organized into discrete beats, and the sticky visual layer changes state as the user moves through the narrative.