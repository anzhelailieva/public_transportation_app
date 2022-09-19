import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import { StyledMain } from "./Main.style";
import Stops from "../Stops";

export default function Main() {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/lines/:id" element={<Stops />} />
      </Routes>
    </StyledMain>
  );
}
