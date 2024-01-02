import React from 'react'

const HeaderContext = React.createContext({
  isDarkMood: false,
  onChangeDarkMood: () => {},
  selectOption: 'HOME',
  onChangeHeadingTopics: () => {},
  savedVideos: [],
  onSaveVideos: () => {},
  showNavBar: false,
  showNavBarFunction: () => {},
})

export default HeaderContext
