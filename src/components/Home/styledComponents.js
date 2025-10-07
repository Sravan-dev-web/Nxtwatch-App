import styled from 'styled-components'

export const BgContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
  background-color: black;
`

export const HomeContainer = styled.div`
  background-color: ${props => (props.darkMode ? '#181818' : '#f9f9f9')};
  display: flex;
`
export const HomeContentContainer = styled.div`
  height: 100%;

  display: flex;
  flex-direction: column;
  padding: 0px;

  @media screen and (min-width: 767px) {
    width: 100%;
  }
`

export const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 88%;
  min-height: 80vh;
`

export const InputContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin-top: 13px;
  border-radius: 3px;
  padding-left: 12px;
  width: 100%;
  max-width: 400px;
`

export const InputBox = styled.input`
  font-family: Roboto;
  padding-left: 8px;
  border: 1px solid #94a3b8;
  height: 28px;
  outline: none;
  color: #606060;
  font-size: 12px;
  width: 230px;
  max-width: 300px;
`

export const Button = styled.button`
  border: 1px solid #94a3b8;
  background-color: #f1f5f9;
  border-left: none;
  height: 28px;
  width: 45px;
  cursor: pointer;
  color: #383838;
`

export const BannerContainer = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  background-size: cover;
  height: 240px;
  display: flex;
  width: 100%;
  flex-direction: column;
  padding: 15px;
  margin-top: 40px;
  padding-top: 40px;

  @media screen and (max-width: 576px) {
    padding-top: 32px;
  }
`
export const BannerLogo = styled.img`
  width: 100px;
`

export const BannerHeading = styled.p`
  width: 60%;
  font-size: 13px;
  font-weight: 500;
  color: #424242;
  margin-top: 13px;
`
export const BannerButton = styled.button`
  border: 2px solid #94a3b8;
  background-color: transparent;
  border-radius: 3px;
  height: 30px;
  width: 100px;
  cursor: pointer;
  font-size: 10px;
  font-weight: 600;
  color: #424242;
  border-color: #606060;
  margin-top: 12px;
`

export const CloseButton = styled.button`
  border: none;
  background-color: transparent;
  align-self: flex-end;
  height: 30px;
  width: 30px;
  cursor: pointer;

  @media screen and (min-width: 767px) {
    margin-top: 16px;
  }
`

export const FailureImage = styled.img`
  margin-top: 50px;
  width: 25%;
`
export const NoSearchResultsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 90vh;
  width: 100%;
`

export const NoResultsMsg = styled.h1`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`

export const Suggestion = styled.p`
  color: ${props => (!props.darkMode ? '#0f0f0f' : '#f9f9f9')};
`
export const RetryButtonInFailure = styled.button`
  background-color: #4f46e5;
  border: none;
  border-radius: 5px;
  color: #ffffff;
  height: 40px;
  width: 10%;
`
