import React from 'react'

import { Navbar, Footer } from './components'
import Routes from './routes'


const App = () => {
  return (
    <div>
      <canvas style={{position: 'absolute', zIndex: '-100', opacity: '0.2'}} />
      <div className="wholeBody" >
        <Navbar />
        <Routes />
        <Footer />
      </div>
    </div>
  )
}

export default App
