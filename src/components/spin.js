/*
Component: spin
Webflow attribute: data-component="spin"
*/

import { gsap } from 'gsap'

/**
 * @param {HTMLElement[]} elements - All elements matching [data-component='spin']
 */
export default function (elements) {
  elements.forEach((element) => {
    element.addEventListener('click', () => {
      gsap.to(element, {
        rotation: '+=360',
        duration: 0.6,
        ease: 'power2.inOut',
      })
    })
  })
}
