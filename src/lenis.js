import Lenis from 'lenis'

// ─── Singleton Lenis instance ─────────────────────────────────────────────────
let lenisInstance = null

export function getLenis() {
  return lenisInstance
}

/**
 * Create and return the Lenis instance.
 * Lenis.raf() is driven externally by App.jsx via gsap.ticker.
 */
export function initLenis() {
  if (lenisInstance) return lenisInstance

  lenisInstance = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // expo ease-out
    orientation: 'vertical',
    smoothWheel: true,
    wheelMultiplier: 1.0,
    touchMultiplier: 1.5,
  })

  return lenisInstance
}

/**
 * Destroy the Lenis instance and clear the singleton reference
 * so that the next initLenis() call creates a fresh instance.
 */
export function destroyLenis() {
  if (lenisInstance) {
    lenisInstance.destroy()
    lenisInstance = null
  }
}

/**
 * Smoothly scroll to a section by its element ID.
 * Uses Lenis if initialized, falls back to native smooth scroll.
 *
 * @param {string} id     - The element's id (without the #)
 * @param {number} offset - Additional pixel offset for fixed navbar. Default -80.
 */
export function smoothScrollTo(id, offset = -80) {
  const el = document.getElementById(id)
  if (!el) return

  if (lenisInstance) {
    lenisInstance.scrollTo(el, {
      offset,
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    })
  } else {
    const top = el.getBoundingClientRect().top + window.scrollY + offset
    window.scrollTo({ top, behavior: 'smooth' })
  }
}
