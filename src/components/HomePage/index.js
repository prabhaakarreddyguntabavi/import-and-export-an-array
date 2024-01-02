/* eslint-disable react/no-unused-state */
import {Component} from 'react'
import {Link} from 'react-router-dom'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'

import {IoSearchOutline} from 'react-icons/io5'
import {IoIosClose} from 'react-icons/io'

import HeaderContext from '../../context/HeaderContext'
import Header from '../Header'
import SideBar from '../SideBar'

import {
  HomePageDiv,
  BodyContainer,
  AddContainer,
  VideoText,
  VideoParagraph,
  BannerContainer,
  BannerImage,
  BannerText,
  BannerButton,
  BannerClosingButton,
  SearchInputContainer,
  SearchInput,
  SearchButton,
  HomeUnOrderList,
  EachVideoList,
  EachVideoImage,
  ExchVideoChannelLogo,
  EachVideoChannelTextContent,
  EachVideoChannelViewsContainer,
  EachVideoViewsCount,
} from './styledComponents'

import './index.css'

const apiStatus = {
  initial: 'INITIAL',
  inProgress: 'INPROGRESS',
  failed: 'FAILED',
  success: 'SUCCESS',
}

class HomePage extends Component {
  state = {
    listOfVideos: [],
    idAddClosed: false,
    searchInput: '',
    isLoading: apiStatus.initial,
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
      isLoading: apiStatus.inProgress,
    })
    const {searchInput} = this.state

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/all?search=${searchInput}`

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
        publishedAt: product.published_at,
        channel: {
          name: product.channel.name,
          profileImageUrl: product.channel.profile_image_url,
        },
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
        <HomeUnOrderList isDarkMood={isDarkMood}>
          {listOfVideos.map(eachVideo => (
            <Link
              className="videos-link"
              key={eachVideo.id}
              to={`videos/${eachVideo.id}`}
            >
              <EachVideoList>
                <EachVideoImage
                  src={eachVideo.thumbnailUrl}
                  alt="video thumbnail"
                />
                <VideoText isDarkMood={isDarkMood}>
                  <ExchVideoChannelLogo
                    src={eachVideo.channel.profileImageUrl}
                    alt="channel logo"
                  />
                  <EachVideoChannelTextContent isDarkMood={isDarkMood}>
                    <VideoParagraph>{eachVideo.title}</VideoParagraph>
                    <VideoParagraph>{eachVideo.channel.name}</VideoParagraph>
                    <EachVideoChannelViewsContainer isDarkMood={isDarkMood}>
                      <EachVideoViewsCount>
                        {eachVideo.viewCount} Views
                      </EachVideoViewsCount>
                      <EachVideoViewsCount>
                        {this.getYearsAgo(eachVideo.publishedAt)} Years Ago
                      </EachVideoViewsCount>
                    </EachVideoChannelViewsContainer>
                  </EachVideoChannelTextContent>
                </VideoText>
              </EachVideoList>
            </Link>
          ))}
        </HomeUnOrderList>
      )
    }
    return (
      <div className="no-search-result">
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no videos"
        />
        <h1>No Search results found</h1>
        <p>Try different key words or remove search filter</p>
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
    const {idAddClosed, searchInput} = this.state
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
                  <AddContainer data-testid="banner" idAddClosed={idAddClosed}>
                    <BannerContainer>
                      <BannerImage
                        className="add-logo-image"
                        src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                        alt="nxt watch logo"
                      />
                      <BannerText isDarkMood={isDarkMood}>
                        Buy Nxt Watch Premium prepaid plans with UPI
                      </BannerText>
                      <BannerButton type="button">GET IT NOW</BannerButton>
                    </BannerContainer>

                    <BannerClosingButton
                      onClick={this.closeAdd}
                      data-testid="close"
                      type="button"
                    >
                      <IoIosClose className="closing-icon" /> {}
                    </BannerClosingButton>
                  </AddContainer>
                  <SearchInputContainer>
                    <SearchInput
                      isDarkMood={isDarkMood}
                      type="search"
                      placeholder="Search"
                      value={searchInput}
                      onChange={this.onSearch}
                    />
                    <SearchButton
                      isDarkMood={isDarkMood}
                      data-testid="searchButton"
                      type="button"
                      onClick={this.getProducts}
                    >
                      <IoSearchOutline />
                      {}
                    </SearchButton>
                  </SearchInputContainer>
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

export default HomePage
