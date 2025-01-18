import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
  useTexture,
} from "@react-three/drei";

import { Perf } from "r3f-perf";

import { useControls } from "leva";

export function Experience() {
  // const someControls = useControls("_", { test: 1 });

  const cdnMatcapTexture = useMatcapTexture("605352_E9CCC5_C7A8A3_A89291");

  /* const matcapTexture = useTexture(
    // "/textures/matcaps/613F04_D68C04_A45F04_1F0F04-512px.png"
    "/textures/matcaps/605352_E9CCC5_C7A8A3_A89291-512px.png"
  ); */

  // console.log({ matcapTexture });

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
          {/* <meshNormalMaterial /> */}
          <meshMatcapMaterial
            matcap={cdnMatcapTexture[0]}
            // matcap={matcapTexture}
          />
        </Text3D>
      </Center>
    </>
  );
}
