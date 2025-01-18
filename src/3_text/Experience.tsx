import { OrbitControls, Text3D, Center } from "@react-three/drei";

import { Perf } from "r3f-perf";

import { useControls } from "leva";

export function Experience() {
  // const someControls = useControls("_", { test: 1 });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* <mesh>
        <boxGeometry />
        <meshNormalMaterial />
      </mesh> */}

      {/* ----------------------------- */}
      <Center>
        <Text3D
          font={"/fonts/fira sans/Fira Sans_Regular.json"}
          // TextGeometry instance attributes
          size={0.75}
          height={0.2}
          curveSegments={12}
          bevelEnabled
          bevelThickness={0.02}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          ЗДРАВО R3F
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </>
  );
}
