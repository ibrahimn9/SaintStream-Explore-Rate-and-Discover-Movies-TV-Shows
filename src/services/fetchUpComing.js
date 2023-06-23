import axios from "axios";

export const fetchUpComing = async () => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
      process.env.API_KEY,
    },
    params: {language: 'en-US', page: '1'},
  };

  const { data } = await axios.get('https://api.themoviedb.org/3/movie/upcoming', options)

  return data.results

};