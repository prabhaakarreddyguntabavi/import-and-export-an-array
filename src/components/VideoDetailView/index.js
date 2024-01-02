/* eslint-disable no-undef */
// import {Redirect} from 'react-router-dom'
import {Component} from 'react'
import ReactPlayer from 'react-player'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {RiMenuAddFill} from 'react-icons/ri'

import HeaderContext from '../../context/HeaderContext'

import Header from '../Header'
import SideBar from '../SideBar'
import {
  VideoPageDiv,
  VideoBodyContainer,
  VideoText,
  VideoParagraph,
  VideoButton,
  LikedVideoButton,
  IsSavedVideoButton,
} from './styledComponents'

import './index.css'

class VideoDetailView extends Component {
  state = {
    isLoading: true,
    videoDetails: {},
    idLikedVideo: false,
    idDiLikedVideo: false,
    isVideoSavedVideo: false,
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

  idLikedVideoDict = () => {
    this.setState(previousState => ({
      idLikedVideo: !previousState.idLikedVideo,
      idDiLikedVideo: previousState.idLikedVideo,
    }))
  }

  idDiLikedVideoDict = () => {
    this.setState(previousState => ({
      idDiLikedVideo: !previousState.idDiLikedVideo,
      idLikedVideo: previousState.idDiLikedVideo,
    }))
  }

  isVideoSavedDict = onSaveVideos => {
    const {videoDetails, isVideoSavedVideo} = this.state
    this.setState(
      previousState => ({
        isVideoSavedVideo: !previousState.isVideoSavedVideo,
      }),
      onSaveVideos({...videoDetails, isVideoSaved: !isVideoSavedVideo}),
    )
  }

  savedDetails = (onSaveVideos, onRemoveSaveVideos) => {
    const {isVideoSaved, videoDetails} = this.state
    console.log(videoDetails)
    if (!isVideoSaved) {
      console.log('isVideoSaved')
      return onSaveVideos(videoDetails)
    }
    return onRemoveSaveVideos(videoDetails.id)
  }

  getProducts = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    this.setState({
      isLoading: true,
    })

    const jwtToken = Cookies.get('jwt_token')

    const apiUrl = `https://apis.ccbp.in/videos/${id}`
    const options = {
      headers: {
        Authorization: `Bearer ${jwtToken}`,
      },
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    if (response.ok) {
      const fetchedData = await response.json()

      const updatedData = {
        title: fetchedData.video_details.title,
        id: fetchedData.video_details.id,
        publishedAt: this.getYearsAgo(fetchedData.video_details.published_at),
        channel: {
          name: fetchedData.video_details.channel.name,
          profileImageUrl: fetchedData.video_details.channel.profile_image_url,
          subscriberCount: fetchedData.video_details.channel.subscriber_count,
        },
        thumbnailUrl: fetchedData.video_details.thumbnail_url,
        viewCount: fetchedData.video_details.view_count,
        videoUrl: fetchedData.video_details.video_url,
        description: fetchedData.video_details.description,
      }

      console.log(updatedData)

      this.setState({
        isLoading: false,
        videoDetails: updatedData,
      })
    } else {
      this.setState({
        isLoading: false,
        videoDetails: {},
      })
    }
  }

  renderProductsList = (isDarkMood, onSaveVideos) => {
    const {
      videoDetails,
      idDiLikedVideo,
      idLikedVideo,
      isVideoSavedVideo,
    } = this.state

    if (videoDetails.length !== 0) {
      return (
        <VideoBodyContainer isDarkMood={isDarkMood}>
          <ReactPlayer className="video-size" url={videoDetails.videoUrl} />
          <p>{videoDetails.title}</p>
          <div className="video-views-container">
            <div className="video-views-likes">
              <p className="views-count">{videoDetails.viewCount} Views</p>
              <p>{videoDetails.publishedAt} Years Ago</p>
            </div>
            <div className="video-views-likes">
              <LikedVideoButton
                isDarkMood={isDarkMood}
                type="button"
                onClick={this.idLikedVideoDict}
                idLikedVideo={idLikedVideo}
              >
                <AiOutlineLike />
                Like
              </LikedVideoButton>
              <VideoButton
                onClick={this.idDiLikedVideoDict}
                isDarkMood={isDarkMood}
                type="button"
                idDiLikedVideo={idDiLikedVideo}
              >
                <AiOutlineDislike />
                Dislike
              </VideoButton>
              <IsSavedVideoButton
                onClick={() => this.isVideoSavedDict(onSaveVideos)}
                isDarkMood={isDarkMood}
                type="button"
                isVideoSaved={isVideoSavedVideo}
              >
                <RiMenuAddFill />
                {isVideoSavedVideo ? 'Saved' : 'Save'}
              </IsSavedVideoButton>
            </div>
          </div>
          <hr />
          <VideoText isDarkMood={isDarkMood} className="video-container">
            <img
              className="video-profile-container"
              src={videoDetails.channel.profileImageUrl}
              alt="channel logo"
            />
            <div className="videos-text-container">
              <VideoParagraph isDarkMood={isDarkMood} className="title-heading">
                {videoDetails.channel.name}
              </VideoParagraph>
              <VideoParagraph
                isDarkMood={isDarkMood}
                className="channel-name-text"
              >
                {videoDetails.channel.subscriberCount} Subscribers
              </VideoParagraph>
            </div>
          </VideoText>
          <p>{videoDetails.description}</p>
        </VideoBodyContainer>
      )
    }
    return (
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
  }

  renderLoader = () => (
    <div className="products-loader-container" data-testid="loader">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  render() {
    const {isLoading} = this.state
    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDarkMood, onSaveVideos} = value
          return (
            <>
              {isLoading ? (
                this.renderLoader
              ) : (
                <>
                  <Header />
                  <VideoPageDiv isDarkMood={isDarkMood}>
                    <SideBar isDarkMood={isDarkMood} />
                    {this.renderProductsList(isDarkMood, onSaveVideos)}
                  </VideoPageDiv>
                </>
              )}
            </>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default VideoDetailView
