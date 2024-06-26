import React, {useState, useEffect} from "react";
import axios from "./axios";
import "./Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/"; 

function Row({title, fetchUrl, isLargeRow}) {
    const [movies, setMovies] = useState([]);   
    const [trailerUrl, setTrailerUrl] = useState("");


    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(fetchUrl);
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [fetchUrl]); 

    const opts = {
      height: "390",
      width: "100%",
      playerVars: {
        autoplay: 1,
      },
    };

    const handleClick=(movie) => {
      console.log({thismovie:movie})
      if (trailerUrl) {
        console.log({trailerUrl})
        setTrailerUrl("");
      } else {
        movieTrailer(movie?.name || "")
          .then((url) => {
            console.log({url})
            const urlParams = new URLSearchParams(new URL(url).search);
            console.log({urlParams})
            console.log({newState:urlParams.get('v')})
            setTrailerUrl(urlParams.get('v'));
          })
          .catch((error) => console.log(error));
      }
    }
    

  return (
    <div className = "row">
      <h2>{title}</h2>        

      <div className="row_posters">

        {movies.map(movie => (
            <img 
            key = {movie.id}
            onClick={() => handleClick(movie)}
            className={`row_poster`}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.poster_path}`} 
            // src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`} 
            alt={movie.name}/>
        ))}
      </div>    
      {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}
    </div>
  )
}

export default Row;
  