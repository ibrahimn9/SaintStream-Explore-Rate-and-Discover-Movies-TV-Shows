import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Box, Stack } from "@mui/material";

import { Home, MovieRelease, Detail, MovieDetail, TvDetail } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/movie_release" element={<MovieRelease />} />
        <Route path="/detail/movie/:id" element={<MovieDetail />} />
        <Route path="/detail/tv/:id" element={<TvDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
