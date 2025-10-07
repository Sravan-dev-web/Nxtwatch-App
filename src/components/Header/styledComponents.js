import styled from 'styled-components'

export const NavDesktopContainer = styled.nav`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 60px;
  padding: 15px;
  background-color: ${props => (props.darkMode ? '#181818' : '#ffffff')};
  color: ${props => (!props.darkMode ? '#181818' : '#ffffff')};
  position: fixed;
  width: 100%;
`
export const NavBarDesktopContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 98%;
`

export const MenuOptionsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: 767px) {
    display: none;
  }
`

export const MobileMenuOptions = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`

export const WebsiteLogo = styled.img`
  width: 40%;
`
export const OptionsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 18%;
  height: 50px;

  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ThemeButton = styled.button`
  background-color: transparent;
  border: 0px;
  cursor: pointer;
  margin-right: 6px;
`

export const Profile = styled.img`
  width: 15%;
  margin-right: 12px;
  height: 23px;
`

export const ThemeLogo = styled.img`
  width: 30%;
`
