// const API_KEY = import.meta.env.VITE_API_KEY;

const requests = {
  fetchTrending: `/trending/all/week?language=en-US`,
  fetchNetflixOriginals: `/discover/tv?&with_networks=213`,
  fetchTopRatedMovies: `/movie/top_rated?language=en-US`,
  fetchActionMovies: `/discover/movie?with_genres=28`,
  fetchComedyMovies: `/discover/movie?with_genres=35`,
  fetchHorrorMovies: `/discover/movie?with_genres=27`,
  fetchRomanceMovies: `/discover/movie?with_genres=10749`,
  fetchDocumentaries: `/discover/movie?with_genres=99`,
  fetchTvShow: `tv/popular?language=en-US&page=1`

}
const requestArr = Object.keys(requests).map((k) => [k, requests[k]]);
// console.log(requestArr)

export default requests;
export { requestArr }