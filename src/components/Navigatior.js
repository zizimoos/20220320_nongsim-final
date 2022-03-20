import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavList = styled.div`
  width: 200px;
  height: 100vh;
  position: absolute;
  top: 50px;
  left: 0;
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: transparent;
  ${(props) => (props.move ? `display: none;` : `display: flex;`)}
  ${(props) => (props.extendNavbar ? `display: flex;` : `display: none;`)}
  z-index: 1;
`;

const HamburgerButton = styled.button`
  width: 40px;
  height: 40px;
  padding-left: 10px;
  font-size: 25px;
  align-self: center;
  cursor: pointer;
  border: none;
  color: black;
  background-color: transparent;
`;

const Tabs = styled.div`
  width: 100vw;
  height: 50px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background-color: transparent;
  color: black;
`;
const Tab = styled.div`
  padding: 10px;
`;
const NextButton = styled.div`
  font-size: 1em;
  font-weight: 400;
`;

function Navigatior(props) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  // const [move, setMove] = useState(false);

  const hamburgerClick = () => {
    setExtendNavbar(!extendNavbar);
  };
  return (
    <Tabs>
      <HamburgerButton onClick={hamburgerClick}>
        {extendNavbar ? <>&#10005;</> : <> &#9776;</>}
      </HamburgerButton>
      <NavList extendNavbar={extendNavbar}>
        <Tab>
          <Link to="/intro">
            <NextButton>intro</NextButton>
          </Link>
        </Tab>
        <Tab>
          <Link to="/about">
            <NextButton>about</NextButton>
          </Link>
        </Tab>
        <Tab>
          <Link to="/product">
            <NextButton>product</NextButton>
          </Link>
        </Tab>
        <Tab>
          <Link to="/characterani">
            <NextButton>characterani</NextButton>
          </Link>
        </Tab>

        <Tab>
          <Link to="/ragdoll">
            <NextButton>ragdoll</NextButton>
          </Link>
        </Tab>
        <Tab>
          <Link to="/earthicons">
            <NextButton>earthicons</NextButton>
          </Link>
        </Tab>
        <Tab>
          <Link to="/gameapp">
            <NextButton>gameapp</NextButton>
          </Link>
        </Tab>
      </NavList>
    </Tabs>
  );
}

export default Navigatior;
