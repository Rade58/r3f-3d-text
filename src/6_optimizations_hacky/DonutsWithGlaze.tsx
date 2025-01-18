import { useGLTF, Clone } from "@react-three/drei";

export function DonutsWithGlaze() {
  const model = useGLTF("/models/donut_with_glaze.glb");

  // return <primitive object={model.scene} scale={8} position={[2, -1.57, 2]} />;

  return (
    <>
      {/* <pointLight args={["white", 12]} /> */}
      <ambientLight />
      <Clone
        object={model.scene}
        scale={9}
        position={[-2.2, -0.54, 0.3]}
        rotation-x={-0.5}
        rotation-y={0.6}
      />
      ;
      <Clone
        object={model.scene}
        scale={6}
        position-x={-3.1}
        position-y={-0.2}
        rotation-z={-10}
        rotation-y={-10}
      />
      ;
      <Clone
        object={model.scene}
        scale={7}
        position-y={-0.6}
        rotation-y={0.1}
      />
      ;
    </>
  );
}

useGLTF.preload("/models/donut_with_glaze.glb");
