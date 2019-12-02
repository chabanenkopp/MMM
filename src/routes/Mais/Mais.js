import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from 'constant'
import Header from 'shared/Header'
import Timetables from './Timetables'
// import ProgramModal from './ProgramModal'

const GradientWrapper = styled.div`
  min-height: 100vh;
  background-color: ${COLORS.DEUTUZIA_WHITE};
`

const Mais = ({ path }) => (
  <GradientWrapper>
    <Header path={path} />
    <Timetables />
    {/* <ProgramModal onClose={() => {}} isModalOpen /> */}
  </GradientWrapper>
)

Mais.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Mais
