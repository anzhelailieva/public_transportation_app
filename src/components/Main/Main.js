import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Lines from "./pages/Lines/Lines";
import Table from "./pages/Table/Table";
import Stops from "../Stops";
import { StyledMain } from "./Main.style";

export default function Main() {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/lines" exact element={<Lines />}/>
        <Route path="/lines/:id" element={<Stops />} />
        <Route path="/table" exact element={<Table />} />
      </Routes>
    </StyledMain>
  );
}
