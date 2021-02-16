import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MoviesModal from './MoviesModal'

const Movies = () => {
  const [movies, updateMovies] = useState([])
  const [movieGenre, updateMovieGenre] = useState('All')

  useEffect(() => {
    axios.get('https://cors-anywhere.herokuapp.com/https://itunes.apple.com/search?term=films&sort=recent&limit=200.')
      .then(resp => {
        updateMovies(resp.data.results)
      })
  }, [])

  function filterMovies() {
    return movies.filter(movie => {
      return (movieGenre === 'All' || (movie.primaryGenreName === movieGenre))
    })
  }

  return <div>
    <div className="container-main">
      <div className="outerfilter">
        <div className="filtertext">
          <h2>Movies</h2>
        </div>
        <div className="filterdrop">
          <select className="dropdown" onChange={(event) => updateMovieGenre(event.target.value)}>
            <option>All</option>
            <option>Action & Adventure</option>
            <option>Comedy</option>
            <option>Kids & Family</option>
            <option>Horror</option>
            <option>Romance</option>
            <option>Drama</option>
          </select>
        </div>
      </div>
      <div className="main-box">
        <div className="tile">
          {filterMovies().map(movie => {
            return <MoviesModal
              key={movie.trackViewUrl}
              trackName={movie.trackName}
              primaryGenreName={movie.primaryGenreName}
              contentAdvisoryRating={movie.contentAdvisoryRating}
              previewUrl={movie.previewUrl}
              artworkUrl100={movie.artworkUrl100}
            />
          })}
        </div>
      </div>
    </div>
  </div>




}

export default Movies
