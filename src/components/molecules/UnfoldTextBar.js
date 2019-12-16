import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { COLORS } from 'constant'
import { theme, radius, space, getTransition } from 'Theme'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Transition from 'components/atoms/Transition'
import arrow from 'assets/images/list-item.svg'

const TRANSITION_TIMEOUT = 150

const getShadow = (color, isVisible) =>
  color && isVisible && `box-shadow: rgba(0,0,0,0.08) 0px 20px 40px 5px;`

const ButtonLong = styled(Box)`
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  min-width: ${pxToRem(300)};
  border-radius: ${radius.xl};
  padding: ${theme.space.m};
  background-color: ${COLORS.WHITE};
  font-weight: ${theme.fontWeights.bold};
  text-decoration: none;
  ${({ color, borderColor, isShadow, borderRadius }) => `
    border: 1.5px solid ${borderColor};
    color: ${color};
    border-radius: ${borderRadius}
    ${getShadow(COLORS.ANCHORMAN, isShadow)}}
  `}
    :focus {
    outline: 0;
  }
`

ButtonLong.propTypes = {
  color: PropTypes.string,
  borderColor: PropTypes.string,
  isShadow: PropTypes.bool,
  borderRadius: PropTypes.string,
}

const StyledBox = styled.img`
  height: 20px;
  margin-right: ${space.m};
  transition: transform 0.5s;
  transform: ${({ isClicked }) =>
    isClicked ? `rotate(90deg)` : `rotate(270deg)`};
`

const TitleWrapper = styled(Box)`
  border-radius: ${radius.xl};
  background-color: ${COLORS.COTTON_BALL};
`

const FoldedWrapper = styled(Box)`
  opacity: 0;
  transition: ${getTransition('opacity')};
  ${({ state }) =>
    state === Transition.STATE.ENTERING ||
    (state === Transition.STATE.ENTERED && `opacity: 1;`)}
`

const UnfoldTextBar = ({
  title,
  component: List,
  titleComponent: TitleComponent,
}) => {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <Flex flexDirection="column">
      <ButtonLong
        onClick={() => setIsClicked(!isClicked)}
        color={COLORS.ANCHORMAN}
        borderColor={COLORS.WHITE}
        isShadow
      >
        <TitleWrapper mx="m" p="s">
          {TitleComponent ? (
            <TitleComponent />
          ) : (
            <Text fontSize={['xs', 'm', 'xl']} fontWeight="semi_bold">
              {title}
            </Text>
          )}
        </TitleWrapper>
        <StyledBox src={arrow} isClicked={isClicked} />
      </ButtonLong>
      <Transition
        in={isClicked}
        timeout={TRANSITION_TIMEOUT}
        mountOnEnter
        unmountOnExit
      >
        {(state) => (
          <FoldedWrapper state={state} py="l" px="s">
            {List}
          </FoldedWrapper>
        )}
      </Transition>
    </Flex>
  )
}

UnfoldTextBar.propTypes = {
  component: PropTypes.node.isRequired,
  titleComponent: PropTypes.node,
  title: PropTypes.string,
}

export default UnfoldTextBar
