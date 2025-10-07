import {Link} from 'react-router-dom'
import './index.css'

import {
  VideoImage,
  DetailsContainer,
  Profile,
  AboutContainer,
  Title,
  ChannelNameViewCountAndPublishedStyling,
  DynamicDataContainer,
} from './styledComponents'

import ThemeContext from '../../context/ThemeContext'

const VideoItem = props => {
  const {eachMovieDetails} = props

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <li className="list-item">
            <Link
              to={`/videos/${eachMovieDetails.id}`}
              className="video-link-item"
            >
              <VideoImage
                src={eachMovieDetails.thumbnailUrl}
                alt="video thumbnail"
              />
              <DetailsContainer>
                <div className="image-container">
                  <Profile
                    src={eachMovieDetails.profileImageUrl}
                    alt="channel logo"
                  />
                </div>

                <AboutContainer>
                  <Title darkMode={isDarkTheme}>{eachMovieDetails.title}</Title>

                  <DynamicDataContainer>
                    <ChannelNameViewCountAndPublishedStyling>
                      {eachMovieDetails.channelName}
                    </ChannelNameViewCountAndPublishedStyling>
                    <ChannelNameViewCountAndPublishedStyling>
                      . {`${eachMovieDetails.viewCount} Views`}
                    </ChannelNameViewCountAndPublishedStyling>
                    <ChannelNameViewCountAndPublishedStyling>
                      . {eachMovieDetails.publishedAt}
                    </ChannelNameViewCountAndPublishedStyling>
                  </DynamicDataContainer>
                </AboutContainer>
              </DetailsContainer>
            </Link>
          </li>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default VideoItem
