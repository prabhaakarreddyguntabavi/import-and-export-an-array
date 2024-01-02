import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {withRouter, Link} from 'react-router-dom'
import {IoMenu, IoClose} from 'react-icons/io5'
import {IoIosLogOut} from 'react-icons/io'
import HeaderContext from '../../context/HeaderContext'

// eslint-disable-next-line import/named
import {
  NavBar,
  LogoutButton,
  MobileNavBar,
  PopupMenuButton,
  PopupContainer,
  MobileNavBarContainer,
  NavBarDarkLightButton,
  NavBarDarkLightImage,
} from './styledComponents'
import MobileSideBar from '../MobileSideBar'
import './index.css'

const Header = props => (
  <HeaderContext.Consumer>
    {value => {
      const {isDarkMood, onChangeDarkMood} = value
      console.log()

      const {history} = props
      const onClickLogout = () => {
        history.replace('/login')
        Cookies.remove('jwt_token')
      }

      return (
        <>
          <MobileNavBar isDarkMood={isDarkMood}>
            <Link to="/">
              <img
                className="logo-image"
                src={
                  !isDarkMood
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <MobileNavBarContainer>
              <NavBarDarkLightButton
                data-testid="theme"
                type="button"
                onClick={onChangeDarkMood}
              >
                <NavBarDarkLightImage
                  src={
                    !isDarkMood
                      ? 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                  }
                  alt="light"
                />
              </NavBarDarkLightButton>
              <Popup
                modal
                trigger={
                  <PopupMenuButton type="button">
                    <IoMenu className="icon-image" />
                    {}
                  </PopupMenuButton>
                }
              >
                {close => (
                  <>
                    <PopupContainer className="popup-container">
                      <MobileSideBar />
                      <PopupMenuButton type="button" onClick={() => close()}>
                        <IoClose />
                        {}
                      </PopupMenuButton>
                    </PopupContainer>
                  </>
                )}
              </Popup>
              <Popup
                modal
                trigger={
                  <LogoutButton isDarkMood={isDarkMood} type="button">
                    <IoIosLogOut className="icon-image-1" />
                    {}
                  </LogoutButton>
                }
              >
                {close => (
                  <>
                    <div className="popup-container">
                      <div className="closing-container">
                        <h1>Are you sure you want to logout?</h1>
                        <button
                          type="button"
                          className="trigger-button"
                          data-testid="close"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <LogoutButton
                          isDarkMood={isDarkMood}
                          className="logout-button"
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </LogoutButton>
                      </div>
                    </div>
                  </>
                )}
              </Popup>
            </MobileNavBarContainer>
          </MobileNavBar>
          <NavBar isDarkMood={isDarkMood}>
            <Link to="/">
              <img
                className="logo-image"
                src={
                  !isDarkMood
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                }
                alt="website logo"
              />
            </Link>
            <div className="header-profile-details">
              <button
                data-testid="theme"
                type="button"
                onClick={onChangeDarkMood}
                className="header-styles"
              >
                <img
                  className="icon-image"
                  src={
                    isDarkMood
                      ? 'https://assets.ccbp.in/frontend/react-js/dark-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/light-theme-img.png'
                  }
                  alt="dark"
                />
              </button>
              <img
                className="icon-image-1"
                src={
                  isDarkMood
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png'
                }
                alt="profile"
              />

              <Popup
                modal
                trigger={
                  <LogoutButton
                    isDarkMood={isDarkMood}
                    className="logout-button"
                    type="button"
                  >
                    Logout
                  </LogoutButton>
                }
              >
                {close => (
                  <>
                    <div className="popup-container">
                      <div className="closing-container">
                        <h1>Are you sure you want to logout?</h1>
                        <button
                          type="button"
                          className="trigger-button"
                          data-testid="closeButton"
                          onClick={() => close()}
                        >
                          Cancel
                        </button>
                        <LogoutButton
                          isDarkMood={isDarkMood}
                          className="logout-button"
                          type="button"
                          onClick={onClickLogout}
                        >
                          Confirm
                        </LogoutButton>
                      </div>
                    </div>
                  </>
                )}
              </Popup>
            </div>
          </NavBar>
        </>
      )
    }}
  </HeaderContext.Consumer>
)

export default withRouter(Header)
