import { Canvas } from "@react-three/fiber"
import { Float} from "@react-three/drei"
import { useFrame } from "@react-three/fiber"
import { easing } from "maath"
import { useMediaQuery } from "react-responsive"
import { LightningBolt } from "../components/LightningBolt"
import HeroText from "../components/HeroText"
import ParallaxBackground from "../components/ParallaxBackground"
import { Suspense } from "react"
import Loader from "../components/Loader"

const Hero = () => {
  const isMobile = useMediaQuery ({ maxWidth: 853 });
  return (
    <section className="flex items-start justify-center md:items-start md:justify-start min-h-screen overflow-hidden c-space">
      <HeroText />
      <ParallaxBackground />
      <figure className="absolute inset-0" style={{width: "100vw", height: "100vh"}}>
        <Canvas camera={{ position: [0, 1, 3] }} dpr={[1, 1.5]} gl={{ antialias: false }}>
          <ambientLight intensity={0.45} />
          <pointLight position={[2, 3, 3]} intensity={1.2} color="#ffd966" />
          <directionalLight position={[-2, 1, 1]} intensity={0.6} color="#ffe6a0" />
          <Suspense fallback={<Loader />}>
            <Float floatIntensity={1.2} rotationIntensity={0.3} speed={1.2}>
              <LightningBolt
                scale={isMobile ? 1.1 : 1.6}
                position={isMobile ? [0, -0.2, 0] : [0, -0.15, 0]}
              />
            </Float>
            <Rig />
          </Suspense>
        </Canvas>
      </figure>
    </section>
  )
}

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(state.camera.position, [state.mouse.x / 10, 1 + state.mouse.y /10, 3], 
    0.5,
    delta
    );
  });
}


export default Hero
