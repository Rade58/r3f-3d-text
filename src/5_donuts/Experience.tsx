import {
  OrbitControls,
  Text3D,
  Center,
  useMatcapTexture,
  useTexture,
} from "@react-three/drei";

import { Perf } from "r3f-perf";

import { useControls } from "leva";
import { Suspense } from "react";
import { DonutsWithGlaze } from "./DonutsWithGlaze";

export function Experience() {
  // const someControls = useControls("_", { test: 1 });

  // This is texture from CDN
  /* const cdnMatcapTexture = useMatcapTexture(
    // "605352_E9CCC5_C7A8A3_A89291",
    // "613F04_D68C04_A45F04_1F0F04",
    "5F1827_9B4A60_1F0404_340406",
    // "617586_23304C_1B1E30_4988CF",
    // "622F19_885934_9A7748_94603A",
    256
  ); */

  // This is local texture
  const matcapTexture = useTexture(
    // "/textures/matcaps/605352_E9CCC5_C7A8A3_A89291-256px.png"
    // "/textures/matcaps/613F04_D68C04_A45F04_1F0F04-256px.png"
    // "/textures/matcaps/5F1827_9B4A60_1F0404_340406-256px.png"
    "/textures/matcaps/617586_23304C_1B1E30_4988CF-256px.png"
    // "/textures/matcaps/622F19_885934_9A7748_94603A-256px.png"
  );

  // console.log({ matcapTexture });

  return (
    <>
      <Perf position="top-left" />

      <OrbitControls makeDefault />

      {/* ----------------------------- */}
      {/* ----------------------------- */}

      {/* ----------------------------- */}
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
          <meshMatcapMaterial
            // matcap={cdnMatcapTexture[0]}
            matcap={matcapTexture}
          />
        </Text3D>
      </Center>
      {/* ----------------------------- */}
      {/* ----------------------------- */}

      <Suspense>
        <DonutsWithGlaze />
      </Suspense>
    </>
  );
}
