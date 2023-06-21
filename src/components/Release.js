import React from "react";
import { Box, Stack } from "@mui/material";
import { getGenres } from "../constants/getGenres";

const Release = ({ movies }) => {
  function getMonthName(dateString) {
    var date = new Date(dateString);
    var month = date.toLocaleString("default", { month: "long" });
    return month.toUpperCase();
  }

  function getNextThreeMonths() {
    var currentDate = new Date();
    var months = [];

    for (var i = 0; i < 3; i++) {
      var nextMonth = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth() + i + 1,
        1
      );
      var monthName = nextMonth.toLocaleString("default", { month: "long" });
      months.push(monthName.toUpperCase());
    }

    return months;
  }

  var nextMonths = [];
  var date = new Date();

  for (var i = 0; i < 12; i++) {
    date.setMonth(i);
    var monthName = date
      .toLocaleString("default", { month: "long" })
      .toUpperCase();
    nextMonths.push(monthName);
  }

  if (!movies)
    return (
      <Box sx={{ mt: 4 }}>
        <h4 className="med-cat-title" style={{ fontWeight: "700" }}>
          AUGUST
        </h4>
        <Box
          sx={{
            borderTop: "2px solid #252427",
            mt: 2,
            display: "flex",
            width: "100%",
            alignItems: "center",
            justifyContent: { md: "space-between" },
            flexDirection: { xs: "column", md: "row" },
            py: 4,
            overflow: "hidden",
          }}
        >
          <Box>
            {[...Array(4)].map((movie, index) => (
              <Stack
                key={index}
                direction="row"
                sx={{
                  width: "500px",
                  alignItems: "center",
                  mt: 2,
                  justifyContent: { xs: "center", sm: "start" },
                }}
              >
                <Box
                  sx={{
                    fontSize: "26px",
                    mr: "15px",
                    background: "white",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  {index + 1}
                </Box>
                <Box
                  sx={{
                    background: "black",
                    width: "90px",
                    height: "100px",
                    mr: "15px",
                    borderRadius: 4,
                  }}
                />
                <Box>
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
                      background: "black",
                      borderRadius: 2,
                      marginBottom: "5px",
                    }}
                  >
                    Horror - Thriller
                  </p>
                </Box>
              </Stack>
            ))}
          </Box>
          <Box>
            {[...Array(4)].map((movie, index) => (
              <Stack
                key={index}
                direction="row"
                sx={{
                  width: "500px",
                  alignItems: "center",
                  mt: 2,
                  justifyContent: { xs: "center", sm: "start" },
                }}
              >
                <Box
                  sx={{
                    fontSize: "26px",
                    mr: "15px",
                    background: "white",
                    height: "50px",
                    width: "50px",
                    borderRadius: "50%",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    fontWeight: "700",
                  }}
                >
                  {4 + index + 1}
                </Box>
                <Box
                  sx={{
                    background: "black",
                    width: "90px",
                    height: "100px",
                    mr: "15px",
                    borderRadius: 4,
                  }}
                />
                <Box>
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
                      background: "black",
                      borderRadius: 2,
                      marginBottom: "5px",
                    }}
                  >
                    Horror - Thriller
                  </p>
                </Box>
              </Stack>
            ))}
          </Box>
        </Box>
      </Box>
    );
  if (movies)
    return (
      <Box>
        {nextMonths.map((mounth, index) => {
          let upArr = movies.filter(
            (up) => getMonthName(up.release_date) === mounth
          );
          if (upArr.length > 0)
            return (
              <Box sx={{ mt: 4 }} key={index}>
                <h4 className="med-cat-title" style={{ fontWeight: "700" }}>
                  {mounth}
                </h4>
                <Box
                  sx={{
                    borderTop: "2px solid #252427",
                    mt: 2,
                    display: "flex",
                    width: "100%",
                    alignItems: { xs: "center", md: "start" },
                    justifyContent: { md: "space-between" },
                    flexDirection: { xs: "column", md: "row" },
                    py: 4,
                    overflow: "hidden",
                  }}
                >
                  <Box>
                    {upArr.slice(0, 4).map((movie, index) => (
                      <Stack
                        key={index}
                        direction="row"
                        sx={{
                          width: "500px",
                          alignItems: "center",
                          mt: 2,
                          justifyContent: { xs: "center", sm: "start" },
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "26px",
                            mr: "15px",
                            background: "white",
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "700",
                          }}
                        >
                          {index + 1}
                        </Box>
                        <Box
                          sx={{
                            background: `url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minWidth: "90px",
                            height: "100px",
                            mr: "15px",
                            borderRadius: 4,
                          }}
                        />
                        <Box>
                          <h5
                            className="detail-p"
                            style={{
                              fontSize: "18px",
                              fontWeight: "600",
                              maxWidth: "100px",
                              marginBottom: "5px",
                            }}
                          >
                            {movie.name || movie.title}
                          </h5>
                          <span
                            className="detail-item"
                            style={{ fontSize: "16px" }}
                          >
                            |{" "}
                            {getGenres(
                              movie.genre_ids.slice(0, 2),
                              "movie"
                            ).map((genre, index) =>
                              index < 1 ? ` ${genre} -` : ` ${genre}`
                            )}
                          </span>
                        </Box>
                      </Stack>
                    ))}
                  </Box>
                  <Box>
                    {upArr.slice(4, 8).map((movie, index) => (
                      <Stack
                        key={index}
                        direction="row"
                        sx={{
                          width: "500px",
                          alignItems: "center",
                          mt: 2,
                          justifyContent: { xs: "center", sm: "start" },
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "26px",
                            mr: "15px",
                            background: "white",
                            height: "50px",
                            width: "50px",
                            borderRadius: "50%",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            fontWeight: "700",
                          }}
                        >
                          {4 + index + 1}
                        </Box>
                        <Box
                          sx={{
                            background: `url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`,
                            background: `url(https://image.tmdb.org/t/p/w500${movie?.poster_path})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                            minWidth: "90px",
                            height: "100px",
                            mr: "15px",
                            borderRadius: 4,
                          }}
                        />
                        <Box>
                          <h5
                            className="detail-p"
                            style={{
                              fontSize: "18px",
                              fontWeight: "600",
                              maxWidth: "100px",
                              marginBottom: "5px",
                            }}
                          >
                            {movie.name || movie.title}
                          </h5>
                          <span
                            className="detail-item"
                            style={{ fontSize: "16px" }}
                          >
                            |{" "}
                            {getGenres(
                              movie.genre_ids.slice(0, 2),
                              "movie"
                            ).map((genre, index) =>
                              index < 1 ? ` ${genre} -` : ` ${genre}`
                            )}
                          </span>
                        </Box>
                      </Stack>
                    ))}
                  </Box>
                </Box>
              </Box>
            );
        })}
      </Box>
    );
};

export default Release;
