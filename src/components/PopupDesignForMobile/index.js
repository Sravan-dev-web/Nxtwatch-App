import Popup from 'reactjs-popup'
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

import {BiArrowToRight} from 'react-icons/bi'

import ThemeContext from '../../context/ThemeContext'

import {
  PopupContainer,
  ModalContainer,
  PopupButton,
  ButtonsContainer,
  WarningMessage,
  MobileLogoutButton,
} from './styledComponents'

import 'reactjs-popup/dist/index.css'

const PopupDesignForMobile = props => {
  const onLogoutClicked = () => {
    const {history} = props
    Cookies.remove('jwt_token')

    history.replace('/login')
  }

  return (
    <ThemeContext.Consumer>
      {value => {
        const {isDarkTheme} = value
        return (
          <PopupContainer>
            <Popup
              modal
              trigger={
                <MobileLogoutButton>
                  {isDarkTheme ? (
                    <BiArrowToRight color="white" size={20} />
                  ) : (
                    <BiArrowToRight size={20} />
                  )}
                </MobileLogoutButton>
              }
            >
              {close => (
                <ModalContainer darkMode={isDarkTheme}>
                  <WarningMessage darkMode={isDarkTheme}>
                    Are you sure, you want to logout
                  </WarningMessage>
                  <ButtonsContainer>
                    <PopupButton type="button" outline onClick={() => close()}>
                      Cancel
                    </PopupButton>
                    <PopupButton type="button" onClick={onLogoutClicked}>
                      Confirm
                    </PopupButton>
                  </ButtonsContainer>
                </ModalContainer>
              )}
            </Popup>
          </PopupContainer>
        )
      }}
    </ThemeContext.Consumer>
  )
}

export default withRouter(PopupDesignForMobile)
