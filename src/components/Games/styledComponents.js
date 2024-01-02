import styled from 'styled-components/macro'

export const BodyContainer = styled.div`
  background-color: ${props => (!props.isDarkMood ? '#000000' : '#f9f9f9')};
  width: 80vw;
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`

export const HomePageDiv = styled.div`
  display: flex;
  padding-left: 20px;
  margin-right: 20px;
  background-color: ${props => (!props.isDarkMood ? '#000000' : '#f9f9f9')};
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
export const AddContainer = styled.div`
  display: ${props => (props.idAddClosed ? 'none' : 'flex')};
  flex-direction: row;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  background-size: cover;
  padding-left: 20px;
  justify-content: space-between;
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
export const VideoText = styled.div`
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
export const VideoParagraph = styled.p`
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
