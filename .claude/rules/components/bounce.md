---
name: bounce
description: Bounces an element up and back on click using GSAP
type: project
---

# bounce

## Purpose

Bounces the element upward 30px and back each time it is clicked, using a `power2.out` yoyo tween.

## Webflow Setup

Add to any element in Webflow:

```
data-component="bounce"
```

## Behavior

- **Init**: Attaches a click listener to each element; each click triggers a yoyo tween that moves the element up 30px and back to its original position.
- **Resize**: Not used
- **Breakpoint**: Not used

## Dependencies

- `gsap` (npm package)

## DOM Expectations

Elements matching `[data-component='bounce']`.
