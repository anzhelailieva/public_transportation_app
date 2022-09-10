import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./pages/Home";
import Line from "./pages/Line/Line";
import Table from "./pages/Table/Table";

export default function Main() {
  return (
    <>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/line" exact element={<Line />} />
        <Route path="/table" exact element={<Table />} />
      </Routes>
    </>
  );
}
