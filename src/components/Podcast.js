import React, { useEffect, useState } from 'react'
import axios from 'axios'
import PodcastModal from './PodcastModal'

const Podcast = () => {
  const [podcast, updatePodcast] = useState([])
  const [podcastGenre, updatePodcastGenre] = useState('All')

  useEffect(() => {
    axios.get('hhttps://stormy-atoll-29846.herokuapp.com/https://itunes.apple.com/search?term=podcast&sort=recent&limit=200.')
      .then(resp => {
        updatePodcast(resp.data.results)
      })
  }, [])

  console.log(podcast)

  const filterPodcast = () => {
    return podcast.filter(pod => {
      return (podcastGenre === 'All' || (pod.primaryGenreName === podcastGenre))
    })
  }

  return <div>
    <div className="container-main">
      <div className="outerfilter">
        <div className="filtertext">
          <h2>Podcast</h2>
        </div>
        <div className="filterdrop">
          <select className="dropdown" onChange={(event) => updatePodcastGenre(event.target.value)}>
            <option>All</option>
            <option>Society & Culture</option>
            <option>Comedy</option>
            <option>Business</option>
            <option>Politics</option>
            <option>News</option>
          </select>
        </div>
      </div>
      <div className="main-box">
        <div className="tile">
          {filterPodcast().map(pod => {
            return <PodcastModal
              key={pod.trackViewUrl}
              trackName={pod.trackName}
              primaryGenreName={pod.primaryGenreName}
              contentAdvisoryRating={pod.contentAdvisoryRating}
              previewUrl={pod.previewUrl}
              artworkUrl100={pod.artworkUrl100}
            />
          })}
        </div>
      </div>
    </div>
  </div>

}

export default Podcast
