import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { disableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock'
import { transparentize } from 'polished'
import { Box, Flex } from 'components/atoms/Layout'
import { COLORS } from 'constant'
import { fontWeights, radius, getTransition } from 'Theme'
import { pxToRem } from 'helpers'
import Button from 'components/atoms/Button'
import Transition from 'components/atoms/Transition'
import iconClose from 'assets/images/icon-close-white.svg'

const TRANSITION_TIMEOUT = 300

const Overlay = styled(Flex)`
  justify-content: center;
  align-items: center;
  position: fixed;
  overflow: scroll;
  width: 100%;
  height: 100%;
  z-index: 1;
  top: 0;
  background-color: ${transparentize(0.35, COLORS.POT_BLACK)};
  opacity: 0;
  transition: ${getTransition('opacity')};
  ${({ state }) =>
    state === Transition.STATE.ENTERING ||
    (state === Transition.STATE.ENTERED && `opacity: 1;`)}
`

const CloseModalCircle = styled(Box)`
  cursor: pointer;
  border-radius: ${radius.pill};
  width: ${pxToRem(30)};
  height: ${pxToRem(30)};
  background-color: ${COLORS.GREY_OF_DARKNESS};
  line-height: ${pxToRem(28)};
  text-align: center;
  margin-left: 96.7%;
  margin-top: -3%;
`

const CloseModalIcon = styled.img`
  height: ${pxToRem(14)};
`

const ModalContainer = styled(Box)`
  border-radius: ${radius.l};
`

const Modal = ({ onClose, onClick, isVisible, title, body, buttonLabel }) => {
  const targetRef = React.createRef()
  if (isVisible) {
    disableBodyScroll(targetRef)
  } else {
    clearAllBodyScrollLocks()
  }
  return (
    <Transition
      in={isVisible}
      timeout={TRANSITION_TIMEOUT}
      mountOnEnter
      unmountOnExit
    >
      {(state) => (
        <Overlay state={state}>
          <ModalContainer
            ref={targetRef}
            bg={COLORS.WHITE}
            width={[pxToRem(370), pxToRem(420), pxToRem(480)]}
            mt="50px"
          >
            <CloseModalCircle onClick={onClose}>
              <CloseModalIcon src={iconClose} alt="closeModal" />
            </CloseModalCircle>
            <Flex flexDirection="column" py="l" px="l" justifyContent="center">
              <Box mb="l">{title}</Box>
              <Box
                width={pxToRem(120)}
                height={pxToRem(3)}
                bg={COLORS.AMERICAN_PINK}
                m="0 auto"
              />
              <Box my="l">{body}</Box>
              <Button.Filled
                onClick={onClick}
                gradientFromColor={COLORS.FLAX_FLOWER_BLUE}
                gradientToColor={COLORS.ATHENA_BLUE}
                borderRadius={radius.pill}
                isShadow
                fontWeight={fontWeights.bold}
                fontSize="s"
                mb="m"
              >
                {buttonLabel}
              </Button.Filled>
            </Flex>
          </ModalContainer>
        </Overlay>
      )}
    </Transition>
  )
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  isVisible: PropTypes.bool.isRequired,
  title: PropTypes.node.isRequired,
  body: PropTypes.node.isRequired,
  buttonLabel: PropTypes.string.isRequired,
}

export default Modal
