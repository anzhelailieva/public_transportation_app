import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import React from "react";
import { StyledMain } from "./Main.style";
import Stops from "../Stops";
import PageNotFound from "./pages/PageNotFound";

export default function Main() {
  return (
    <StyledMain>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/line/:id" element={<Stops />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </StyledMain>
  );
}
