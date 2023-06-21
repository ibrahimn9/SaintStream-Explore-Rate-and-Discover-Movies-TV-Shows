import React, { useState, useEffect } from "react";

import { Box, Stack } from "@mui/material";

import { useParams } from "react-router-dom";

import { findTvById } from "../services/findTvById";
import { fetchTvCast } from "../services/fetchTvCast";
import { fetchSimilarTvs } from "../services/fetchSimilarTvs";
import { fetchSeason } from "../services/fetchSeason";

import images from "../constants/images";
import { convertMinutesToHours } from "../constants/convertMinutesToHours";

import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { FiDownload } from "react-icons/fi";
import { SlLike } from "react-icons/sl";
import { BiShareAlt } from "react-icons/bi";

import { SmallPoster, Footer, Cast, Poster, SmallContainerX, ContainerX, NavBar } from "../components";

const TvDetail = () => {
  const { id } = useParams();
  const [tvDetail, setTvDetail] = useState();
  const [tvCast, setTvCast] = useState();
  const [similarTvs, setSimilarTvs] = useState();
  const [season, setSeason] = useState(1)
  const [episodes, setEpisodes] = useState()

  const fetchData = async () => {
    const res = await findTvById(id);
    setTvDetail(res);

    const res2 = await fetchTvCast(id);
    setTvCast(res2);

    const res3 = await fetchSimilarTvs(id);
    setSimilarTvs(res3);
  };

  const fetchSeasonData = async () => {
    const res = await fetchSeason(id, season)
    setEpisodes(res)
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setTvDetail()
    fetchData();
  }, [id]);

  useEffect(() => {
    setEpisodes()
    fetchSeasonData()
  }, [season, id])

  if (!tvDetail)
    return (
      <Box sx={{ height: "auto" }}>
        <Box
          sx={{
            top: "0",
            position: "absolute",
            width: "100%",
            height: "90vh",
            overflow: "hidden",
            zIndex: "-10",
          }}
          className="detail"
        ></Box>
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
          <div
            className="rank-box mb"
            style={{
              background: "black",
              color: "black",
              borderRadius: "15px",
            }}
          >
            Series
          </div>
          <h3
            className="title"
            style={{
              marginBottom: "15px",
              background: "black",
              color: "black",
              borderRadius: "15px",
            }}
          >
            The Last Of Us Season 1
          </h3>
          <p
            className="detail-item"
            style={{
              marginBottom: "15px",
              background: "black",
              color: "black",
              borderRadius: "15px",
            }}
          >
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
          <Box
            sx={{ display: { xs: "none", md: "flex" }, alignItems: "center" }}
          >
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
              marginBottom: "15px",
              background: "black",
              borderRadius: "15px",
              color: "black",
            }}
          >
            The third season of the American television series The Mandalorian
            stars Pedro Pascal as the title character, a bounty hunter traveling
            to Mandalore to redeem his past transgressions with his adopted son
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
            <h4
              className="med-cat-title"
              style={{
                marginBottom: "15px",
                background: "black",
                color: "black",
                borderRadius: "15px",
              }}
            >
              1-9Episode
            </h4>
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
  return (
    <Box sx={{ height: "auto" }}>
      <Box
        sx={{
          top: "0",
          position: "absolute",
          width: "100%",
          height: "90vh",
          overflow: "hidden",
          zIndex: "-10",
          background: `url(https://image.tmdb.org/t/p/original${tvDetail?.backdrop_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="detail"
      ></Box>
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
        <div className="rank-box mb">Serie</div>
        <h3 className="title" style={{ marginBottom: "15px" }}>
          {tvDetail.name}
        </h3>
        <p className="detail-item" style={{ marginBottom: "15px" }}>
          {tvDetail.number_of_episodes} Episodes -{" "}
          {tvDetail.first_air_date.slice(0, 4)} -{" "}
          {tvDetail.genres.map((genre, index) => ` ${genre.name} -`)}
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
          }}
        >
          {tvDetail.overview}
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
              {(tvCast || [...Array(10)]).map((actor, index) => (
                <Cast actor={actor} key={index} />
              ))}
            </Stack>
          </Box>
        </Box>
        <Box sx={{ mt: 6 }} className="par-container">
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h4 className="med-cat-title">Episodes</h4>
            <select
              className="outlined-btn btn"
              style={{ padding: "5px 10px", borderColor: "#252427" }}
              value={season}
              onChange={(e) => setSeason(e.target.value)}
            >
              {[...Array(tvDetail.number_of_seasons)].map((_, index) => (
                <option key={index} value={index + 1}>Season {index + 1}</option>
              ))}
            </select>
          </Box>
          <SmallContainerX movies={episodes} />
        </Box>
        <Box sx={{ mt: 6 }} className="par-container">
          <h4 className="med-cat-title">Similar Series for you</h4>
          <ContainerX movies={similarTvs} />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
};

export default TvDetail;
