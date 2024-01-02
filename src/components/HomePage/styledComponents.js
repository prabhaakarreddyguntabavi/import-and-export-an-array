import styled from 'styled-components/macro'

export const BodyContainer = styled.div`
  background-color: ${props => (!props.isDarkMood ? '#000000' : '#f9f9f9')};
  width: 80vw;
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
  @media screen and (max-width: 768px) {
    width: 100vw;
    margin-top: 10px;
  }
`

export const HomePageDiv = styled.div`
  display: flex;
  background-color: ${props => (!props.isDarkMood ? '#000000' : '#f9f9f9')};
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')} !important;
`
export const AddContainer = styled.div`
  display: ${props => (props.idAddClosed ? 'none' : 'flex')};
  flex-direction: row;
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  height: 30vh;
  width: 100%;
  background-size: cover;
  padding-left: 20px;
  justify-content: space-between;
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')} !important;
  @media screen and (max-width: 768px) {
    height: 25vh;
    padding-left: 10px;
    width: 95vw;
  }
`
export const VideoText = styled.div`
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')} !important;
  display: flex;
  width: 100%;
`
export const VideoParagraph = styled.p`
  font-weight: bold;
  width: 80%;
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')} !important;
  font-size: 10px;
  @media screen and (max-width: 768px) {
    // display: none;
  }
`
export const BannerContainer = styled.div`
  width: 100%;
`

export const BannerImage = styled.img`
  margin-top: 30px;
  width: 30%;
  height: 40px;
  @media screen and (max-width: 576px) {
    width: 100%;
    height: 50px;
    margin-top: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 25%;
    height: 20px;
    margin-top: 10px;
  }
`
export const BannerText = styled.p`
  color: #000000;
  @media screen and (max-width: 768px) {
    font-size: 10px;
  }
`

export const BannerButton = styled.button`
  width: 120px;
  height: 40px;
  background-color: transparent;
  @media screen and (max-width: 768px) {
    width: 90px;
    height: 30px;
    font-size: 10px;
  }
`

export const BannerClosingButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  margin-top: 20px;
  margin-right: 20px;
  margin-bottom: auto;
  color: #000000;
  @media screen and (max-width: 768px) {
    margin-top: 5px;
    margin-right: 5px;
  }
`
export const SearchInputContainer = styled.div`
  display: flex;
  @media screen and (max-width: 576px) {
    width: 100vw;
  }
  @media screen and (max-width: 768px) {
    width: 95vw;
  }
`

export const SearchInput = styled.input`
  width: 30%;
  height: 30px;
  background-color: white;
  border: 1px solid #ebebeb;
  margin-top: 20px;
  margin-left: 20px;
  border: 1px solid #e2e8f0;
  color: ${props => (!props.isDarkMood ? '#000000' : '#ffffff')};
  @media screen and (max-width: 576px) {
    width: 90vw;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 70%;
    margin-bottom: 10px;
  }
`

export const SearchButton = styled.div`
  width: 5%;
  background-color: #ebebeb;
  height: 30px;
  padding: 5px;
  margin-top: 20px;
  color: #000000;
  @media screen and (max-width: 576px) {
    width: 10%;
    margin-bottom: 10px;
  }
  @media screen and (max-width: 768px) {
    width: 10%;
    margin-bottom: 10px;
  }
`

export const HomeUnOrderList = styled.div`
  display: flex;
  flex-wrap: wrap;
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')} !important;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
`

export const EachVideoList = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5px;
  width: 18vw;
  @media screen and (max-width: 768px) {
    width: 95%;
    height: 35vh;
  }
  @media screen and (max-width: 826px) {
    width: 100%;
    height: 50vh;
  }
`

export const EachVideoImage = styled.img`
  width: 95%;
  @media screen and (max-width: 768px) {
    width: 95%;
    height: 40vh;
  }
`

export const ExchVideoChannelLogo = styled.img`
  width: 10%;
  height: 50%;
  margin: 10px;
`
export const EachVideoChannelTextContent = styled.div`
  width: 90%;
  color: ${props => (!props.isDarkMood ? '#000000' : '#ffffff')};
`

export const EachVideoChannelViewsContainer = styled.div`
  display: flex;
  font-size: 10px;
  color: ${props => (!props.isDarkMood ? '#000000' : '#ffffff')};
  align-items: center;
`

export const EachVideoViewsCount = styled.p`
  list-style: none;
  margin-right: 15px;
`

// export const EachVideoImage6 = styled.div``
// export const EachVideoImage5 = styled.div``
// export const EachVideoImage4 = styled.div``
// export const EachVideoImage3 = styled.div``
// export const EachVideoImage2 = styled.div``
// export const EachVideoImage1 = styled.div``
