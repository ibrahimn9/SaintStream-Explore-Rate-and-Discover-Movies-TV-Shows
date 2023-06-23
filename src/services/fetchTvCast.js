import axios from "axios";

export const fetchTvCast = async (tv_id) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
      process.env.API_KEY,
    },
    params: {language: 'en-US', page: '1'},
  };

  const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${tv_id}/credits`, options)

  return data.cast.slice(0, 10)

};