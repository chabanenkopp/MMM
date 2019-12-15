import React from 'react'
import PropTypes from 'prop-types'
import { Link as ReactLink } from 'react-router-dom'
import styled from 'styled-components'
import { fontWeights, getTransition } from 'Theme'
import { COLORS, PATHS } from 'constant'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import ChangeColor from 'components/atoms/ChangeFontColorByPathName'
import Link from 'components/atoms/Link'

const { MAIS, MOODLE } = PATHS

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

const MobileMenu = ({ isVisible, onClick, pathName }) => {
  return (
    <React.Fragment>
      <MobileMenuContainer isVisible={isVisible}>
        <Box height="100%">
          <Flex flexDirection="column" pt="xl" px="m">
            <Box pt={pxToRem(50)} ml="l">
              <Link
                to={MAIS}
                onClick={() => onClick()}
                as={ReactLink}
                fontSize="xxxl"
                fontWeight={`${fontWeights.thin} !important`}
                px="l"
                py="m"
              >
                <Text fontSize="xxl">
                  <ChangeColor pathName={pathName} targetPath={MAIS}>
                    FUCK
                  </ChangeColor>
                </Text>
              </Link>
            </Box>
            <Box pt={pxToRem(50)} ml="l">
              <Link
                to={MOODLE}
                onClick={() => onClick()}
                as={ReactLink}
                fontSize="xxl"
                fontWeight={`${fontWeights.thin} !important`}
                px="l"
                py="m"
              >
                <Text fontSize="xxl">
                  <ChangeColor pathName={pathName} targetPath={MOODLE}>
                    SHIT
                  </ChangeColor>
                </Text>
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
  pathName: PropTypes.string,
  onClick: PropTypes.func,
}

export default MobileMenu
