import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { transparentize } from 'polished'
import { Box } from 'components/atoms/Layout'
import { COLORS } from 'constant'
import { getTransition } from 'Theme'

const Overlay = styled(Box)`
  z-index: 1;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  visibility: hidden;
  ${({ isVisible }) => isVisible && `opacity: 1; visibility: visible;`};
  transition: ${getTransition('opacity')}, ${getTransition('visibility')};
  background-color: ${transparentize(0.35, COLORS.POT_BLACK)};
`

const SliderOverlay = ({ isVisible, onClick }) => (
  <Overlay isVisible={isVisible} onClick={onClick} />
)

SliderOverlay.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Overlay
