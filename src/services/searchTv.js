import axios from "axios";


export const searchTv = async (searchTerm) => {
  const options = {
    headers: {
      accept: "application/json",
      Authorization:
      process.env.API_KEY,
    },
    params: {query: searchTerm, include_adult: 'false', language: 'en-US', page: '1'},
  };

  const { data } = await axios.get('https://api.themoviedb.org/3/search/tv', options)

  return data.results

};