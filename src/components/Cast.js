import React from "react";
import { Stack, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Cast = ({ actor }) => {
  if (!actor)
    return (
      <Stack direction="row" sx={{ minWidth: "300px", alignItems: "center" }}>
        <Box
          sx={{
            height: "80px",
            width: "80px",
            borderRadius: "50%",
            background: "black",
            mr: 1,
          }}
        />
        <Box>
          <h5
            style={{ background: "black", borderRadius: "10px" }}
            className="mb"
          >
            Joel Miler
          </h5>
          <h5 style={{ background: "black", borderRadius: "10px" }}>PG-13</h5>
        </Box>
      </Stack>
    );
  return (
    <Stack direction="row" sx={{ minWidth: "300px", alignItems: "center" }}>
      <Box
        sx={{
          height: "80px",
          width: "80px",
          borderRadius: "50%",
          background: `url(https://image.tmdb.org/t/p/w500${actor.profile_path})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          mr: 1,
        }}
      />
      <Box>
        <h5 className="detail-p mb">{actor.name}</h5>
        <h5 className="detail-item">{actor.character}</h5>
      </Box>
    </Stack>
  );
};

export default Cast;
