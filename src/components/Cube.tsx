import { BoxProps, useBox } from "@react-three/cannon";
import { useTexture } from "@react-three/drei";
import { Mesh } from "three";
import { TCube } from "../hooks/store";

interface CubeProps extends BoxProps {
  cube: TCube;
}

function Cube({ cube, ...props }: CubeProps) {
  const [cubeRef] = useBox<Mesh>(() => ({
    type: "Static",
    position: cube.position,
    ...props,
  }));

  const dirtTexture = useTexture("/textures/dirt.jpeg");
  const glassTexture = useTexture("/textures/glass.png");
  const logTexture = useTexture("/textures/log.jpeg");
  const woodTexture = useTexture("/textures/wood.png");

  return (
    <mesh ref={cubeRef} castShadow>
      <boxBufferGeometry attach="geometry" />
      <meshStandardMaterial map={dirtTexture} />
    </mesh>
  );
}

export default Cube;
