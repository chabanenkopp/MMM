import React from 'react'
import PropTypes from 'prop-types'
import { Transition as ReactTransition } from 'react-transition-group'

const TRANSITION_STATE = {
  ENTERING: 'entering',
  ENTERED: 'entered',
  EXITING: 'exiting',
  EXITED: 'exited',
}

// Hack from CSSTransitionGroup to animate newly mounted components
// when mountOnEnter or unmountOnExit is used
const forceOnEnterReflow = (node) => node && node.scrollTop

const Transition = ({ mountOnEnter, unmountOnExit, onEnter, ...props }) => (
  <ReactTransition
    mountOnEnter={mountOnEnter}
    unmountOnExit={unmountOnExit}
    onEnter={
      onEnter ||
      (mountOnEnter || unmountOnExit ? forceOnEnterReflow : undefined)
    }
    {...props}
  />
)

Transition.propTypes = {
  mountOnEnter: PropTypes.bool,
  unmountOnExit: PropTypes.bool,
  onEnter: PropTypes.func,
}

Transition.STATE = TRANSITION_STATE

export default Transition
