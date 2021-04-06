![GA](https://cloud.githubusercontent.com/assets/40461/8183776/469f976e-1432-11e5-8199-6ac91363302b.png) General Assembly, SEI 


## Project X | API Choonz 🎹 🎥 🎧 

## Overview

This was my second project at General Assembly SEI course, London. We were asked to build a single page React Web Application that consumes a public API. 
This was a weekend project, I opted to choose the iTunes API for the ease of access and how data was stored. I used React, React Hooks and Axios to fetch data and render it from the front end. I also built a custom modal to play media content.

You can view my GitHub repo [here](https://github.com/JessKaria/project-x), or find the live App [here](https://jesskaria.github.io/project-x).

## Introducing API-CHOONZ

![here](https://github.com/JessKaria/project-x/blob/main/src/Untitled%20design%20(1).png?raw=true)

## Brief...

* Create a react app that talks to an API and displays some data nicely on the page. 
* Make it look awesome.
* Filter that data somehow in your app. 
* Have your UI update as your user interacts with your page.

## Technologies used!

- React
- React Hooks
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

## Features

- Filtered results
- Video modal
- Audio modal
- Filtered dropdown
- Beautiful design
- Render data from restful API

## Approach

I chose to use the iTunes API for the simplicity of the results it displayed and the ability to increase the number of search results. After sending some test requests and reading the documentation I had a clear understanding of how the response data was structured, I drew a rough illustration of what I wanted to build, including the functionality I wanted my app to have.

As this was my first time building anything in React, I really wanted to focus on delivering DRY code as well as taking advantage of the modular set up React offers. Below was the first section that I built, taking advantage of React Hooks, useState and useEffect to render data from this API. Firstly I used Axios to fetch data from the API, I then saved the array (response) in state so I could map over later to render data to the UI.

In addition, part of our brief was to build functionality to 'have our UI update as a user interacts with it'. I opted for using .filter() to filter over data saved in state and then mapped over that function to render the data. To ensure that the data rendered correctly on page load, I set the starting state of my movieGenre to 'All'. 

Movie Component 🍿

```
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import MoviesModal from './MoviesModal'

const Movies = () => {
  const [movies, updateMovies] = useState([])
  const [movieGenre, updateMovieGenre] = useState('All')

  useEffect(() => {
    axios.get('https://stormy-atoll-29846.herokuapp.com/https://itunes.apple.com/search?term=films&sort=recent&limit=200.')
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
```
For rendering the JSX, I passed in the props from the parent component; in addition, I opted to import another Modal component I had created, so I could play media content in a pop-up modal. Once again I took advantage of useState here, setting the initial value of my modal to a Boolean, false. I then added an onClick={() => modalIsOpen(true)}> event listener to toggle the modal pop-up on click. To play the media, I imported 'ReactPlayer' from 'react-player'.

Modal Component 🍿

```
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

## Challenges

I had some trouble getting the modals to work as this branched into two areas we hadn't yet covered. I did some research and was able to build a custom modal that played the audio and video depending on the media type. In addition, I had some issues with deployment due to a CORS violation, I solved this by proxying the request with a CORS anywhere link.

## Wins!

I really wanted to make the UI for this particular project something a user would find useful browsing, and more than just filtering the results. I set myself a challenge to build a custom pop-up modal that could render the media for the user. 

After some googling, I found a recommended way to create a component that 'exists outside the DOM hierarchy' by using 'ReactDOM.createPortal(child, container).

Modal Component 📺

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
```



## Bugs!

- The modal for Movies and Music don't quite align in the center 
- The hyperlinks in the Podcast section do open a new link.
- The styling and layout could use some work.


## What I learned...

This was my first time building something with React and fetching data from a public API, I got a better understanding how React's render method and life cycle; in addition, I got a really good insight into how to take advantage of React Hooks, in particular useEffect and useState to render data onload and saving data in state to then run methods on later. 
