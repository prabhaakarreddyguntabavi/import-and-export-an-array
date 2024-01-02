import styled from 'styled-components/macro'

export const VideoBodyContainer = styled.div`
  background-color: ${props => (!props.isDarkMood ? '#000000' : '#f9f9f9')};
  width: 80vw;
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
  display: flex;
  flex-direction: column;

  margin: 10px;
`

export const VideoPageDiv = styled.div`
  display: flex;
  padding-left: 20px;
  margin-right: 20px;
  background-color: ${props => (!props.isDarkMood ? '#000000' : '#f9f9f9')};
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
export const VideoText = styled.div`
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
export const VideoParagraph = styled.p`
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
export const VideoButton = styled.button`
  border-width: 0px;
  background-color: transparent;
  color: ${props => (props.idDiLikedVideo ? '#2563eb' : '#64748b')};
`
export const LikedVideoButton = styled.button`
  color: ${props => (props.idLikedVideo ? '#2563eb' : '#64748b')};
  border-width: 0px;
  background-color: transparent;
`
export const IsSavedVideoButton = styled.button`
  color: ${props => (props.isVideoSaved ? '#2563eb' : '#64748b')};
  border-width: 0px;
  background-color: transparent;
`
