import styled from 'styled-components/macro'

export const SavedVideosContainer = styled.div`
  background-color: ${props => (!props.isDarkMood ? '#000000' : '#f9f9f9')};
  width: 80vw;
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`

export const VideosPageDiv = styled.div`
  display: flex;
  padding-left: 20px;
  margin-right: 20px;
  background-color: ${props => (!props.isDarkMood ? '#000000' : '#f9f9f9')};
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
export const EachSavedVideo = styled.li`
  display: flex;
  padding-left: 20px;
  margin-right: 20px;
  list-style: none;
  width: 100%;
  background-color: ${props => (!props.isDarkMood ? '#000000' : '#f9f9f9')};
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`

export const ListOfSavedVideos = styled.ul`
  display: flex;
  flex-direction: column;
  background-size: cover;
  padding-left: 20px;
  justify-content: space-between;
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
  flex-wrap: wrap;
`
export const VideoText = styled.div`
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
export const VideoParagraph = styled.p`
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
