---
name: spin
description: Spins an element 360° on click using GSAP
type: project
---

# spin

## Purpose

Spins the element 360° each time it is clicked, using a smooth `power2.inOut` ease.

## Webflow Setup

Add to any element in Webflow:

```
data-component="spin"
```

## Behavior

- **Init**: Attaches a click listener to each element; each click triggers a 360° GSAP rotation tween.
- **Resize**: Not used
- **Breakpoint**: Not used

## Dependencies

- `gsap` (npm package)

## DOM Expectations

Elements matching `[data-component='spin']`.
