import React from 'react'

import { Navbar, Footer } from './components'
import Routes from './routes'


const App = () => {
  return (
    <div>
      <div>
        <Navbar />
        <Routes />
        {/* <Footer /> */}
      </div>
    </div>
  )
}

export default App
