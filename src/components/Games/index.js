/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import HeaderContext from '../../context/HeaderContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomePageDiv,
  BodyContainer,
  VideoText,
  VideoParagraph,
} from './styledComponents'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failed: 'FAILED',
  success: 'SUCCESS',
}

class Games extends Component {
  state = {
    listOfVideos: [],
    isLoading: apiStatus.initial,
  }

  componentDidMount() {
    this.getProducts()
  }

  //   getYearsAgo = publishedDate => {
  //     const currentDate = new Date()
  //     const diffInMilliseconds = currentDate - new Date(publishedDate)
  //     const diffInYears = diffInMilliseconds / (1000 * 60 * 60 * 24 * 365.25)

  //     const yearsAgo = Math.floor(diffInYears)

  //     return yearsAgo
  //   }

  getProducts = async () => {
    this.setState({
      isLoading: apiStatus.inProgress,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/gaming`

    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)

    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = fetchedData.videos.map(product => ({
        title: product.title,
        id: product.id,
        thumbnailUrl: product.thumbnail_url,
        viewCount: product.view_count,
      }))

      this.setState({
        listOfVideos: updatedData,
        isLoading: apiStatus.success,
      })
    } else {
      this.setState({
        listOfVideos: [],
        isLoading: apiStatus.failed,
      })
    }
  }

  closeAdd = () => {
    this.setState({
      idAddClosed: true,
    })
  }

  onSearch = event => {
    this.setState({
      searchInput: event.target.value,
    })
  }

  onSuccess = isDarkMood => {
    const {listOfVideos} = this.state

    if (listOfVideos.length !== 0) {
      return (
        <ul className="total-video-container">
          {listOfVideos.map(eachVideo => (
            <div key={eachVideo.id} className="video-list-container">
              <Link className="videos-link" to={`videos/${eachVideo.id}`}>
                <img
                  className="thumbnail-image"
                  src={eachVideo.thumbnailUrl}
                  alt="thumbnail"
                />
                <VideoText isDarkMood={isDarkMood} className="video-container">
                  <div className="videos-text-container">
                    <VideoParagraph className="title-heading">
                      {eachVideo.title}
                    </VideoParagraph>
                    <div className="video-views-container">
                      <li className="views-count">
                        {eachVideo.viewCount} Views
                      </li>
                      <li>{eachVideo.publishedAt} Years Ago</li>
                    </div>
                  </div>
                </VideoText>
              </Link>
            </div>
          ))}
        </ul>
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

  renderLoader = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  onFailure = () => (
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
      case apiStatus.inProgress:
        return this.renderLoader()
      case apiStatus.failed:
        return this.onFailure()
      case apiStatus.success:
        return this.onSuccess(isDarkMood)
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
              <HomePageDiv isDarkMood={isDarkMood}>
                <SideBar />
                <BodyContainer isDarkMood={isDarkMood}>
                  <div>{this.getTheOutPut({isDarkMood})}</div>
                </BodyContainer>
              </HomePageDiv>
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default Games
