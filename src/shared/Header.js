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
  height: ${pxToRem(80)};
  ${({ targetPath, currentPath }) =>
    targetPath === currentPath
      ? `border-bottom: 1px solid ${COLORS.WHITE};`
      : null}
    background-color: ${transparentize(0.05, COLORS.HIBISCUS_DELIGHT)};
`

const { MOODLE, MAIL, MAIS } = PATHS

const Header = ({ path }) => {
  return (
    <Box minHeight={pxToRem(80)} zIndex="1">
      <Flex
        flex="none"
        justifyContent="space-between"
        alignItems="center"
        position="fixed"
        zIndex="1"
        height={pxToRem(80)}
        width="100%"
      >
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
      </Flex>
    </Box>
  )
}

Header.propTypes = {
  path: PropTypes.string.isRequired,
}

export default Header
