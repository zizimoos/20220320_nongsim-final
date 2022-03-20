import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import About from "./components/Presentation/About";
import Ballpit from "./components/Presentation/Ballpit";
import CharacterAni from "./components/Presentation/CharacterAni";
import EarthIcons from "./components/Presentation/EarthIcons";
import Intro from "./components/Presentation/Intro";
import Product from "./components/Presentation/Product";
import RagDoll from "./components/Presentation/RagDoll";
import Navigatior from "./components/Navigatior";

function Router(props) {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Navigatior />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/ballpit" element={<Ballpit />} />
        <Route path="/characterani" element={<CharacterAni />} />
        <Route path="/earthicons" element={<EarthIcons />} />
        <Route path="/intro" element={<Intro />} />
        <Route path="/product" element={<Product />} />
        <Route path="/ragdoll" element={<RagDoll />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
