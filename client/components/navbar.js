import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../store'
import responsive from 'react-responsive-decorator';
import { withRouter } from 'react-router'
import { overlap } from './overlap';

class Navbar extends React.Component {
  state = {
    isMobile: false
  }

  componentDidMount() {
    this.props.media({ minWidth: 1090 }, () => {
      this.setState({
        isMobile: false
      });
    });
    this.props.media({ maxWidth: 1090 }, () => {
      this.setState({
        isMobile: true
      });
    });
  }

  render() {
    const { isMobile } = this.state;
    const path = this.props.location.pathname

    return (
      <div>
        {!isMobile ?
          <nav>
            <div>
              {/* The Footer will show these NavLinks before you log in */}
              <h3 style={{ display: 'inline' }}><NavLink to="/">{path === '/' ? overlap('Benjamin Odisho') : 'Benjamin Odisho'}</NavLink></h3>
              <h3 style={{ display: 'inline' }}><NavLink to="/about">{path === '/about' ? overlap('About') : 'About'}</NavLink></h3>
              <h3 style={{ display: 'inline' }}><NavLink to="/projects">{path === '/projects' ? overlap('Projects') : 'Projects'}</NavLink></h3>
              <h3 style={{ display: 'inline' }}><NavLink to="/contact">{path === '/contact' ? overlap('Contact') : 'Contact'}</NavLink></h3>
              <h3 style={{ display: 'inline' }}><a href="https://www.linkedin.com/in/benjamin-odisho/">LinkedIn</a></h3>
              <h3 style={{ display: 'inline' }}><a href="https://github.com/Semiroundpizza8">Github</a></h3>
              {/* <a href="https://www.linkedin.com/in/benjamin-odisho/"><i className="fab fa-linkedin-in fa-lg" /></a>
              <a to="https://github.com/Semiroundpizza8"><i className="fab fa-github fa-lg" /></a> */}
            </div>
          </nav> :
          <nav>
            <div>
              {/* The navbar will show these NavLinks before you log in */}
              <NavLink to="/"><i className="fas fa-home"></i></NavLink>
              <NavLink to="/about"><i className="fas fa-user-circle" /></NavLink>
              <NavLink to="/projects"><i className="fas fa-folder-open" /></NavLink>
              <NavLink to="/contact"><i className="fas fa-envelope" /></NavLink>
              <a href="https://www.linkedin.com/in/benjamin-odisho/"><i className="fab fa-linkedin-in" /></a>
              <a href="https://github.com/Semiroundpizza8"><i className="fab fa-github" /></a>
            </div>
          </nav>
        }
        <hr />
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

export default withRouter(responsive(connect(mapState, mapDispatch)(Navbar)))
