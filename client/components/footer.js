import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../store'
import responsive from 'react-responsive-decorator';
import { withRouter } from 'react-router'
import { overlap } from './overlap';

class Footer extends React.Component {
  constructor() {
    super();
    this.state = {}
  }
  render() {
    const path = this.props.location.pathname

    return (
      <div>
        <hr />
        <p>Email: Semiroundpizza8@gmail.com</p>
        <p>Phone: 773-633-0078</p>
        <nav>
          <div>
            {/* The Footer will show these NavLinks before you log in */}
            <NavLink to="/"><i className="fas fa-home" /></NavLink>
            <NavLink to="/about"><i className="fas fa-user-circle" /></NavLink>
            <NavLink to="/projects"><i className="fas fa-folder-open" /></NavLink>
            <NavLink to="/contact"><i className="fas fa-envelope" /></NavLink>
            <a href="https://www.linkedin.com/in/benjamin-odisho/"><i className="fab fa-linkedin-in" /></a>
            <a to="https://github.com/Semiroundpizza8"><i className="fab fa-github" /></a>
          </div>
        </nav>
      </div>
    );
  }
}

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

export default withRouter(responsive(connect(mapState, mapDispatch)(Footer)))
