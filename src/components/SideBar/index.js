import {IoMdHome} from 'react-icons/io'
import {Link} from 'react-router-dom'
import {FaFire} from 'react-icons/fa'
import {SiYoutubegaming} from 'react-icons/si'
import {RiMenuAddLine} from 'react-icons/ri'
import HeaderContext from '../../context/HeaderContext'

import {
  SideBarContainer,
  HomeUnOrderList,
  HomeListItems,
  SocialMediaContainer,
  SocialMedia,
  ContactUsHeading,
  HomeNavList,
  HomeParagraph,
} from './styledComponents'

import './index.css'

const SideBar = () => (
  <HeaderContext.Consumer>
    {value => {
      const {onChangeHeadingTopics, selectOption, isDarkMood} = value

      return (
        <SideBarContainer isDarkMood={isDarkMood}>
          <HomeUnOrderList className="side-bar-container">
            <HomeNavList
              className={`${selectOption === 'HOME' ? 'selected-color' : ''}`}
            >
              <Link
                className={`${selectOption === 'HOME' ? 'selected-color' : ''}`}
                to="/"
              >
                <HomeListItems
                  onClick={() => onChangeHeadingTopics('HOME')}
                  className={`${
                    selectOption === 'HOME' ? 'selected-color' : ''
                  }`}
                >
                  <IoMdHome
                    className={`icons ${
                      selectOption === 'HOME' ? 'icon-color' : ''
                    }`}
                  />
                  <HomeParagraph className="paragraph" isDarkMood={isDarkMood}>
                    Home
                  </HomeParagraph>
                </HomeListItems>
              </Link>
            </HomeNavList>
            <HomeNavList
              className={`${
                selectOption === 'TRENDING' ? 'selected-color' : ''
              }`}
            >
              <Link
                className={`${
                  selectOption === 'TRENDING' ? 'selected-color' : ''
                }`}
                to="/videos/trending"
              >
                <HomeListItems
                  onClick={() => onChangeHeadingTopics('TRENDING')}
                  className={`${
                    selectOption === 'TRENDING' ? 'selected-color' : ''
                  }`}
                >
                  <FaFire
                    className={`icons ${
                      selectOption === 'TRENDING' ? 'icon-color' : ''
                    }`}
                  />
                  <HomeParagraph className="paragraph" isDarkMood={isDarkMood}>
                    Trending
                  </HomeParagraph>
                </HomeListItems>
              </Link>
            </HomeNavList>
            <HomeNavList
              className={`${selectOption === 'GAMING' ? 'selected-color' : ''}`}
            >
              <Link
                className={`${
                  selectOption === 'GAMING' ? 'selected-color' : ''
                }`}
                to="/gaming"
              >
                <HomeListItems
                  onClick={() => onChangeHeadingTopics('GAMING')}
                  className={`${
                    selectOption === 'GAMING' ? 'selected-color' : ''
                  }`}
                >
                  <SiYoutubegaming
                    className={`icons ${
                      selectOption === 'GAMING' ? 'icon-color' : ''
                    }`}
                  />
                  <HomeParagraph className="paragraph" isDarkMood={isDarkMood}>
                    Gaming
                  </HomeParagraph>
                </HomeListItems>
              </Link>
            </HomeNavList>
            <HomeNavList
              className={`${
                selectOption === 'SAVEVIDEOS' ? 'selected-color' : ''
              }`}
            >
              <Link
                className={`${
                  selectOption === 'SAVEVIDEOS' ? 'selected-color' : ''
                }`}
                to="/saved-videos"
              >
                <HomeListItems
                  isDarkMood={isDarkMood}
                  data-testid="savedVideos"
                  onClick={() => onChangeHeadingTopics('SAVEVIDEOS')}
                  className={`${
                    selectOption === 'SAVEVIDEOS' ? 'selected-color' : ''
                  }`}
                >
                  <RiMenuAddLine
                    className={`icons ${
                      selectOption === 'SAVEVIDEOS' ? 'icon-color' : ''
                    }`}
                  />
                  <HomeParagraph className="paragraph" isDarkMood={isDarkMood}>
                    Saved videos
                  </HomeParagraph>
                </HomeListItems>
              </Link>
            </HomeNavList>
          </HomeUnOrderList>
          <SocialMediaContainer>
            <ContactUsHeading>CONTACT US</ContactUsHeading>
            <SocialMedia>
              <li>
                <img
                  className="social-media-image"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                  alt="facebook logo"
                />
              </li>
              <li>
                <img
                  className="social-media-image"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png"
                  alt="twitter logo"
                />
              </li>
              <li>
                <img
                  className="social-media-image"
                  src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png"
                  alt="linked in logo"
                />
              </li>
            </SocialMedia>
            <p>Enjoy! Now to see your channels and recommendations!</p>
          </SocialMediaContainer>
        </SideBarContainer>
      )
    }}
  </HeaderContext.Consumer>
)

export default SideBar
