import React from 'react'

import {Navbar} from './components'
import Routes from './routes'


const App = () => {
  return (
    <div style={{
      marginLeft: '5%',
      marginRight: '5%',
      // textAlign: 'justify'
      }}>
      <Navbar />
      <Routes />
    </div>
  )
}

export default App
