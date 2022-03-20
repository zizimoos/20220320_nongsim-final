import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";
import Model from "./Model";
import styled from "styled-components";
import { Link } from "react-router-dom";

const TeamMemberBox = styled.div`
  width: 100vw;
  height: 50vh;
  display: flex;
  position: absolute;
  top: 100px;
  left: 0;
  justify-content: center;
  align-items: flex-start;
  z-index: 1;
`;

const TeamMember = styled.div`
  width: 200px;
  height: 300px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  color: white;
  background-color: teal;
`;

const TeamMemberFace = styled.div`
  width: 100px;
  height: 100px;
  margin-top: 20px;
  border-radius: 50%;
  background-color: white;
`;

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
      <div>
        <TeamMemberBox>
          <TeamMember>
            <TeamMemberFace></TeamMemberFace>
          </TeamMember>
          <TeamMember>
            <TeamMemberFace></TeamMemberFace>
          </TeamMember>
          <TeamMember>
            <TeamMemberFace></TeamMemberFace>
          </TeamMember>
          <TeamMember>
            <TeamMemberFace></TeamMemberFace>
          </TeamMember>
        </TeamMemberBox>
      </div>
      <div>
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
          <Html></Html>
          <Suspense fallback={null}>
            <Model position={[0.025, -0.9, 1]} />
          </Suspense>
          <OrbitControls />
        </Canvas>
        <Link to="/product">
          <NextButton>NEXT</NextButton>
        </Link>
      </div>
    </>
  );
}
