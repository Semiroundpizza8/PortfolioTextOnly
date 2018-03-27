import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {NavLink} from 'react-router-dom'
import {logout} from '../store'

const Navbar = ({ handleClick, isLoggedIn }) => (
  <div>
    <nav>
        <div>
          {/* The navbar will show these NavLinks before you log in */}
          <NavLink to="/"><h1>Benjamin Odisho</h1></NavLink>
          <NavLink to="/about"><h1>About</h1></NavLink>
          <NavLink to="/projects"><h1>Projects</h1></NavLink>
          <NavLink to="/contact"><h1>Contact</h1></NavLink>
        </div>
    </nav>
    <hr />
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

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
}
