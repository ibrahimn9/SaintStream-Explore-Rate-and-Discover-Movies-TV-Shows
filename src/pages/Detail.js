import React, { useState, useEffect } from "react";
import { Box, Stack } from "@mui/material";
import { NavBar } from "../components";
import { useParams } from "react-router-dom";
import { findMovieById } from "../services/findMovieById";

import images from "../constants/images";

import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { SlLike } from "react-icons/sl";
import { BiShareAlt } from "react-icons/bi";

import { SmallPoster, Footer, Cast, Poster } from "../components";

const Detail = () => {
  const { id } = useParams();
  const [movieDetail, setMovieDetail] = useState();

  const fetchData = async () => {
    const res = await findMovieById(id)
    console.log(res)
    setMovieDetail(res)
  };

  useEffect(() => {
    //fetchData()
  }, [])

  return (
    <Box sx={{ height: "auto" }}>
      <Box
        sx={{
          top: "0",
          position: "absolute",
          width: "100%",
          overflow: "hidden",
          zIndex: "-10",
        }}
        className="detail"
      >
        <img src={images.detailBg} className="detail-bg" />
      </Box>
      <NavBar />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", md: "start" },
          mt: 32,
          maxWidth: { xs: "100%", md: "80%" },
          px: { xs: 2, md: 4, lg: 6 },
        }}
      >
        <div className="rank-box mb">Series</div>
        <h3 className="title" style={{ marginBottom: "15px" }}>
          The Last Of Us Season 1
        </h3>
        <p className="detail-item" style={{ marginBottom: "15px" }}>
          9 Episodes - 2022 - Fantasy - Actions
        </p>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: { xs: "center", md: "space-between" },
          px: { xs: 2, md: 4, lg: 6 },
          mt: 2,
          flexBasis: "100%",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <button
            className="primary-btn btn mr"
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BsFillPlayCircleFill
              className="icon"
              style={{ marginRight: "5px" }}
            />
            Watch
          </button>
          <button
            className="outlined-btn btn"
            style={{
              fontSize: "20px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <BsBookmark className="icon" style={{ marginRight: "5px" }} />
            Watchlist
          </button>
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}>
          <button
            className="outlined-btn btn mr"
            style={{
              fontSize: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#0d0c0f",
              borderColor: "#252427",
            }}
          >
            <FiDownload
              className="icon"
              style={{ marginRight: "5px", fontSize: "22px" }}
            />
            Download
          </button>
          <button
            className="outlined-btn btn mr"
            style={{
              fontSize: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#0d0c0f",
              borderColor: "#252427",
            }}
          >
            <BiShareAlt
              className="icon"
              style={{ marginRight: "5px", fontSize: "22px" }}
            />
            Share
          </button>
          <button
            className="outlined-btn btn mr"
            style={{
              fontSize: "16px",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              background: "#0d0c0f",
              borderColor: "#252427",
            }}
          >
            <SlLike
              className="icon"
              style={{ marginRight: "5px", fontSize: "22px" }}
            />
            Like
          </button>
        </Box>
      </Box>
      <Box sx={{ mt: 6, px: { xs: 2, md: 4, lg: 6 } }}>
        <p
          className="detail-p mb"
          style={{ fontSize: "18px", fontWeight: "500" }}
        >
          Story Line
        </p>
        <p
          className="detail-p mb"
          style={{
            color: "rgba(255,255,255, 0.3)",
            letterSpacing: "1px",
            lineHeight: "25px",
          }}
        >
          The third season of the American television series The Mandalorian
          stars Pedro Pascal as the title character, a bounty hunter traveling
          to Mandalore to redeem his past transgressions with his adopted son
          Grogu and being aided on their journey by fellow Mandaorian Bo-Katan
          Kryze The third season of the American television series The
          Mandalorian stars Pedro Pascal as the title character, a bounty
          hunter.
        </p>
        <p
          className="detail-p mb"
          style={{ fontSize: "18px", fontWeight: "500", marginTop: "35px" }}
        >
          Top Cast
        </p>
        <Box className="par-container">
          <Box className="container" sx={{ mt: 1 }}>
            <Stack direction="row" className="scroll-container">
              {[...Array(30)].map((actor, index) => (
                <Cast />
              ))}
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{ mt: 6, borderBottom: "2px solid #252427", pb: 6 }}
          className="par-container"
        >
          <h4 className="med-cat-title">1-9Episode</h4>
          <Box className="container">
            <Stack direction="row" className="scroll-container">
              {[...Array(9)].map((poster, index) => (
                <SmallPoster key={index} />
              ))}
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: 6 }} className="par-container">
          <h4 className="med-cat-title">Similar Movies for you</h4>
          <Box className="container">
            <Stack direction="row" className="scroll-container">
              {[...Array(9)].map((poster, index) => (
                <Poster key={index} />
              ))}
            </Stack>
          </Box>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default Detail;
