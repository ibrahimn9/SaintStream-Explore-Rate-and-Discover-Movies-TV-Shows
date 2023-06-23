import axios from "axios";

export const fetchSeason = async (series_id, season_number) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
      process.env.API_KEY,
    },
    params: {language: 'en-US', page: '1'},
  };

  const { data } = await axios.get(`https://api.themoviedb.org/3/tv/${series_id}/season/${season_number}`, options)

  return data.episodes

};