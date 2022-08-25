import { SphereProps, useSphere } from "@react-three/cannon";
import { useFrame, useThree } from "@react-three/fiber";
import { Mesh } from "three";

interface PlayerProps extends SphereProps {}

const Player = (props: PlayerProps) => {
  const { camera } = useThree();

  const [playerRef] = useSphere<Mesh>(() => ({
    mass: 1,
    type: "Dynamic",
    ...props,
  }));

  useFrame(() => {
    if (playerRef.current) {
      camera.position.copy(playerRef.current.position);
    }
  });

  return <mesh ref={playerRef} />;
};

export default Player;
