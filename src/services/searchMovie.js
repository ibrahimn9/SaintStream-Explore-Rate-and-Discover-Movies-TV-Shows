import axios from "axios";



export const searchMovie = async (searchTerm) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
      process.env.API_KEY,
    },
    params: {
      query: searchTerm,
      include_adult: "false",
      language: "en-US",
      page: "1",
    },
  };

  const { data } = await axios.get(
    "https://api.themoviedb.org/3/search/movie",
    options
  );

  return data.results;
};
