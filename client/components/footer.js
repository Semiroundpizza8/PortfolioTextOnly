import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../store'

const Navbar = () => (
  <div style={{marginTop: '7.5%'}}>
    <hr />
    <nav>
      <div>
        {/* The navbar will show these NavLinks before you log in */}
        <NavLink to="/"><h3>Benjamin Odisho</h3></NavLink>
        <NavLink to="/about"><h3>About</h3></NavLink>
        <NavLink to="/projects"><h3>Projects</h3></NavLink>
        <NavLink to="/contact"><h3>Contact</h3></NavLink>
      </div>
    </nav>
  </div>
)

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    }
  }
}

export default connect(mapState, mapDispatch)(Navbar)

