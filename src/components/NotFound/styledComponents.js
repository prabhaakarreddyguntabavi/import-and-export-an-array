import styled from 'styled-components/macro'

export const NotFoundDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 70vw;
  background-color: ${props => (props.isDarkMood ? '#ffffff' : '#000000')};
  color: ${props => (!props.isDarkMood ? '#ffffff' : '#000000')};
  @media screen and (max-width: 768px) {
    height: 100vh;
    width: 100vw;
  }
`
export const HomePageDiv = styled.div`
  display: flex;
  padding-left: 20px;
  margin-right: 20px;
  background-color: ${props => (!props.isDarkMood ? '#000000' : '#f9f9f9')};
  color: ${props => (props.isDarkMood ? '#000000' : '#ffffff')};
`
