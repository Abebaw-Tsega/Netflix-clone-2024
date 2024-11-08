import React, { useState, useEffect } from 'react';
import "./row.css";
import axios from '../../../utils/axios';
import movieTrailer from "movie-trailer"
import YouTube from "react-youtube"

const Row = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailer] = useState("");

  const base_url = "http://image.tmdb.org/t/p/original";

  const Bearer_Token = import.meta.env.VITE_Bearer_Token

  useEffect(() => {
    const fetch_url = async () => {
      try {
        // console.log(fetchUrl);
        const request = await axios.get(fetchUrl, {
          headers: {
            Authorization: Bearer_Token
          }
        });
        // console.log(request)
        setMovies(request.data.results);
      } catch (error) {
        console.log("error", error);
      }
    }
    fetch_url();
  }, [fetchUrl]);
  // console.log(movies)
  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailer("");
    } else {
      movieTrailer(movie?.title || movie?.name || movie?.original_name)
        .then(url => {
          // console.log(url);
          const urlParams = new URLSearchParams(new URL(url).search);
          // console.log(urlParams);
          console.log(urlParams.get("v"));
          setTrailer(urlParams.get("v"));
        })
        .catch(error => console.error(error));
    }
  }

  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  }

  return (
    <div className='row'>
      <h1>{title} </h1>
      <div className="row-posters">
        {movies?.map((movie, index) => (
          <img
            onClick={() => handleClick(movie)}
            key={index}
            src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
            className={`row-poster ${isLargeRow && "row_posterLarge"}`}
          />
        ))}
      </div>
      <div style={{ padding: '40px' }}>
        {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
      </div>
    </div>
  )
}

export default Row;