import React from "react";
import { Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

import { AiFillStar } from "react-icons/ai";
import { getGenres } from "../constants/getGenres";

const Poster = ({ movie }) => {
  const navigate = useNavigate();

  function truncateString(str) {
    if (str.length <= 10) {
      return str;
    }

    return str.substring(0, 10);
  }

  const handleClick = () => {
    if (movie.title) {
      navigate(`/detail/movie/${movie.id}`);
    } else {
      navigate(`/detail/tv/${movie.id}`);
    }
  };

  if (!movie)
    return (
      <Box
        sx={{
          overflow: "hidden",
          background: "black",
          px: { xs: 11, md: 16 },
          py: { xs: 16, md: 24 },
          mr: 2,
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          cursor: "pointer",
        }}
      ></Box>
    );
  if (movie?.poster_path)
    return (
      <Box
        sx={{
          overflow: "hidden",
          mr: 2,
          mt: 2,
          px: { xs: 11, md: 16 },
          py: { xs: 16, md: 24 },
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          cursor: "pointer",
          borderRadius: 4,
          background: `url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`,
          backgroundSize: "cover",
        }}
        onClick={handleClick}
      >
        <Box
          sx={{
            position: "absolute",
            display: { xs: "none", md: "flex" },
            bottom: "0",
            width: "100%",
            height: "50px",
            alignItems: "end",
            background:
              "linear-gradient(to bottom, transparent  0%, rgba(0, 0, 0, 0.5) 20%,rgba(0, 0, 0, 0.9) 50%, black 80%)",
          }}
        >
          <Box sx={{ ml: 2 }}>
            <p
              style={{
                marginBottom: "5px",
                display: "flex",
                alignItems: "center",
              }}
            >
              <AiFillStar
                style={{
                  fontSize: "18px",
                  color: "#FFCD19",
                  marginRight: "2px",
                }}
              />
              <span
                className="detail-p"
                style={{ fontSize: "12px", marginRight: "5px" }}
              >
                {movie.vote_average.toFixed(1)}
              </span>
            </p>
          </Box>
        </Box>
      </Box>
    );
};

export default Poster;
