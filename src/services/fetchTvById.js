import axios from "axios";

export const findTvById = async (id) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
      process.env.API_KEY,
    },
    params: {language: 'en-US'},
  };

  const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${id}`, options)

  return data

};
