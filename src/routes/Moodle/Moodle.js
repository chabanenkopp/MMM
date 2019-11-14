import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from 'constant'
import Header from 'shared/Header'

const GradientWrapper = styled.div`
  height: 100vh;
  width: 100%;
  background-color: ${COLORS.DEUTUZIA_WHITE};
`

const Moodle = ({ path }) => (
  <GradientWrapper height="100vh" width="100%">
    <Header path={path} />
  </GradientWrapper>
)

Moodle.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Moodle
