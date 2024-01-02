/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

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
  TrendingThumbnailImage,
} from './styledComponents'

import './index.css'

const trendingApiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failed: 'FAILED',
  success: 'SUCCESS',
}

class TrendingVideos extends Component {
  state = {
    listOfVideos: [],
    isLoading: trendingApiStatus.initial,
  }

  componentDidMount() {
    this.getProducts()
  }

  getYearsAgo = publishedDate => {
    const currentDate = new Date()
    const diffInMilliseconds = currentDate - new Date(publishedDate)
    const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)

    const yearsAgo = Math.floor(diffInYears)

    return yearsAgo
  }

  getProducts = async () => {
    this.setState({
      isLoading: trendingApiStatus.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/trending`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()
      console.log(fetchedData)

      const updatedData = fetchedData.videos.map(product => ({
        title: product.title,
        id: product.id,
        publishedAt: product.published_at,
        channel: {
          name: product.channel.name,
          profileImageUrl: product.channel.profile_image_url,
        },
        thumbnailUrl: product.thumbnail_url,
        viewCount: product.view_count,
      }))

      console.log(updatedData)

      this.setState({
        listOfVideos: updatedData,
        isLoading: trendingApiStatus.success,
      })
    } else {
      this.setState({
        listOfVideos: [],
        isLoading: trendingApiStatus.failed,
      })
    }
  }

  onSuccessTrendingVideos = isDarkMood => {
    const {listOfVideos} = this.state

    if (listOfVideos.length !== 0) {
      return (
        <ListOfSavedVideos>
          {listOfVideos.map(eachVideo => (
            <Link
              className="Saved-videos-link"
              key={eachVideo.id}
              to={`/videos/${eachVideo.id}`}
            >
              <EachSavedVideo className="video-list-container">
                <TrendingThumbnailImage
                  src={eachVideo.thumbnailUrl}
                  alt="thumbnail"
                />
                <VideoText isDarkMood={isDarkMood} className="video-container">
                  <img
                    className="profile-container"
                    src={eachVideo.channel.profileImageUrl}
                    alt={eachVideo.channel.name}
                  />
                  <div className="videos-text-container">
                    <VideoParagraph className="title-heading">
                      {eachVideo.title}
                    </VideoParagraph>
                    <VideoParagraph className="channel-name-text">
                      {eachVideo.channel.name}
                    </VideoParagraph>
                    <div className="saved-video-views-container">
                      <p className="views-count">{eachVideo.viewCount} Views</p>
                      <p>{this.getYearsAgo(eachVideo.publishedAt)} Years Ago</p>
                    </div>
                  </div>
                </VideoText>
              </EachSavedVideo>
            </Link>
          ))}
        </ListOfSavedVideos>
      )
    }
    return (
      <div className="no-search-result">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <h1>No Search results found</h1>
        <p>Try different key worlds or remove search filter</p>
        <button type="button" onClick={this.getProducts}>
          Retry
        </button>
      </div>
    )
  }

  renderLoaderTrendingVideos = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onFailureTrendingVideos = () => (
    <div className="no-search-result">
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
        alt="no videos"
      />
      <h1>Oops! Something Went Wrong</h1>
      <p>
        We are having some trouble to complete your request.
        <br /> Please try again
      </p>
      <button type="button" onClick={this.getProducts}>
        Retry
      </button>
    </div>
  )

  getTheOutPut = isDarkMood => {
    const {isLoading} = this.state
    switch (isLoading) {
      case trendingApiStatus.inProgress:
        return this.renderLoaderTrendingVideos()
      case trendingApiStatus.failed:
        return this.onFailureTrendingVideos()
      case trendingApiStatus.success:
        return this.onSuccessTrendingVideos(isDarkMood)
      default:
        return null
    }
  }

  render() {
    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDarkMood} = value
          return (
            <>
              <Header />
              <VideosPageDiv>
                <SideBar />
                <SavedVideosContainer>
                  {this.getTheOutPut({isDarkMood})}
                </SavedVideosContainer>
              </VideosPageDiv>
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default TrendingVideos
