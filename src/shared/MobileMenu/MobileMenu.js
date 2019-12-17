import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link as ReactLink } from 'react-router-dom'
import { fontWeights, getTransition } from 'Theme'
import { COLORS, PATHS } from 'constant'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import Link from 'components/atoms/Link'
import withAuthService from 'hoc/withAuthService'
import compose from 'utils'

const { MAIS } = PATHS

const MobileMenuContainer = styled(Box)`
  background-color: ${COLORS.WHITE};
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  will-change: transform;
  overflow-y: auto;
  opacity: 0;
  transition: ${getTransition('transform')}, ${getTransition('opacity')};
  ${({ isVisible }) =>
    isVisible
      ? 'transform: translateX(0%); opacity: 1'
      : 'transform: translateX(100%); opacity: 0'};
`

const MobileMenu = ({ isVisible, onClick, destroySession }) => {
  return (
    <React.Fragment>
      <MobileMenuContainer isVisible={isVisible}>
        <Box height="100%">
          <Flex flexDirection="column" pt="xl" px="m">
            <Box pt={pxToRem(50)} ml="l">
              <Link
                to={MAIS}
                onClick={() => {
                  onClick()
                  destroySession()
                }}
                as={ReactLink}
                fontSize="xxxl"
                fontWeight={`${fontWeights.thin} !important`}
                px="l"
                py="m"
              >
                <Text fontSize="xxl">LOGOUT</Text>
              </Link>
            </Box>
          </Flex>
        </Box>
      </MobileMenuContainer>
    </React.Fragment>
  )
}

MobileMenu.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClick: PropTypes.func,
  destroySession: PropTypes.func.isRequired,
}

export default compose(withAuthService)(MobileMenu)
