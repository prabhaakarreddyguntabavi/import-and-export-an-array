import HeaderContext from '../../context/HeaderContext'

import Header from '../Header'
import SideBar from '../SideBar'

// eslint-disable-next-line import/named
import {NotFoundDiv, HomePageDiv} from './styledComponents'

import './index.css'

const text = 'we are sorry, the page you requested could not be found.'
const NotFound = () => (
  <HeaderContext.Consumer>
    {value => {
      const {isDarkMood} = value
      return (
        <>
          <Header />
          <HomePageDiv>
            <SideBar />
            <NotFoundDiv
              isDarkMood={isDarkMood}
              className="not-found-container"
            >
              <img
                src={
                  isDarkMood
                    ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
                    : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'
                }
                alt="not found"
                className="not-found-img"
              />
              <h1>Page Not Found</h1>
              <p>{text}</p>
            </NotFoundDiv>
          </HomePageDiv>
        </>
      )
    }}
  </HeaderContext.Consumer>
)

export default NotFound
