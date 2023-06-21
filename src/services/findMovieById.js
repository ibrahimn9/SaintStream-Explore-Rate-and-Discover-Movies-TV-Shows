import axios from "axios";

export const findMovieById = async (id) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkNGRmYTdlN2NmNTc1YzgwZGQzOWZiYzkyODZkZDI5YiIsInN1YiI6IjY0OGJiNGYyNTU5ZDIyMDEzOWJjM2Q1OSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IiLyYHAqaabk21EA_OWirQH3csGn8Ec7LZKPkmcJ1vA",
    },
    params: {language: 'en-US'},
  };

  const { data } = await axios.get(`https://api.themoviedb.org/3/movie/${id}`, options)

  return data

};
