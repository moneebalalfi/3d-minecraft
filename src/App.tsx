import { Box } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { sRGBEncoding } from "three";

function App() {
  return (
    <Canvas
      gl={{
        outputEncoding: sRGBEncoding,
      }}
    >
      <mesh>
        <Box />
      </mesh>
    </Canvas>
  );
}

export default App;
