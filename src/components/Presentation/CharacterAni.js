import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Model from "./Model";
import styled from "styled-components";
import { Link } from "react-router-dom";

const NextButton = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  bottom: 10px;
  right: 10px;
  border-radius: 50%;
  background-color: #f5f5f5;
`;

export default function CharacterAni() {
  return (
    <>
      <Canvas
        camera={{ position: [2, 0, 12.25], fov: 15 }}
        style={{
          backgroundColor: "#111a21",
          width: "100vw",
          height: "100vh",
        }}
      >
        <ambientLight intensity={1.25} />
        <ambientLight intensity={0.1} />
        <directionalLight intensity={0.4} />
        <Suspense fallback={null}>
          <Model position={[0.025, -0.9, 1]} />
        </Suspense>
        <OrbitControls />
      </Canvas>
      <Link to="/product">
        <NextButton>NEXT</NextButton>
      </Link>
    </>
  );
}
