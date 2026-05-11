import { useMemo, useRef } from "react";
import { CircleGeometry, ExtrudeGeometry, Shape, TorusGeometry } from "three";
import { useFrame } from "@react-three/fiber";

export function LightningBolt(props) {
  const group = useRef();

  const geometry = useMemo(() => {
    const shape = new Shape();
    shape.moveTo(0, 0);
    shape.lineTo(0.28, 0);
    shape.lineTo(0.05, -0.4);
    shape.lineTo(0.4, -0.4);
    shape.lineTo(0, -1);
    shape.lineTo(0.22, -0.58);
    shape.lineTo(-0.05, -0.58);
    shape.closePath();

    return new ExtrudeGeometry(shape, {
      depth: 0.14,
      bevelEnabled: true,
      bevelThickness: 0.04,
      bevelSize: 0.03,
      bevelSegments: 4,
      steps: 1,
    });
  }, []);

  const haloGeometry = useMemo(() => new TorusGeometry(0.68, 0.02, 16, 64), []);
  const sparkGeometry = useMemo(() => new CircleGeometry(0.04, 32), []);

  useFrame((state, delta) => {
    if (group.current) {
      const t = state.clock.elapsedTime;
      group.current.rotation.y = Math.sin(t * 0.6) * 0.18;
      group.current.rotation.x = 0.16;
      group.current.rotation.z = Math.cos(t * 0.3) * 0.12 - 0.15;
      group.current.position.y = Math.sin(t * 1.4) * 0.04 - 0.08;
    }
  });

  return (
    <group
      ref={group}
      {...props}
      scale={props.scale || 1.5}
      position={props.position || [0, -0.2, 0]}
      rotation={props.rotation || [0.16, -0.9, -0.15]}
    >
      <mesh geometry={geometry} castShadow receiveShadow>
        <meshStandardMaterial
          color="#ffd84a"
          metalness={0.92}
          roughness={0.12}
          emissive="#fff09c"
          emissiveIntensity={1.2}
        />
      </mesh>

      <mesh geometry={haloGeometry} rotation={[Math.PI / 2, 0, 0]} position={[0.1, -0.24, 0]}>
        <meshBasicMaterial color="#ffed82" transparent opacity={0.35} toneMapped={false} />
      </mesh>
      <mesh geometry={haloGeometry} rotation={[Math.PI / 2, 0, 0]} position={[0.1, -0.24, 0]} scale={[1.25, 1.25, 1.25]}>
        <meshBasicMaterial color="#ffe99f" transparent opacity={0.18} toneMapped={false} />
      </mesh>
      <mesh geometry={haloGeometry} rotation={[Math.PI / 2, 0, 0]} position={[0.1, -0.24, 0]} scale={[1.6, 1.6, 1.6]}>
        <meshBasicMaterial color="#fff1c7" transparent opacity={0.1} toneMapped={false} />
      </mesh>

      {[[-0.5, -0.28, 0.06], [0.55, -0.15, 0.1], [0.1, -0.75, 0.05], [-0.35, -0.9, 0.03]].map((position, index) => (
        <mesh key={index} geometry={sparkGeometry} position={position} rotation={[Math.PI / 2, 0, 0]}>
          <meshBasicMaterial color="#fff4b8" transparent opacity={0.8 - index * 0.15} toneMapped={false} />
        </mesh>
      ))}

      <mesh position={[0.14, -0.55, 0.02]}>
        <sphereGeometry args={[0.08, 18, 18]} />
        <meshStandardMaterial color="#fff5b8" emissive="#fff8c5" emissiveIntensity={1.6} metalness={0.7} roughness={0.05} />
      </mesh>
    </group>
  );
}
