import { useState, useEffect, useRef } from "react";
import { Stack, Box } from "@mui/material";

import { useNavigate } from "react-router-dom";

import { BiSearch } from "react-icons/bi";
import { BiSearchAlt } from "react-icons/bi";
import { MdLocalMovies } from "react-icons/md";
import { IoMdTv } from "react-icons/io";

import { searchAll } from "../services/serachAll";
import { searchTv } from "../services/searchTv";
import { searchMovie } from "../services/searchMovie";

const SearchBox = () => {
  const [selectedNavigation, setSelectedNavigation] = useState("All");
  const [searchTerm, setSearchTerm] = useState();
  const [toggle, setToggle] = useState(true);
  const [results, setResults] = useState();

  const navigate = useNavigate();
  const searchRef = useRef(null);

  const handleClick = (movie) => {
    if (movie.title) {
      navigate(`/detail/movie/${movie.id}`);
    } else {
      navigate(`/detail/tv/${movie.id}`);
    }
  };

  const fetchData = async () => {
    let res = [];
    if (selectedNavigation === "All") {
      res = await searchAll(searchTerm);
    }
    if (selectedNavigation === "Movies") {
      res = await searchMovie(searchTerm);
    }
    if (selectedNavigation === "Tv Shows") {
      res = await searchTv(searchTerm);
    }
    setResults(res);
  };

  useEffect(() => {
    if (searchTerm) fetchData();
  }, [searchTerm, selectedNavigation]);

  useEffect(() => {
    function handleClickOutside(event) {
      if (searchRef.current && !searchRef.current.contains(event.target)) {
        setToggle(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchRef]);

  const navigation = [
    {
      name: "All",
      icon: <BiSearch style={{ fontSize: "20px", marginRight: "5px" }} />,
    },
    {
      name: "Movies",
      icon: <MdLocalMovies style={{ fontSize: "20px", marginRight: "5px" }} />,
    },
    {
      name: "Tv Shows",
      icon: <IoMdTv style={{ fontSize: "20px", marginRight: "5px" }} />,
    },
  ];
  return (
    <Box
      sx={{
        position: "fixed",
        display: toggle ? "block" : "none",
        height: "600px",
        width: { xs: "80%", md: "60%" },
        background: "#0d0c0f",
        boxShadow: "0 0 10px black",
        borderRadius: 4,
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)",
        zIndex: "1000",
        p: 3,
      }}
      className="search-box"
      ref={searchRef}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          border: "1px solid grey",
          p: 1,
          borderRadius: 2,
        }}
      >
        <BiSearch
          className="icon"
          style={{ fontSize: "20px", marginRight: "5px" }}
        />
        <input
          className="search-input"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Box>
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          borderBottom: "1px solid grey",
          mt: 4,
        }}
      >
        {navigation.map((nav, index) => (
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              mr: {xs: 2, sm: 4},
              cursor: "pointer",
              color: selectedNavigation === nav.name ? "white" : "grey",
              borderBottom:
                selectedNavigation === nav.name && "2px solid white",
              pb: 2,
            }}
            key={index}
            onClick={() => setSelectedNavigation(nav.name)}
          >
            {nav.icon}
            <span>{nav.name}</span>
          </Box>
        ))}
      </Stack>
      {searchTerm && (
        <Box sx={{ mt: 4, height: "70%" }} className="container-y">
          <Stack direction="column" className="scroll-container-y">
            {results?.map((term, index) => (
              <Box
                sx={{
                  color: "white",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "1px solid grey",
                  pb: 2,
                  mt: 2,
                }}
                key={index}
              >
                {term.name ? (
                  <IoMdTv style={{ fontSize: "20px", marginRight: "5px" }} />
                ) : (
                  <MdLocalMovies
                    style={{ fontSize: "20px", marginRight: "5px" }}
                  />
                )}
                <span
                  style={{ cursor: "pointer" }}
                  onClick={() => handleClick(term)}
                >
                  {term.name || term.title}
                </span>
              </Box>
            ))}
          </Stack>
        </Box>
      )}
      <Box
        sx={{
          mt: 2,
          height: "70%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "grey",
        }}
      >
        {!searchTerm && (
          <Box sx={{ textAlign: "center" }}>
            <BiSearchAlt className="icon" />
            <div>Start typing to search...</div>
          </Box>
        )}
      </Box>
    </Box>
  );
};

export default SearchBox;
