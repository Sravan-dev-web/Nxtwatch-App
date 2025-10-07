import {Link} from 'react-router-dom'

import {FaMoon} from 'react-icons/fa'

import {GoLightBulb} from 'react-icons/go'

import {IoMenu} from 'react-icons/io5'

import ThemeContext from '../../context/ThemeContext'

import PopupDesign from '../PopupDesign'
import PopupDesignForMobile from '../PopupDesignForMobile'
import {
  NavDesktopContainer,
  NavBarDesktopContent,
  WebsiteLogo,
  OptionsContainer,
  ThemeButton,
  Profile,
  MenuOptionsContainer,
  MobileMenuOptions,
} from './styledComponents'

import './index.css'

const Header = () => (
  <ThemeContext.Consumer>
    {value => {
      const {isDarkTheme, toggleTheme} = value
      const onToggleTheme = () => {
        toggleTheme()
      }

      const websiteLogo = isDarkTheme
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'

      return (
        <NavDesktopContainer darkMode={isDarkTheme}>
          <NavBarDesktopContent>
            <Link to="/">
              <WebsiteLogo src={websiteLogo} alt="website logo" />
            </Link>
            <MenuOptionsContainer>
              <MobileMenuOptions>
                <ThemeButton
                  type="button"
                  data-testid="theme"
                  onClick={onToggleTheme}
                >
                  {isDarkTheme ? (
                    <GoLightBulb color="white" size={18} />
                  ) : (
                    <FaMoon size={18} />
                  )}
                </ThemeButton>
                {isDarkTheme ? (
                  <IoMenu className="io-menu-icon" color="white" size={28} />
                ) : (
                  <IoMenu className="io-menu-icon" size={28} />
                )}
                <PopupDesignForMobile />
              </MobileMenuOptions>
            </MenuOptionsContainer>
            <OptionsContainer className="options-container">
              <ThemeButton
                type="button"
                data-testid="theme"
                onClick={onToggleTheme}
              >
                {isDarkTheme ? (
                  <GoLightBulb color="white" size={20} />
                ) : (
                  <FaMoon size={18} />
                )}
              </ThemeButton>
              <Profile
                className="profile-image"
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                alt="profile"
              />
              <br />
              <PopupDesign />
            </OptionsContainer>
          </NavBarDesktopContent>
        </NavDesktopContainer>
      )
    }}
  </ThemeContext.Consumer>
)

export default Header
