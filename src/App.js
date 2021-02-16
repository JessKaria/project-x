import React from 'react'
import 'bulma'
import './styles/style.scss'
import Nav from './components/Nav'
import Movies from './components/Movies'
import Music from './components/Music'
import Podcast from './components/Podcast'
import Footer from './components/Footer'

const App = () => {
  return <div>
    <Nav />
    <Movies />
    <Music />
    <Podcast />
    <Footer />

  </div>
}
  
export default App
