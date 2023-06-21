import React, { useState, useEffect, useRef } from "react";
import { Stack, Box } from "@mui/material";

import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";



import Poster from "./Poster";

const ContainerX = ({ movies, style }) => {


  const containerRef = useRef(null);
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

    container.addEventListener("scroll", handleScroll);
    return () => {
      container.removeEventListener("scroll", handleScroll);
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
      behavior: 'smooth',
    });
  };

  return (
    <Box className="container" sx={style}>
      <BsFillArrowLeftCircleFill
        className={`scroll-button left icon ${showLeftButton ? "show" : ""}`}
        onClick={scrollLeft}
      />
      <Stack direction="row" className="scroll-container" ref={containerRef}>
        {(movies || [...Array(10)]).map((poster, index) => (
          <Poster key={index} movie={poster} />
        ))}
      </Stack>
      <BsFillArrowRightCircleFill
        className={`scroll-button right icon ${showRightButton ? "show" : ""}`}
        onClick={scrollRight}
      />
    </Box>
  );
};

export default ContainerX;
