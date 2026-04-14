/*
Page bundle: test
Add to Webflow → Page Settings → Custom Code → Before </head>:

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
*/

import { gsap } from 'gsap'

console.log('%c📄 [test] Page loaded', 'color: #a78bfa; font-weight: bold')

function randomColor() {
  const h = Math.floor(Math.random() * 360)
  const s = 60 + Math.floor(Math.random() * 20)
  const l = 45 + Math.floor(Math.random() * 20)
  return `hsl(${h}, ${s}%, ${l}%)`
}

setInterval(() => {
  gsap.to(document.body, {
    backgroundColor: randomColor(),
    duration: 0.5,
    ease: 'none',
  })
}, 1000)
