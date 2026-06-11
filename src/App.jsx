import { useEffect } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './index.css'
import Hero from './Hero'
import Trust from './Trust'
import Services from './Services'
import Portfolio from './Portfolio'
import Process from './Process'
import Pricing from './Pricing'
import Contact from './Contact'
import { initLenis, destroyLenis } from './lenis'

gsap.registerPlugin(ScrollTrigger)

function App() {
  useEffect(() => {
    const lenis = initLenis()

    // Keep GSAP ScrollTrigger in sync with every Lenis scroll tick
    const onScroll = () => ScrollTrigger.update()
    lenis.on('scroll', onScroll)

    // Drive Lenis from the GSAP ticker so both are on the same rAF loop.
    // Store the callback reference — gsap.ticker.add() returns the ticker
    // itself, NOT the callback, so we must keep our own reference for removal.
    const lenisRaf = (time) => lenis.raf(time * 1000)
    gsap.ticker.add(lenisRaf)
    gsap.ticker.lagSmoothing(0)

    return () => {
      lenis.off('scroll', onScroll) // remove scroll listener
      gsap.ticker.remove(lenisRaf)  // remove RAF callback by reference
      destroyLenis()                // destroy + reset singleton to null
    }
  }, [])

  return (
    <main>
      <Hero />
      <Trust />
      <Portfolio />
      <Services />
      <Process />
      <Pricing />
      <Contact />
    </main>
  )
}

export default App
