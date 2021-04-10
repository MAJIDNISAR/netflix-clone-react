import React, { useState, useEffect } from 'react'
import YouTube from 'react-youtube'
import movieTrailer from 'movie-trailer'
import axios from './axios'
const baseURL = 'https://image.tmdb.org/t/p/original/'
function Row ({ title, fetchURL, isLargeRow }) {
  const [movies, setMovies] = useState([])
  const [trailerURL, setTrailerURL] = useState("")
  useEffect(() => {
    async function fetchData () {
      const response = await axios.get(fetchURL)
      // console.log(`===========================================${title}==========================================`)
      // console.table(response.data.results)
      // console.log(`===========================================${title}==========================================  `)
      setMovies(response.data.results)
      return response
    }
    fetchData()
  }, [fetchURL, title])
  // console.log('===============================movies=======================')
  // console.table(movies)
  // console.log('===============================movies=======================')
  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1
    }
  }
  const handleClick = (movie) => {
trailerURL?setTrailerURL(''):movieTrailer(movie?.name||"")
.then((url)=>{
 const urlParams = new URLSearchParams( new URL(url).search); 
 setTrailerURL( urlParams.get('v'))
})
.catch(err=>console.error(err))
  }
  return (
    <div className='row'>
      <h2>{title}</h2>
      <div className='row_posters'>
        {movies.map((movie) => {
          return (
            <img
              key={movie.id}
              onClick={() => handleClick(movie)}
              src={`${baseURL}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              className={`row_poster ${isLargeRow && 'row_posterLarge'}`}
              alt={movie.name}
            />
          )
        })}
      </div>
      {/* {trailerURL && <YouTube videoId='trailerURL' opts={opts} />} */}
      {trailerURL && <YouTube videoId={trailerURL} opts={opts} />}
    </div>
  )
}
export default Row
