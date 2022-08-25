import { PlaneProps, usePlane } from "@react-three/cannon";
import { Mesh, RepeatWrapping } from "three";

import { useTexture } from "@react-three/drei";

interface GroundProps extends PlaneProps {}

function Ground(props: GroundProps) {
  const [groundRef] = usePlane<Mesh>(() => ({
    rotation: [-Math.PI / 2, 0, 0],

    ...props,
  }));

  const grassTexture = useTexture("/textures/grass.jpeg");

  grassTexture.wrapS = RepeatWrapping;
  grassTexture.wrapT = RepeatWrapping;
  grassTexture.repeat.set(100, 100);

  return (
    <mesh ref={groundRef} receiveShadow>
      <planeBufferGeometry args={[100, 100]} />
      <meshStandardMaterial map={grassTexture} />
    </mesh>
  );
}

export default Ground;
