import {Link} from 'react-router-dom'
import HeaderContext from '../../context/HeaderContext'
import Header from '../Header'
import SideBar from '../SideBar'
import {
  VideosPageDiv,
  SavedVideosContainer,
  VideoText,
  VideoParagraph,
  ListOfSavedVideos,
  EachSavedVideo,
} from './styledComponents'
import './index.css'

const SavedVideosDict = () => (
  <HeaderContext.Consumer>
    {value => {
      const {savedVideos, isDarkMood} = value

      const noSavedVideos = () => (
        <div className="no-saved-videos-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
            alt="no saved videos"
          />
          <h1>No saved videos found</h1>
          <p>You can save your videos while watching them</p>
        </div>
      )

      const SavedVideos = () => (
        <>
          <h1>Saved Videos</h1>
          <ListOfSavedVideos>
            {savedVideos.map(eachVideo => (
              <Link
                key={eachVideo.id}
                className="Saved-videos-link"
                to={`videos/${eachVideo.id}`}
              >
                <EachSavedVideo className="video-list-container">
                  <img
                    className="saved-thumbnail-image"
                    src={eachVideo.thumbnailUrl}
                    alt="video thumbnail"
                  />
                  <VideoText
                    isDarkMood={isDarkMood}
                    className="video-container"
                  >
                    <img
                      className="profile-container"
                      src={eachVideo.channel.profileImageUrl}
                      alt="website logo"
                    />
                    <div className="videos-text-container">
                      <VideoParagraph className="title-heading">
                        {eachVideo.title}
                      </VideoParagraph>
                      <VideoParagraph className="channel-name-text">
                        {eachVideo.channel.name}
                      </VideoParagraph>
                      <div className="saved-video-views-container">
                        <p className="views-count">
                          {eachVideo.viewCount} Views
                        </p>
                        <p>{eachVideo.publishedAt}</p> <span>Years Ago</span>
                      </div>
                    </div>
                  </VideoText>
                </EachSavedVideo>
              </Link>
            ))}
          </ListOfSavedVideos>
        </>
      )

      return (
        <>
          <Header />
          <VideosPageDiv>
            <SideBar />
            <SavedVideosContainer>
              {savedVideos.length === 0 ? noSavedVideos() : SavedVideos()}
            </SavedVideosContainer>
          </VideosPageDiv>
        </>
      )
    }}
  </HeaderContext.Consumer>
)

export default SavedVideosDict
