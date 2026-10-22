
import { useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import './App.css'

gsap.registerPlugin(ScrollTrigger)

function App() {
  const sectionRef = useRef(null)
  const carRef = useRef(null)

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.eyebrow, .hero h1, .description', {
        y: 35,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
      })

      gsap.from('.stat', {
        y: 25,
        opacity: 0,
        duration: 0.7,
        stagger: 0.15,
        delay: 0.5,
        ease: 'power2.out',
      })

      gsap.to(carRef.current, {
        x:  Math.min(window.innerWidth * 0.35, 350),
        y: -100,
        rotation: -5,
        scale: 1.15,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 1,
        },
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={sectionRef} className="scroll-page">
      <section className="hero">
        <nav className="navbar">
          <div className="logo">itz<span>fizz.</span></div>
          <div className="menu">DIGITAL EXPERIENCE STUDIO</div>
        </nav>

        <div className="hero-content">
          <p className="eyebrow">CREATIVE DIGITAL EXPERIENCES</p>
          <h1>WELCOME<br /><span>ITZFIZZ</span></h1>
          <p className="description">
            We turn bold ideas into meaningful digital experiences.
          </p>

          <div className="stats">
            <div className="stat"><h2>95%</h2><p>Client satisfaction</p></div>
            <div className="stat"><h2>80%</h2><p>Engagement growth</p></div>
            <div className="stat"><h2>3.5x</h2><p>Brand visibility</p></div>
            <div className="stat"><h2>99%</h2><p>Creative commitment</p></div>
          </div>
        </div>

        <div className="scroll-note">
          <span className="scroll-line"></span>
          SCROLL TO EXPLORE
        </div>
      </section>

      <section className="car-section">
        <p className="eyebrow">DESIGNED TO MOVE YOU</p>
        <h2>Ideas in motion.</h2>
        <p className="car-caption">Scroll down to move the car.</p>

        <div className="car-stage">
          <div ref={carRef} className="car">
            <div className="car-window"></div>
            <div className="car-body"></div>
            <div className="wheel wheel-left"></div>
            <div className="wheel wheel-right"></div>
          </div>
          <div className="road"></div>
        </div>

        <p className="end-note">THE JOURNEY IS JUST BEGINNING.</p>
      </section>
    </main>
  )
}

export default App
