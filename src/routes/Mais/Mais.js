import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from 'constant'
import BottomNavbar from 'shared/BottomNavbar'
import Header from 'shared/Header'
import MobileMenu from 'shared/MobileMenu'
import Timetables from './Timetables'

const GradientWrapper = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.DEUTUZIA_WHITE};
`

const Mais = ({ path, isSliderVisible, handleToggleMobileMenuClick }) => {
  const storage = window.localStorage
  const login = storage.getItem('login')
  return (
    <GradientWrapper>
      <Header
        isVisible={isSliderVisible}
        onMobileMenuButtonClick={handleToggleMobileMenuClick}
        login={login}
        path={path}
        mobileMenuComp={
          <MobileMenu
            pathName={path}
            isVisible={isSliderVisible}
            onClick={handleToggleMobileMenuClick}
          />
        }
      />
      <BottomNavbar path={path} />
      <Timetables />
    </GradientWrapper>
  )
}

Mais.propTypes = {
  path: PropTypes.string.isRequired,
  isSliderVisible: PropTypes.bool,
  handleToggleMobileMenuClick: PropTypes.func,
}

export default Mais
