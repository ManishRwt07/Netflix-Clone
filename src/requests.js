const APIKEY = "5660a2b0e12309c21b636bfa4fbdde93";

const requests = {
    fetchTrendingMovie: `/trending/movie/day?api_key=${APIKEY}`,
    fetchNetflixOriginals: `/discover/tv?api_key=${APIKEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${APIKEY}&language=en-US`,
    fetchAction: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=28`,
    fetchComedy: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=35`,
    fetchCrime: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=80`,
    fetchHorror: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=27`,
    fetchRomance: `/discover/movie?api_key=${APIKEY}&language=en-US&sort_by=popularity.desc&with_genres=10749`,
  };

export default requests;