import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transparentize } from 'polished'
import ReactLink from 'components/atoms/Link'
import { COLORS, PATHS } from 'constant'
import { pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'

const BorderBottom = styled(Flex)`
  flex: 1;
  justify-content: center;
  align-items: center;
  height: ${pxToRem(50)};
  border-radius: ${pxToRem(40)};
  ${({ targetPath, currentPath }) =>
    targetPath === currentPath
      ? `background-color: ${COLORS.PERCEPTIBLE_AT_A_GLANCE};`
      : null}
`

const LinksContainer = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  z-index: 1;
  width: 90%;
  height: ${pxToRem(50)};
  margin: 0 auto;
  /* margin-top: ${pxToRem(10)}; */
  margin-bottom: 15px;
  border-radius: ${pxToRem(40)};
  background-color: ${transparentize(
    0.05,
    COLORS.PERCEPTIBLE_THROUGH_CLOSE_OBSERVATION
  )};
`

const { MOODLE, MAIL, MAIS } = PATHS

const BottomNavbar = ({ path }) => {
  return (
    <Box position="absolute" width="100%" bottom="6.8%" zIndex="1">
      <Box
        flex="none"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        zIndex="2"
        height={pxToRem(90)}
        width="100%"
        bg={COLORS.DEUTUZIA_WHITE}
      >
        <LinksContainer>
          <BorderBottom targetPath={MAIS} currentPath={path}>
            <ReactLink to={MAIS}>
              <Text
                fontSize="xl"
                fontWeight="semi_bold"
                color={COLORS.WHITE}
                px="l"
                py="m"
              >
                Mais
              </Text>
            </ReactLink>
          </BorderBottom>
          <BorderBottom targetPath={MOODLE} currentPath={path}>
            <ReactLink to={MOODLE}>
              <Text
                fontSize="xl"
                fontWeight="semi_bold"
                color={COLORS.WHITE}
                px="l"
                py="m"
              >
                Moodle
              </Text>
            </ReactLink>
          </BorderBottom>
          <BorderBottom targetPath={MAIL} currentPath={path}>
            <ReactLink to={MAIL}>
              <Text
                fontSize="xl"
                fontWeight="semi_bold"
                color={COLORS.WHITE}
                px="l"
                py="m"
              >
                Mail
              </Text>
            </ReactLink>
          </BorderBottom>
        </LinksContainer>
      </Box>
    </Box>
  )
}

BottomNavbar.propTypes = {
  path: PropTypes.string.isRequired,
}

export default BottomNavbar
