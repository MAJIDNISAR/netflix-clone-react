import dotenv from 'dotenv'
dotenv.config()
const API_Key = process.env.REACT_APP_API_KEY
const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_Key}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_Key}&with_networks=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_Key}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_Key}&with_generes=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_Key}&with_generes=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_Key}&with_generes=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_Key}&with_generes=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_Key}&with_generes=99`

}
export default requests
