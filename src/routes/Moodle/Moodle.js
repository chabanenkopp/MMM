import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from 'constant'
import BottomNavbar from 'shared/BottomNavbar'
import MobileMenu from 'shared/MobileMenu'
import Header from 'shared/Header'
import CourseList from './CourseList'

const GradientWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${COLORS.DEUTUZIA_WHITE};
`

const Moodle = ({ path, isSliderVisible, handleToggleMobileMenuClick }) => {
  const storage = window.localStorage
  const login = storage.getItem('login')
  return (
    <GradientWrapper>
      <Header
        isVisible={isSliderVisible}
        onMobileMenuButtonClick={handleToggleMobileMenuClick}
        login={login}
        mobileMenuComp={
          <MobileMenu
            isVisible={isSliderVisible}
            onClick={handleToggleMobileMenuClick}
          />
        }
      />
      <BottomNavbar path={path} />
      <CourseList />
    </GradientWrapper>
  )
}

Moodle.propTypes = {
  path: PropTypes.string.isRequired,
  isSliderVisible: PropTypes.bool,
  handleToggleMobileMenuClick: PropTypes.func,
}

export default Moodle
