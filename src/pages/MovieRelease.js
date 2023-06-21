import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { NavBar, Release, Footer } from "../components";

import { fetchUpComing } from "../services/fetchUpComing";

const MovieRelease = () => {
  const [upComing, setUpComing] = useState();

  const fetchData = async () => {
    const res = await fetchUpComing();
    setUpComing(res);
  };

  useEffect(() => {
    fetchData()
  }, []);



  return (
    <Box sx={{ height: "auto" }}>
      <Box className="movie-release" />
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
          mt: 20,
          maxWidth: { xs: "100%", md: "50%" },
          px: { xs: 2, md: 4, lg: 6 },
        }}
      >
        <h3 className="title mb" style={{ fontSize: "48px" }}>
          Schedule Release All Movie Around The World
        </h3>
        <p className="detail-p">
          Get up to date to movie schedule release all around the world
        </p>
      </Box>
      <Box sx={{ mt: 8, px: { xs: 2, md: 4, lg: 6 } }}>
        <h4 className="med-cat-title" style={{ fontWeight: "700" }}>
          UPCOMING RELEASE
        </h4>
        <Release movies={upComing} />

        <button className="outlined-btn btn" style={{ marginTop: "15px" }}>
          Show more
        </button>
      </Box>
      <Footer />
    </Box>
  );
};

export default MovieRelease;
