import React, { useState, useEffect, useRef } from "react";

import {
  NavBar,
  Poster,
  RankingPoster,
  SmallPoster,
  Footer,
  ContainerX,
} from "../components";

import { Stack, Box } from "@mui/material";
import { AiFillStar } from "react-icons/ai";

import images from "../constants/images";

import { BsFillPlayCircleFill } from "react-icons/bs";
import { BsBookmark } from "react-icons/bs";
import { getGenres } from "../constants/getGenres";

import { companies } from "../constants/companies";
import { getPopularMovies } from "../services/getPopularMovies";
import { getTrendingThisWeek } from "../services/getTrendingThisWeek";
import { getPopularTvs } from "../services/getPopularTvs";
import { getTopRatedMovies } from "../services/getTopRatedMovies";
import { getTopRatedSeries } from "../services/getTopRatedSeries";
import { fetchUpComing } from "../services/fetchUpComing";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState();
  const [trending, setTrending] = useState();
  const [trendingHeader, setTrendingHeader] = useState();
  const [popularTvShows, setPopularTvShows] = useState();
  const [headerTvShows, setHeaderTvShows] = useState();
  const [topRatedMovies, setTopRatedMovies] = useState();
  const [topRatedSeries, setTopRatedSeries] = useState();

  const navigate = useNavigate();

  const fetchData = async () => {
    const res1 = await getPopularMovies();
    setPopularMovies(res1);

    const res2 = await getTrendingThisWeek();
    setTrending(res2);
    setTrendingHeader(res2[0]);

    const res3 = await getPopularTvs();
    setPopularTvShows(res3);
    setHeaderTvShows(res3[0]);

    const res4 = await getTopRatedMovies();
    setTopRatedMovies(res4);
  };

  const fetchTopSeries = async () => {
    const res = await getTopRatedSeries();
    setTopRatedSeries(res);
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    fetchTopSeries();
  }, []);

  return (
    <Box sx={{ height: "auto" }}>
      <Box sx={{ height: "100vh", width: "100%", position: "relative" }}>
        <Box
          sx={{
            top: "0",
            position: "absolute",
            width: "100%",
            height: "100vh",
            overflow: "hidden",
            display: "flex",
            justifyContent: "center",
            zIndex: "-10",
            background: `url(https://image.tmdb.org/t/p/original${trendingHeader?.backdrop_path})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="main"
        />
        <NavBar />
        {!trendingHeader ? (
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
            <div className="rank-box mb" style={{ color: "transparent" }}>
              Movie
            </div>
            <h3
              className="title"
              style={{
                marginBottom: "15px",
                background: "rgba(25, 25, 25, 0.7)",
                color: "transparent",
                borderRadius: 10,
              }}
            >
              Star Wars: The force Awaken
            </h3>
            <p
              className="detail-item"
              style={{
                marginBottom: "15px",
                background: "rgba(25, 25, 25, 0.7)",
                color: "transparent",
                borderRadius: 10,
              }}
            >
              2h40m - 2022 - Fantasy - Action
            </p>
            <p
              className="detail-p mb"
              style={{
                background: "rgba(25, 25, 25, 0.7)",
                color: "transparent",
                borderRadius: 10,
              }}
            >
              The third season of the American television series The Mandalorian
              stars Pedro Pascal as the title character, a bounty hunter
            </p>
            <p
              className="detail-p mb"
              style={{
                background: "rgba(25, 25, 25, 0.7)",
                color: "transparent",
                borderRadius: 10,
              }}
            >
              The third season of the American television series The Mandalorian
              stars Pedro Pascal as the title character, a bounty hunter
            </p>
            <p
              className="detail-p"
              style={{
                background: "rgba(25, 25, 25, 0.7)",
                color: "transparent",
                borderRadius: 10,
              }}
            >
              The third season of the American television series The Mandalorian
              stars Pedro Pascal as the title character, a bounty hunter
            </p>
          </Box>
        ) : (
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
            <div className="rank-box">{trendingHeader.media_type}</div>
            <h3 className="title" style={{ marginBottom: "15px" }}>
              {trendingHeader.media_type === "tv"
                ? trendingHeader.name
                : trendingHeader.title}
            </h3>
            <p
              className="detail-item"
              style={{
                marginBottom: "15px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiFillStar
                style={{
                  fontSize: "22px",
                  color: "#FFCD19",
                  marginRight: "5px",
                }}
              />
              <span
                className="detail-p"
                style={{ fontSize: "16px", marginRight: "5px" }}
              >
                {trendingHeader.vote_average?.toFixed(2)}
              </span>
              <span
                className="detail-item"
                style={{ fontSize: "16px", marginRight: "5px" }}
              >
                |{" "}
                {trendingHeader.media_type !== "tv"
                  ? trendingHeader.release_date.slice(0, 4)
                  : trendingHeader.first_air_date.slice(0, 4)}
              </span>
              <span className="detail-item" style={{ fontSize: "16px" }}>
                |{" "}
                {getGenres(
                  trendingHeader?.genre_ids.slice(0, 2),
                  trendingHeader.media_type
                ).map((genre, index) =>
                  index !== 1 ? ` ${genre} -` : ` ${genre}`
                )}
              </span>
            </p>
            <p className="detail-p">{trendingHeader.overview}</p>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                mt: 4,
                flexBasis: "100%",
              }}
            >
              <button
                className="primary-btn btn mr"
                style={{
                  fontSize: "20px",
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
                onClick={() => navigate(`/detail/movie/${trendingHeader.id}`)}
              >
                <BsFillPlayCircleFill
                  className="icon"
                  style={{ marginRight: "5px" }}
                />
                Watch Trailer
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
                Add Watchlist
              </button>
            </Box>
          </Box>
        )}
        <Box
          sx={{
            px: { xs: 2, md: 4, lg: 6 },
            py: 6,
            mt: 4,
          }}
        >
          <Box className="container">
            <Stack direction="row" className="scroll-container">
              {companies.map((company) => (
                <Box sx={{ mr: 4, cursor: "pointer" }} key={company.name}>
                  <Box
                    sx={{
                      overflow: "hidden",
                      background: "black",
                      px: 4,
                      py: 1,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      borderRadius: 4,
                      boxShadow: "0 0 10px rgba(0,0,0,0.7)",
                    }}
                  >
                    <img
                      src={images[company.image]}
                      alt={company.name}
                      style={{
                        height: "50px",
                        width: "100px",
                      }}
                    />
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>
        <Box
          sx={{ px: { xs: 2, md: 4, lg: 6 }, mt: 4 }}
          className="par-container"
        >
          <h4 className="med-cat-title">Popular</h4>
          <ContainerX movies={popularMovies} />
        </Box>
        <Box
          sx={{ px: { xs: 2, md: 4, lg: 6 }, mt: 8 }}
          className="par-container"
        >
          <h4 className="med-cat-title">Trending this week</h4>
          <RankingPoster trending={trending ? trending : undefined} />
        </Box>

        <Box
          sx={{
            width: "100%",
            height: "auto",
            py: 16,
            overflow: "hidden",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: 12,
            position: "relative",
            background: `linear-gradient(to right, rgba(15, 12, 13, 0.9) 25%, transparent 100%), url(https://image.tmdb.org/t/p/original${headerTvShows?.backdrop_path})`,
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
          className="sec"
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "center", md: "start" },
              maxWidth: { xs: "100%", md: "50%" },
              px: { xs: 2, md: 4, lg: 6 },
              flexBasis: { xs: "100%", md: "50%" },
            }}
          >
            <h3 className="title mb">Featured in SaintStream</h3>
            <Box sx={{ mb: { xs: "15px", md: "70px" } }}>
              <h5 className="sub-title">Best featured for you today</h5>
            </Box>

            <ContainerX
              movies={popularTvShows}
              style={{ display: { xs: "flex", md: "none" }, mb: "70px" }}
            />

            {!popularTvShows && (
              <Box>
                <h3
                  className="title mb"
                  style={{
                    color: "transparent",
                    fontSize: "18px",
                    padding: "0 15px",
                    background: "black",
                    borderRadius: "15px",
                  }}
                >
                  Star Wars wars wars
                </h3>
                <p
                  className="detail-item"
                  style={{
                    marginBottom: "15px",
                    color: "transparent",
                    fontSize: "18px",
                    padding: "0 15px",
                    background: "black",
                    borderRadius: "15px",
                  }}
                >
                  2h40m - 2022 - Superhero - Actions
                </p>
                <p
                  className="detail-p"
                  style={{
                    color: "transparent",
                    fontSize: "18px",
                    padding: "0 15px",
                    background: "black",
                    borderRadius: "15px",
                  }}
                >
                  The third season of the American television series The
                  Mandalorian
                </p>
              </Box>
            )}
            {headerTvShows && (
              <>
                <h3
                  className="title mb"
                  style={{
                    fontSize: "36px",
                  }}
                >
                  {headerTvShows?.name}
                </h3>
                <p
                  className="detail-item"
                  style={{
                    marginBottom: "15px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <AiFillStar
                    style={{
                      fontSize: "22px",
                      color: "#FFCD19",
                      marginRight: "5px",
                    }}
                  />
                  <span
                    className="detail-p"
                    style={{ fontSize: "16px", marginRight: "5px" }}
                  >
                    {headerTvShows?.vote_average?.toFixed(2)}
                  </span>
                  <span
                    className="detail-item"
                    style={{ fontSize: "16px", marginRight: "5px" }}
                  >
                    | {headerTvShows.first_air_date.slice(0, 4)}
                  </span>
                  <span className="detail-item" style={{ fontSize: "16px" }}>
                    |{" "}
                    {getGenres(headerTvShows?.genre_ids.slice(0, 2), "tv").map(
                      (genre, index) =>
                        index !== 1 ? ` ${genre} -` : ` ${genre}`
                    )}
                  </span>
                </p>
                <p className="detail-p">{headerTvShows?.overview}</p>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    mt: 4,
                    flexBasis: "100%",
                  }}
                >
                  <button
                    className="primary-btn btn mr"
                    style={{
                      fontSize: "20px",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                    }}
                    onClick={() =>
                      navigate(`/detail/tv/${headerTvShows.id}`)
                    }
                  >
                    <BsFillPlayCircleFill
                      className="icon"
                      style={{ marginRight: "5px" }}
                    />
                    Watch Trailer
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
                    <BsBookmark
                      className="icon"
                      style={{ marginRight: "5px" }}
                    />
                    Add Watchlist
                  </button>
                </Box>
              </>
            )}
          </Box>
          <ContainerX
            movies={popularTvShows}
            style={{ flexBasis: "50%", display: { xs: "none", md: "inherit" } }}
          />
        </Box>

        <Box
          sx={{ px: { xs: 2, md: 4, lg: 6 }, mt: 6 }}
          className="par-container"
        >
          <h4 className="med-cat-title">Top Rated Movies</h4>
          <ContainerX movies={topRatedMovies} />
        </Box>
        <Box
          sx={{ px: { xs: 2, md: 4, lg: 6 }, mt: 8 }}
          className="par-container"
        >
          <h4 className="med-cat-title">Top Rated Series</h4>
          <ContainerX movies={topRatedSeries} />
        </Box>
        <Footer />
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            width: "100%",
            height: "70%",
            background:
              "linear-gradient(to bottom, transparent 0%, #0d0c0f 100%)",
            zIndex: "-10",
          }}
        />
      </Box>
    </Box>
  );
};

export default Home;
