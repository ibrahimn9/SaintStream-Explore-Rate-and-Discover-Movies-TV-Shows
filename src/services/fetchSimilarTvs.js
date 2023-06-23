import axios from "axios";

export const fetchSimilarTvs = async (tv_id) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
      process.env.API_KEY,
    },
    params: {language: 'en-US', page: '1'},
  };

  const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/similar`, options)

  return data.results

};