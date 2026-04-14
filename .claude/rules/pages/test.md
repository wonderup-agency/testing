---
name: test
description: Randomizes the body background color every 1 second with a 500ms GSAP transition
type: project
---

# test

## Purpose

Randomizes the `body` background color every 1 second using a smooth 500ms GSAP tween.

## Webflow Setup

Page Settings → Custom Code → Before `</head>`:

```html
<link rel="preload" as="script" href="https://cdn.jsdelivr.net/gh/wonderup-agency/testing@main/dist/test.js" crossorigin>
<script>
  (function () {
    var base = window.__devBase || (localStorage.dev ? 'http://127.0.0.1:8080' : 'https://cdn.jsdelivr.net/gh/wonderup-agency/testing@main/dist')
    var s = document.createElement('script')
    s.src = base + '/test.js'
    s.type = 'module'
    s.defer = true
    document.head.appendChild(s)
  })()
</script>
```

## Behavior

- **On load**: Starts a `setInterval` that fires every 1000ms, tweening `document.body` to a random HSL background color over 500ms with GSAP.

## Dependencies

- `gsap` (npm package)
