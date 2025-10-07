import styled from 'styled-components'

export const VideoImage = styled.img`
  height: 160px;

  @media screen and (min-width: 767px) {
    height: 100px;
  }
`
export const DetailsContainer = styled.div`
  display: flex;

  justify-content: center;

  width: 300px;

  @media screen and (min-width: 767px) {
    width: 180px;
  }
`

export const Profile = styled.img`
    height: 30px;
    width: 30px:
    padding-top: 20px;
`
export const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;

  margin-left: 8px;
`
export const Title = styled.p`
  font-size: 12px;
  color: ${props => (props.darkMode ? '#94a3b8' : ' #313131')};
`

export const ChannelNameViewCountAndPublishedStyling = styled.p`
  font-size: 11px;
  color: #616e7c;
  margin-top: 0px;
  margin-right: 10px;
`

export const DynamicDataContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
