import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { radius } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS } from 'constant'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'

const Table = styled(Flex)`
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  border-bottom-left-radius: ${radius.l};
  border-bottom-right-radius: ${radius.l};
  box-shadow: rgba(0, 0, 0, 0.08) 0px 20px 40px 5px;
`

const Row = styled(Flex)`
  width: 100%;
  padding-top: ${pxToRem(10)};
  padding-bottom: ${pxToRem(10)};
  padding-right: ${pxToRem(20)};
  padding-left: ${pxToRem(20)};
  ${({ lastElement }) =>
    lastElement &&
    `border-bottom-left-radius: ${radius.l};
     border-bottom-right-radius: ${radius.l};
    `}
    color: ${COLORS.LEAD};
  ${({ firstElement }) =>
    firstElement &&
    `border-top-left-radius: ${radius.l};
     border-top-right-radius: ${radius.l};
    `}
    color: ${COLORS.LEAD};
`

const TableLesson = ({ start, end, description }) => {
  const { main, area, teacher, groups, type, additional } = description
  return (
    <Box px="m">
      <Table
        width={[pxToRem(320), 'unset', pxToRem(420)]}
        maxWidth={pxToRem(400)}
      >
        <Row firstElement bg={transparentize(0.1, COLORS.WHITE)}>
          <Box minWidth="30%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              Time:
            </Text>
          </Box>
          <Box minWidth="70%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              {`${start}-${end}`}
            </Text>
          </Box>
        </Row>
        <Row bg={transparentize(0.3, COLORS.WHITE)}>
          <Box minWidth="30%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              Lesson:
            </Text>
          </Box>
          <Box minWidth="70%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              {main}
            </Text>
          </Box>
        </Row>
        <Row bg={transparentize(0.1, COLORS.WHITE)}>
          <Box minWidth="30%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              Type:
            </Text>
          </Box>
          <Box minWidth="70%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              {type}
            </Text>
          </Box>
        </Row>
        <Row bg={transparentize(0.3, COLORS.WHITE)}>
          <Box minWidth="30%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              Place:
            </Text>
          </Box>
          <Box minWidth="70%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              {area}
            </Text>
          </Box>
        </Row>
        <Row bg={transparentize(0.1, COLORS.WHITE)}>
          <Box minWidth="30%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              Teacher:
            </Text>
          </Box>
          <Box minWidth="70%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              {teacher}
            </Text>
          </Box>
        </Row>
        <Row bg={transparentize(0.3, COLORS.WHITE)}>
          <Box minWidth="30%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              Groups:
            </Text>
          </Box>
          <Box minWidth="70%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              {groups}
            </Text>
          </Box>
        </Row>
        <Row lastElement bg={transparentize(0.1, COLORS.WHITE)}>
          <Box minWidth="30%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              Additional:
            </Text>
          </Box>
          <Box minWidth="70%">
            <Text fontSize={['xs', 's', 'm']} color={COLORS.LEAD}>
              {additional}
            </Text>
          </Box>
        </Row>
      </Table>
    </Box>
  )
}

TableLesson.propTypes = {
  start: PropTypes.string,
  end: PropTypes.string,
  description: PropTypes.object,
}

export default TableLesson
