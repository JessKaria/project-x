import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MusicModal from './MusicModal'

const Music = () => {
  const [music, updateMusic] = useState([])
  const [musicGenre, updateMusicGenre] = useState('All')

  useEffect(() => {
    axios.get('https://itunes.apple.com/search?term=music&sort=recent&limit=200.')
      .then(resp => {
        updateMusic(resp.data.results)
      })
  }, [])

  function filterMusic() {
    return music.filter(movie => {
      return (musicGenre === 'All' || (movie.primaryGenreName === musicGenre))
    })
  }


  return <div>
    <div className="container-main">
      <div className="outerfilter">
        <div className="filtertext">
          <h2>Music</h2>
        </div>
        <div className="filterdrop">
          <select className="dropdown" onChange={(event) => updateMusicGenre(event.target.value)}>
            <option>All</option>
            <option>Hip-Hop/Rap</option>
            <option>Country</option>
            <option>Dance</option>
            <option>Rock</option>
            <option>Alternative</option>
          </select>
        </div>
      </div>
      <div className="main-box">
        <div className="tile">
          {filterMusic().map(tune => {
            return <MusicModal
              key={tune.trackViewUrl}
              trackName={tune.trackName}
              primaryGenreName={tune.primaryGenreName}
              contentAdvisoryRating={tune.contentAdvisoryRating}
              previewUrl={tune.previewUrl}
              artworkUrl100={tune.artworkUrl100}
            />
          })}
        </div>
      </div>
    </div>
  </div>

}

export default Music
