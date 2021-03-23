### ![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, SEI 


## Project X | Weekend Project

## Overview

This was my second project at General Assembly SEI course, London. We were asked to build a single page React Web Application that consumes a public API. 

And we were asked to this as a weekend project.

You can view my GitHub repo [here](https://github.com/JessKaria/project-x), or find the live App [here](https://jesskaria.github.io/project-x).

## Introducing API-CHOONZ

![here](https://github.com/JessKaria/project-x/blob/main/src/api-choonz.png?raw=true)

## Brief...

* Create a react app that talks to an API and displays some data nicely on the page. 

* Make it look awesome

* Filter that data somehow in your app (e.g. search or a dropdown, or anything else that you like). Have your UI update as your user interacts with your page.

## Technologies used !

- React
- JSX
- JavaScript (ES6)
- React Player
- React Videoplayer
- HTML
- Bulma
- Git and GitHub
- Canva
- Google Fonts
- Insomnia
- Babel
- Axios

## Approach

I chose to use the iTunes API for the simplicity of the results it displayed and the ability to increase the limit.

## Features

- Filtered results
- Video Modal
- Audio Modal
- Filtered Dropdown
- 
## Challenges

I had some trouble getting the modals to work as this branched into two areas we hadn't yet covered. I did some reaserch and was able to build a really custom modal that played the audio and video depending on the file.

## Wins !

This was my first time building anything in React and I wanted to focus on deliverying DRY code as well as refactorig code into seperate components.

```

import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Modal = ({ open, children, onClose }) => {
  if (!open) return null

  return ReactDOM.createPortal(
    <>
      <div className="show-modal">
        <button onClick={onClose}>Close</button>
        {children}
      </div>
    </>,
    document.getElementById('portal')
  )
}

export default Modal

 
import React, { useState } from 'react'
import Modal from './Modal'
import ReactPlayer from 'react-player'

function MoviesModal({ trackViewUrl, trackName, primaryGenreName, contentAdvisoryRating, previewUrl, artworkUrl100 }) {
  const [isOpen, modalIsOpen] = useState(false)

  return <div className="card" key={trackViewUrl}>
    <div className="text">
      <h5>{trackName}</h5>
      <p>{primaryGenreName} | {contentAdvisoryRating}</p>
      <div>
        <button className="play" onClick={() => modalIsOpen(true)}>Play Trailer</button>
        <Modal open={isOpen} onClose={() => modalIsOpen(false)} >
          <ReactPlayer url={previewUrl}
            controls={true}
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

export default MoviesModal
  
```

## Bugs !

The modal isn't aligned on the home screen.
The links in the Podcast section are broken.
The styling could use some work.


## What I learned...

This was my first time building something with React and fetching data from an API.








