import React, { useEffect, useState } from 'react'
import axios from './axios'
import requests from './requests'
import './Banner.css'

function Banner () {
  const [movie, setMovie] = useState([])
  useEffect(() => {
    async function fetchData () {
      const res = await axios.get(requests.fetchNetflixOriginals)
      setMovie(
        res.data.results[
          Math.floor(Math.random() * res.data.results.length - 1)
        ]
      )
      console.log('==============netflix originals===========================')
      console.table(res.data.results)
      console.log('==============netflix originals===========================')
      return res
    }
    fetchData()
  }, [])

  console.log('==============banner movie===========================')
  console.table(movie)
  console.log('==============banner movie===========================')
function truncate(str,n) {
  return str?.length>n?str.substr(0,n-1)+ "...":str
}
  return (
    <header
      className='banner'
      style={
        {
          backgroundSize: 'cover',
          backgroundImage:`url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
          backgroundPosition:"center center"
        }
      }
    >
      <div className='banner_contents'>
        <h1 className="banner_title" >{movie?.title ||movie?.name||movie?.original_name}</h1>
      </div>
      <div className="banner_buttons">
        <button className="banner_button">
            Play
        </button>
        <button className="banner_button">
        My List
        </button>
      </div>
      <h1 className= "banner_description">
        {truncate (movie?.overview,150)}
        </h1>
        <div className="banner_fadebottom" />
    </header>
  )
}

export default Banner
