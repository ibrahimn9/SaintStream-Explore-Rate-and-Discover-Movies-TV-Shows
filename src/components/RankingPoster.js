import React, { useState, useEffect, useRef } from "react";
import { Stack, Box } from "@mui/material";
import { AiFillStar } from "react-icons/ai";
import { MdLocalMovies } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

import { getGenres } from "../constants/getGenres";

const RankingPoster = ({ trending }) => {
  const navigate = useNavigate();

  const handleClick = (movie) => {
    if (movie.title) {
      navigate(`/detail/movie/${movie.id}`);
    } else {
      navigate(`/detail/tv/${movie.id}`);
    }
  };

  const containerRef = useRef(null);
  const beforeContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const container = containerRef.current;

    const handleScroll = () => {
      setShowLeftButton(container.scrollLeft > 0);
      setShowRightButton(
        container.scrollLeft < container.scrollWidth - container.clientWidth
      );
    };

    container?.addEventListener("scroll", handleScroll);
    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollLeft = () => {
    containerRef.current.scrollBy({
      left: -containerRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    containerRef.current.scrollBy({
      left: containerRef.current.clientWidth,
      behavior: "smooth",
    });
  };

  if (!trending)
    return (
      <Box className="container" sx={{ mt: 4 }}>
        <Stack direction="row" className="scroll-container">
          {[...Array(10)].map((poster, index) => (
            <Stack
              key={index}
              direction="row"
              sx={{ minWidth: "500px", alignItems: "center", mr: 0 }}
            >
              <Box sx={{ color: "white", fontSize: "38px", mr: "15px" }}>
                {index + 1}
              </Box>
              <Box
                sx={{
                  background: "black",
                  width: "150px",
                  height: "150px",
                  mr: "15px",
                  borderRadius: 4,
                }}
              />
              <Box>
                <Box sx={{ background: "black", borderRadius: 2, mb: "5px" }}>
                  PG-13
                </Box>
                <h5
                  style={{
                    background: "black",
                    borderRadius: 2,
                    marginBottom: "5px",
                  }}
                >
                  PG-13
                </h5>
                <p
                  style={{
                    borderRadius: 2,
                    marginBottom: "5px",
                    display: "flex",
                    background: "black",
                    alignItems: "center",
                  }}
                >
                  | Horror - Actions
                </p>
                <p
                  style={{
                    marginBottom: "5px",
                    display: "flex",
                    alignItems: "center",
                    background: "black",
                  }}
                >
                  4.3 | movie
                </p>
              </Box>
            </Stack>
          ))}
        </Stack>
      </Box>
    );
  return (
    <Box className="container" sx={{ mt: 4 }}>
      <BsFillArrowLeftCircleFill
        className={`scroll-button left icon ${showLeftButton ? "show" : ""}`}
        onClick={scrollLeft}
      />
      <Stack direction="row" className="scroll-container" ref={containerRef}>
        {trending.map((poster, index) => (
          <Stack
            key={index}
            direction="row"
            sx={{
              minWidth: "450px",
              maxWidth: "455px",
              alignItems: "center",
              cursor: "pointer",
              mr: 1,
            }}
            onClick={() => handleClick(poster)}
          >
            <Box
              sx={{
                color: "white",
                fontSize: "38px",
                mr: "15px",
                fontWeight: "700",
              }}
            >
              {index + 1}
            </Box>
            <Box
              sx={{
                minWidth: "150px",
                minHeight: "150px",
                mr: "15px",
                borderRadius: 4,
                background: `url(https://image.tmdb.org/t/p/w500${poster?.poster_path})`,
                backgroundSize: "cover",
              }}
            />
            <Box>
              <h5
                className="detail-p"
                style={{
                  fontSize: "18px",
                  fontWeight: "600",
                  marginBottom: "5px",
                }}
              >
                {poster.media_type === "tv" ? poster.name : poster.title}
              </h5>
              <p
                style={{
                  borderRadius: 2,
                  marginBottom: "5px",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <MdLocalMovies
                  className="detail-item"
                  style={{ fontSize: "22px", marginRight: "5px" }}
                />
                <span className="detail-item" style={{ fontSize: "16px" }}>
                  |{" "}
                  {getGenres(
                    poster.genre_ids.slice(0, 2),
                    poster.media_type
                  ).map((genre, index) =>
                    index < 1 ? ` ${genre} -` : ` ${genre}`
                  )}
                </span>
              </p>
              <p
                style={{
                  marginBottom: "5px",
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
                  {poster.vote_average.toFixed(2)}
                </span>
                <span className="detail-item" style={{ fontSize: "16px" }}>
                  {" "}
                  | {poster.media_type}
                </span>
              </p>
            </Box>
          </Stack>
        ))}
      </Stack>
      <BsFillArrowRightCircleFill
        className={`scroll-button right icon ${showRightButton ? "show" : ""}`}
        onClick={scrollRight}
      />
    </Box>
  );
};

export default RankingPoster;
