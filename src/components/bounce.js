/*
Component: bounce
Webflow attribute: data-component="bounce"
*/

import { gsap } from 'gsap'

/**
 * @param {HTMLElement[]} elements - All elements matching [data-component='bounce']
 */
export default function (elements) {
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      gsap.to(element, {
        y: -30,
        duration: 0.3,
        ease: 'power2.out',
        yoyo: true,
        repeat: 1,
        onComplete: () => gsap.set(element, { y: 0 }),
      })
    })
  })
}
