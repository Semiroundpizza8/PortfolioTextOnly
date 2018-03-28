import React from 'react'

import {Navbar} from './components'
import Routes from './routes'


const App = () => {
  return (
    <div style={{
      marginLeft: '25%',
      marginRight: '5%',
      // textAlign: 'justify'
      }}>
      <Navbar />
      <Routes />
      <Navbar />
    </div>
  )
}

export default App
