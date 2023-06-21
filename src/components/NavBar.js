import { useState, useRef } from "react";
import { Stack, Box } from "@mui/material";
import images from "../constants/images";
import { useNavigate } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { HiMenuAlt3 } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";

import SearchBox from "./SearchBox";

const NavBar = () => {
  const navigate = useNavigate();
  const [searchToggle, setSearchToggle] = useState(false);
  const [sideBarToggle, setSideBarToggle] = useState("-100%");
  return (
    <>
      <Box
        sx={{
          position: "fixed",
          display: { xs: "flex", md: "none" },
          background: "#0d0c0f",
          justifyContent: "center",
          width: "100%",
          height: "100vh",
          left: sideBarToggle,
          top: "0",
          transition: "left 0.3s ease-in-out",
          p: 2,
          zIndex: "1000",
        }}
      >
        <IoMdClose
          className="icon"
          style={{
            position: "absolute",
            right: "25px",
            top: "25px",
            fontSize: "36px",
          }}
          onClick={() => setSideBarToggle("-100%")}
        />
        <Stack direction="column" sx={{ mt: 10 }}>
          {["Home", "Discover", "Movie Release", "About"].map((nav) => (
            <span
              key={nav}
              className="nav-item"
              onClick={() => {
                if (nav === "Movie Release") navigate("/movie_release");
                if (nav === "Home") navigate("/");
              }}
              style={{
                margin: "0",
                marginBottom: "65px",
                fontSize: "28px",
              }}
            >
              {nav}
            </span>
          ))}
        </Stack>
      </Box>
      {searchToggle && <SearchBox />}
      <Stack
        direction="row"
        sx={{
          top: 0,
          py: 4,
          px: { xs: 2, md: 4, lg: 6 },
          alignItems: "center",
          zIndex: "100",
          justifyContent: "space-between",
        }}
        className="nav-bar"
      >
        <Box
          sx={{ display: "flex", alignItems: "center", cursor: "pointer" }}
          onClick={() => navigate("/")}
        >
          <img src={images.logo} alt="logo" height={40} />
          <img src={images.typ} alt="saint_stream" />
        </Box>
        <Box
          sx={{
            display: { xs: "none", md: "flex" },
            alignItems: "center",
            flexGrow: 1,
            justifyContent: "center",
          }}
        >
          {["Home", "Discover", "Movie Release", "About"].map((nav) => (
            <span
              key={nav}
              className="nav-item"
              onClick={() => {
                if (nav === "Movie Release") navigate("/movie_release");
                if (nav === "Home") navigate("/");
              }}
            >
              {nav}
            </span>
          ))}
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <BiSearch
            className="icon mr"
            onClick={() => setSearchToggle(!searchToggle)}
          />
          <Box sx={{ display: { xs: "none", md: "block" } }}>
            <button className="btn outlined-btn mr">Sign in</button>
            <button className="btn primary-btn">Sign up</button>
          </Box>
          <Box sx={{ display: { md: "none" } }}>
            <HiMenuAlt3 className="icon" onClick={() => setSideBarToggle("0")}/>
          </Box>
        </Box>
      </Stack>
    </>
  );
};

export default NavBar;
