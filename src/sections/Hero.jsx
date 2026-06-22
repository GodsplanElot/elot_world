import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"

const Hero = () => {
  return (
    <section id="home" className="relative flex items-center justify-center min-h-screen overflow-hidden">
      <HeroText />
      <ParallaxBackground />
    </section>
  )
}

export default Hero
