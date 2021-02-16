import React, { useState } from 'react'
import Modal from './Modal'
import ReactAudioPlayer from 'react-audio-player'



function MusicModal({ trackViewUrl, trackName, primaryGenreName, contentAdvisoryRating, previewUrl, artworkUrl100 }) {
  const [isOpen, modalIsOpen] = useState(false)

  return <div className="card" key={trackViewUrl}>
    <div className="text">
      <h5>{trackName}</h5>
      <p>{primaryGenreName} | {contentAdvisoryRating}</p>
      <div>
        <button className="play" onClick={() => modalIsOpen(true)}>Play Trailer</button>
        <Modal open={isOpen} onClose={() => modalIsOpen(false)} >
          <ReactAudioPlayer
            src={previewUrl}
            autoPlay
            controls
          />
          <h5>{trackName} | {contentAdvisoryRating} </h5>
        </Modal>
        <div className="modal-show">{isOpen}</div>
      </div>
    </div>
    <div className="image">
      <img src={artworkUrl100} alt={trackName} />
    </div>
  </div >




}

export default MusicModal



