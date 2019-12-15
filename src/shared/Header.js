import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { HamburgerButton } from 'react-hamburger-button'
import { COLORS } from 'constant'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'

const HeaderFixedBox = styled(Flex)`
  z-index: 1;
`

const HamburgerContainer = styled(Box)`
  position: fixed;
  z-index: 1;
  right: 0;
`

const Header = ({
  isVisible,
  onMobileMenuButtonClick,
  login,
  mobileMenuComp: MobileMenuComp,
}) => {
  return (
    <Box minHeight={pxToRem(80)} zIndex="1">
      <HeaderFixedBox
        justifyContent="space-between"
        flex="none"
        alignItems="center"
        position="fixed"
        height={pxToRem(80)}
        width="100%"
        bg={transparentize(0.2, COLORS.DEUTUZIA_WHITE)}
      >
        <Text fontSize="xl" color={COLORS.PERCEPTIBLE_AT_A_GLANCE} ml="l">
          {login}
        </Text>
        <HamburgerContainer mr="l">
          <HamburgerButton
            open={isVisible}
            onClick={onMobileMenuButtonClick}
            width={20}
            height={15}
            strokeWidth={2}
            color={COLORS.PERCEPTIBLE_AT_A_GLANCE}
            animationDuration={0.6}
          />
        </HamburgerContainer>
        {MobileMenuComp}
      </HeaderFixedBox>
    </Box>
  )
}

Header.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  login: PropTypes.string.isRequired,
  onMobileMenuButtonClick: PropTypes.func.isRequired,
  mobileMenuComp: PropTypes.node.isRequired,
}

export default Header
