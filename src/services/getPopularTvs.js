import axios from "axios";

export const getPopularTvs = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
      process.env.API_KEY,
    },
    params: {language: 'en-US'},
  };

  const { data } = await axios.get('https://api.themoviedb.org/3/trending/tv/day', options)

  return data.results

};