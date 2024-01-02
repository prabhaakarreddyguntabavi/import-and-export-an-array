import styled from 'styled-components/macro'

export const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 5vh;
  background-color: ${props => (!props.isDarkMood ? '#1e293b' : '#fffff')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const MobileNavBar = styled.nav`
  display: none;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
  padding-right: 20px;
  height: 9vh;
  width: 100vw;
  background-color: ${props => (!props.isDarkMood ? '#1e293b' : '#ffffff')};
  color: ${props => (props.isDarkMood ? '#1e293b' : '#ffffff')};
  @media screen and (max-width: 768px) {
    display: flex;
  }
  @media screen and (max-width: 576px) {
    display: flex;
  }
`
export const PopupContainer = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  background-color: ${props => (!props.isDarkMood ? '#1e293b' : '#ffffff')};
  color: ${props => (props.isDarkMood ? '#1e293b' : '#ffffff')};
`
export const PopupMenuButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  color: ${props => (props.isDarkMood ? '#1e293b' : '#ffffff')};
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 50px;
  }
`
export const MobileNavBarContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
`
export const NavBarDarkLightButton = styled.button`
  background-color: transparent;
  border-width: 0px;
  width: 20px;
  height: 50px;
  margin-right: 10px;
  @media screen and (max-width: 768px) {
    width: 80px;
    height: 50px;
  }
`
export const NavBarDarkLightImage = styled.img`
  width: 60%;
  margin-right: 20px;
`
export const LogoutButton = styled.button`
  height: 30px;
  width: 70px;
  background-color: #3b82f6;
  color: ${props => (props.isDarkMood ? '#3b82f6' : '#ffffff')};
  border: 1px solid ${props => (props.isDarkMood ? '#3b82f6' : '#ffffff')};
  @media screen and (max-width: 768px) {
    color: ${props => (props.isDarkMood ? '#000' : '#ffffff')};
    border-width: 0px;
    background-color: transparent;
    width: 80px;
    height: 50px;
  }
`
