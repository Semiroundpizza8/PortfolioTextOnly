import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../store'
import responsive from 'react-responsive-decorator';

class Navbar extends React.Component {
  state = {
    isMobile: false
  }

  componentDidMount() {
    this.props.media({ minWidth: 768 }, () => {
      this.setState({
        isMobile: false
      });
    });
    this.props.media({ maxWidth: 768 }, () => {
      this.setState({
        isMobile: true
      });
    });
  }

  render() {
    const { isMobile } = this.state;
    return (
      <div>
        <hr />
        {!isMobile ?
          <nav>
            <div>
              {/* The navbar will show these NavLinks before you log in */}
              <NavLink to="/"><h2>Benjamin Odisho</h2></NavLink>
              <NavLink to="/about"><h2>About</h2></NavLink>
              <NavLink to="/projects"><h2>Projects</h2></NavLink>
              <NavLink to="/contact"><h2>Contact</h2></NavLink>
            </div>
          </nav> :
          <nav>
            <div>
              {/* The navbar will show these NavLinks before you log in */}
              <NavLink to="/"><i className="fas fa-home"></i></NavLink>
              <NavLink to="/about"><i className="fas fa-user-circle" /></NavLink>
              <NavLink to="/projects"><i className="fas fa-folder-open" /></NavLink>
              <NavLink to="/contact"><i className="fas fa-envelope" /></NavLink>
            </div>
          </nav>
        }
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

export default responsive(connect(mapState, mapDispatch)(Navbar))
