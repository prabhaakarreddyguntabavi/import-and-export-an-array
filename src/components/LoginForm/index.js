import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'

import HeaderContext from '../../context/HeaderContext'

import './index.css'

class LoginForm extends Component {
  state = {
    username: '',
    password: '',
    showSubmitError: false,
    errorMsg: '',
    checkBox: false,
  }

  onChangeUsername = event => {
    this.setState({username: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onChangeCheckBod = () => {
    this.setState(previousState => ({checkBox: !previousState.checkBox}))
  }

  onSubmitSuccess = jwtToken => {
    const {history} = this.props

    Cookies.set('jwt_token', jwtToken, {
      expires: 30,
    })
    history.replace('/')
  }

  onSubmitFailure = errorMsg => {
    this.setState({showSubmitError: true, errorMsg})
  }

  submitForm = async event => {
    event.preventDefault()
    const {username, password} = this.state
    const userDetails = {username, password}
    const url = 'https://apis.ccbp.in/login'
    const options = {
      method: 'POST',
      body: JSON.stringify(userDetails),
    }
    const response = await fetch(url, options)
    const data = await response.json()

    if (response.ok === true) {
      this.onSubmitSuccess(data.jwt_token)
    } else {
      this.onSubmitFailure(data.error_msg)
    }
  }

  renderPasswordField = () => {
    const {password, checkBox} = this.state

    return (
      <>
        <label className="input-label" htmlFor="password">
          PASSWORD
        </label>
        <input
          type={checkBox ? 'text' : 'password'}
          id="password"
          className="password-input-field"
          value={password}
          onChange={this.onChangePassword}
          placeholder="Password"
        />
      </>
    )
  }

  renderUsernameField = () => {
    const {username} = this.state

    return (
      <>
        <label className="input-label" htmlFor="username">
          USERNAME
        </label>
        <input
          type="text"
          id="username"
          className="username-input-field"
          value={username}
          onChange={this.onChangeUsername}
          placeholder="Username"
        />
      </>
    )
  }

  render() {
    const {showSubmitError, errorMsg, checkBox} = this.state
    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/login" />
    }
    return (
      <HeaderContext.Consumer>
        {value => {
          const {isDarkMood} = value
          return (
            <div className="login-form-container">
              <form className="form-container" onSubmit={this.submitForm}>
                <img
                  src={
                    isDarkMood
                      ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
                      : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
                  }
                  className="login-website-logo-desktop-img"
                  alt="website logo"
                />
                <div className="input-container">
                  {this.renderUsernameField()}
                </div>
                <div className="input-container">
                  {this.renderPasswordField()}
                </div>
                <div className="checkbox-container">
                  <input
                    type="checkbox"
                    id="checkBox"
                    name="vehicle1"
                    value={checkBox}
                    onChange={this.onChangeCheckBod}
                  />
                  <label htmlFor="checkBox"> Show Password</label>
                </div>
                <br />
                <button type="submit" className="login-button">
                  Login
                </button>
                {showSubmitError && (
                  <p className="error-message">*{errorMsg}</p>
                )}
              </form>
            </div>
          )
        }}
      </HeaderContext.Consumer>
    )
  }
}

export default LoginForm
