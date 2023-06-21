import React from "react";
import { Stack, Box } from "@mui/material";

import { AiFillStar } from "react-icons/ai";
import { getGenres } from "../constants/getGenres";
import { convertMinutesToHours } from "../constants/convertMinutesToHours";

const SmallPoster = ({ movie }) => {
  function reduceStr(str) {
    if (str.length <= 100) return str;
    return str.slice(0, 100) + "...";
  }

  if (!movie)
    return (
      <Box sx={{ mr: 2 }}>
        <Box
          sx={{
            overflow: "hidden",
            background: "black",
            px: { xs: 12, md: 18 },
            py: { xs: 9, md: 12 },
            mr: 2,
            mt: 2,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: 4,
            cursor: "pointer",
            mb: 1,
          }}
        />
        <Box>
          <p
            style={{
              background: "black",
              maxWidth: "90%",
              borderRadius: "10px",
            }}
          >
            4.6|Action-Movie
          </p>
        </Box>
      </Box>
    );
  return (
    <Box sx={{ mr: 2 }}>
      <Box
        sx={{
          overflow: "hidden",
          background: "black",
          px: { xs: 12, md: 18 },
          py: { xs: 9, md: 12 },
          mr: 2,
          mt: 2,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 4,
          cursor: "pointer",
          background: `url(https://image.tmdb.org/t/p/w500${movie?.still_path})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          position: "relative",
          mb: 1,
        }}
      >
        <Box
          sx={{
            position: "absolute",
            display: { xs: "none", md: "block" },
            bottom: "0",
            width: "100%",
            height: "80px",
            background:
              "linear-gradient(to bottom, transparent  0%, rgba(0, 0, 0, 0.5) 20%,rgba(0, 0, 0, 0.9) 50%, black 80%)",
          }}
        >
          <h5
            className="detail-p"
            style={{
              fontSize: "16px",
              fontWeight: "600",
              margin: "0 15px",
              marginBottom: "5px",
            }}
          >
            Chapter {movie.episode_number}
          </h5>
          <p
            className="detail-item"
            style={{ marginLeft: "15px", marginRight: "5px" }}
          >
            {reduceStr(movie.overview)}
          </p>
        </Box>
      </Box>
      <Box>
        <h5
          className="detail-p"
          style={{
            fontSize: "16px",
            fontWeight: "600",
            marginBottom: "5px",
          }}
        >
          {movie.name}
        </h5>
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
          <span className="detail-item" style={{ fontSize: "14px" }}>
            | {convertMinutesToHours(movie.runtime)}
          </span>
        </p>
      </Box>
    </Box>
  );
};

export default SmallPoster;
