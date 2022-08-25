import { Physics } from "@react-three/cannon";
import { PerspectiveCamera, Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { sRGBEncoding } from "three";
import Cube from "./components/Cube";
import Ground from "./components/Ground";

function App() {
  return (
    <Canvas
      shadows
      gl={{
        outputEncoding: sRGBEncoding,
      }}
    >
      <Sky sunPosition={[100, 20, 100]} />
      <PerspectiveCamera makeDefault position={[0, 1.2, 20]} />
      <ambientLight intensity={0.25} />
      <pointLight intensity={0.7} castShadow position={[100, 100, 100]} />

      <Physics gravity={[0, -30, 0]}>
        <Cube cube={{ position: [0, 1, 0], type: "wood" }} />
        <Ground position={[0, 0.5, 0]} />
      </Physics>
    </Canvas>
  );
}

export default App;
