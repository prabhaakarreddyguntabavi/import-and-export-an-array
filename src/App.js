/* eslint-disable react/no-unused-state */
import {Component} from 'react'

import {Route, Switch, Redirect} from 'react-router-dom'

import HeaderContext from './context/HeaderContext'

import LoginForm from './components/LoginForm'
import HomePage from './components/HomePage'
import NotFound from './components/NotFound'
import ProtectedRoute from './components/ProtectedRoute'
import VideoDetailView from './components/VideoDetailView'
import savedVideosList from './components/SavedVideosList'
import TrendingVideos from './components/TrendingVideos'
import Games from './components/Games'

import './App.css'

class App extends Component {
  state = {
    isDarkMood: false,
    selectOption: 'HOME',
    savedVideos: [],
    showNavBar: false,
  }

  onChangeDarkMood = () => {
    this.setState(previousState => ({
      isDarkMood: !previousState.isDarkMood,
    }))
  }

  onChangeHeadingTopics = id => {
    this.setState({
      selectOption: id,
    })
  }

  onSaveVideos = dict => {
    const {savedVideos} = this.state

    // Check if the video is already saved
    const isVideoSaved = savedVideos.some(eachVideo => eachVideo.id === dict.id)

    if (isVideoSaved) {
      // Video is already saved, remove it
      const updatedSavedVideos = savedVideos.filter(
        eachVideo => eachVideo.id !== dict.id,
      )

      this.setState({
        savedVideos: updatedSavedVideos,
      })
    } else {
      // Video is not saved, add it
      this.setState({
        savedVideos: [...savedVideos, dict],
      })
    }
  }

  render() {
    const {isDarkMood, selectOption, savedVideos, showNavBar} = this.state
    return (
      <HeaderContext.Provider
        value={{
          isDarkMood,
          onChangeDarkMood: this.onChangeDarkMood,
          selectOption,
          onChangeHeadingTopics: this.onChangeHeadingTopics,
          onSaveVideos: this.onSaveVideos,
          savedVideos,
          showNavBar,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginForm} />
          <ProtectedRoute exact path="/" component={HomePage} />
          <ProtectedRoute
            exact
            path="/saved-videos"
            component={savedVideosList}
          />
          <ProtectedRoute exact path="/gaming" component={Games} />
          <ProtectedRoute
            exact
            path="/videos/trending"
            component={TrendingVideos}
          />
          <ProtectedRoute
            exact
            path="/videos/:id"
            component={VideoDetailView}
          />
          <Route path="/not-found" component={NotFound} />
          <Redirect to="not-found" />
        </Switch>
      </HeaderContext.Provider>
    )
  }
}

export default App
