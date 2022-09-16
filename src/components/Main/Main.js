import { Route, Routes } from "react-router-dom";
import { StyledMain } from "./Main.style";
import Home from "./pages/Home";
import React from "react";
import Lines from "./pages/Lines/Lines";
import Stops from "../Stops";

export default function Main() {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/lines" exact element={<Lines />}/>
        <Route path="/lines/:id" element={<Stops />} />
      </Routes>
    </StyledMain>
  );
}
