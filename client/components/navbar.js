import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import Scrollchor from 'react-scrollchor'
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
    marginLeft: '5vw',
    marginRight: '5vw',
    alignItems: 'center'
  }

  backgroundStyle = {
    backgroundColor: '#231f20',
    position: 'fixed',
    top: 0,
    opacity: '.85',
    width: '100%',
    zIndex: '100'
  }

  navStyle = {
    display: 'inline',
    opacity: '1',
    margin: '0'
  }

  mobileNavStyle = {
    display: 'inline',
    opacity: '1',
    marginLeft: '2.5vw'
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
              <h3 style={{ ...this.navStyle, marginRight: 'auto'}}><Scrollchor to="#home">{gradate('Benjamin Odisho', 'dark')}</Scrollchor></h3>
              <h3 style={this.navStyle}><Scrollchor to="#about">{'About'}</Scrollchor></h3>
              <h3 style={this.navStyle}><Scrollchor to="#projects">{'Projects'}</Scrollchor></h3>
              <h3 style={this.navStyle}><Scrollchor to="#contact">{'Contact'}</Scrollchor></h3>
              <h3 style={this.navStyle}><a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamin-odisho/">LinkedIn</a></h3>
              <h3 style={this.navStyle}><a target="_blank" rel="noopener noreferrer" href="https://github.com/Semiroundpizza8">Github</a></h3>
            </div>
          </nav> :
          <nav>
            <div style={this.flex}>
              {/* The navbar will show these Scrollchors before you log in */}
              <h3 style={{ ...this.navStyle, marginRight: 'auto'}}><Scrollchor to="#home">{gradate('Benjamin Odisho', 'dark')}</Scrollchor></h3>
              <Scrollchor style={this.mobileNavStyle} to="#about"><i className="fas fa-user-circle" /></Scrollchor>
              <Scrollchor style={this.mobileNavStyle} to="#projects"><i className="fas fa-folder-open" /></Scrollchor>
              <Scrollchor style={this.mobileNavStyle} to="#contact"><i className="fas fa-envelope" /></Scrollchor>
              <a style={this.mobileNavStyle} target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/benjamin-odisho/"><i className="fab fa-linkedin-in" /></a>
              <a style={this.mobileNavStyle} target="_blank" rel="noopener noreferrer" href="https://github.com/Semiroundpizza8"><i className="fab fa-github" /></a>
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
