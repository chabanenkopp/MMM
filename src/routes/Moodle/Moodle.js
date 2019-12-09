import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from 'constant'
import Header from 'shared/Header'
import CourseList from './CourseList'

const GradientWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${COLORS.DEUTUZIA_WHITE};
`

const Moodle = ({ path }) => {
  return (
    <GradientWrapper>
      <Header path={path} />
      <CourseList />
    </GradientWrapper>
  )
}

Moodle.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Moodle
