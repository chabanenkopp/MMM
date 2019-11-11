import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from 'constant'
import Header from 'shared/Header'
import Timetables from './Timetables'

const GradientWrapper = styled.div`
  min-height: 100vh;
  background-image: linear-gradient(
    ${COLORS.MYTHICAL_ORANGE},
    ${COLORS.MELLOW_MELON}
  );
`

const Mais = ({ path }) => (
  <GradientWrapper>
    <Header path={path} />
    <Timetables />
  </GradientWrapper>
)

Mais.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Mais
