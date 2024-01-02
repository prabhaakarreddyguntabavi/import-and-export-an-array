import styled from 'styled-components/macro'

export const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background-color: ${props => (!props.isDarkMood ? '#1e293b' : '#ffffff')};
  width: 20vw;
  height: 95vh;
`

export const HomeUnOrderList = styled.ul`
  padding-left: 0px;
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-right: auto;
  justify-content: flex-start;
  width: 100%;
  margin-top: 30px;
`
export const HomeListItems = styled.button`
  display: flex;
  justify-content: flex-start;
  list-style: none;
  align-items: center;
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.isDarkMood ? '#0f0f0f' : '#ffffff')};
`
export const SocialMedia = styled.ul`
  display: flex;
  margin-right: 30px;
  list-style: none;
`

export const SocialMediaContainer = styled.div`
  margin-bottom: 10px;
`
export const ContactUsHeading = styled.p`
  font-size: 20px;
`
export const HomeNavList = styled.li`
  list-style: none;
  width: 100%;
`
export const HomeParagraph = styled.p`
  text-decoration: none !important;
  color: ${props => (props.isDarkMood ? '#0f0f0f' : '#ffffff')};
`
