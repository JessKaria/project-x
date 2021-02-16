import React, { useState } from 'react'



function PodcastModal({ trackViewUrl, trackName, primaryGenreName, contentAdvisoryRating, artworkUrl100 }) {

  return <div className="card" key={trackViewUrl}>
    <div className="text">
      <h5>{trackName}</h5>
      <p>{primaryGenreName} | {contentAdvisoryRating}</p>
      <div>
        <button><a href={trackViewUrl}>Subscribe</a></button>
      </div>
    </div>
    <div className="image">
      <img src={artworkUrl100} alt={trackName} />
    </div>
  </div >
}

export default PodcastModal



