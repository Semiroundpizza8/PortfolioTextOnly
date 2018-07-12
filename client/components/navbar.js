import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { logout } from '../store'
import responsive from 'react-responsive-decorator';
import { withRouter } from 'react-router'
import { overlap, gradate } from './overlap';


class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isMobile: false
    }
  }

  flex = {
    display: 'flex',
    justifyContent: 'flex-end',
  }

  backgroundStyle = {
    backgroundColor: '#231f20',
    position: 'fixed',
    top: 0,
    width: '100%',
    zIndex: '100'
  }

  navStyle = {
    display: 'inline',
    margin: '0'
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
      <div style={this.backgroundStyle}>
        {!isMobile ?
          <nav>
            <div style={this.flex}>
              {/* The Footer will show these NavLinks before you log in */}
              <h3 style={this.navStyle}><NavLink to="/">{path === '/' ? gradate('Benjamin Odisho', 'dark') : 'Benjamin Odisho'}</NavLink></h3>
              <h3 style={this.navStyle}><NavLink to="/about">{path === '/about' ? overlap('About') : 'About'}</NavLink></h3>
              <h3 style={this.navStyle}><NavLink to="/projects">{path === '/projects' ? overlap('Projects') : 'Projects'}</NavLink></h3>
              <h3 style={this.navStyle}><NavLink to="/contact">{path === '/contact' ? overlap('Contact') : 'Contact'}</NavLink></h3>
              <h3 style={this.navStyle}><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamin-odisho/">LinkedIn</a></h3>
              <h3 style={this.navStyle}><a target="_blank" rel="noopener noreferrer" href="https://github.com/Semiroundpizza8">Github</a></h3>
            </div>
          </nav> :
          <nav>
            <div>
              {/* The navbar will show these NavLinks before you log in */}
              <NavLink to="/"><i className="fas fa-home"></i></NavLink>
              <NavLink to="/about"><i className="fas fa-user-circle" /></NavLink>
              <NavLink to="/projects"><i className="fas fa-folder-open" /></NavLink>
              <NavLink to="/contact"><i className="fas fa-envelope" /></NavLink>
              <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamin-odisho/"><i className="fab fa-linkedin-in" /></a>
              <a target="_blank" rel="noopener noreferrer" href="https://github.com/Semiroundpizza8"><i className="fab fa-github" /></a>
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

export default withRouter(responsive(connect(mapState, mapDispatch)(Navbar)))
