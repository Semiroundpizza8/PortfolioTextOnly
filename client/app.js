import React from 'react'

import {Navbar, Footer} from './components'
import Routes from './routes'


const App = () => {
  return (
    <div style={{
      marginLeft: '22.5%',
      marginRight: '7.5%',
      // textAlign: 'justify'
      }}>
      <Navbar />
      <Routes />
      <Footer />
    </div>
  )
}

export default App
