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
  border-radius: 0 0 ${radius.l} ${radius.l};
  box-shadow: 0 ${pxToRem(6)} ${pxToRem(28)} 0 rgba(24, 52, 117, 0.2);
`

const Row = styled(Flex)`
  padding: ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(10)} ${pxToRem(20)};
  ${({ lastElement }) =>
    lastElement &&
    `border-radius: 0 0 ${radius.l} ${radius.l}; padding-bottom: ${pxToRem(
      20
    )};`}
  ${({ firstElement }) =>
    firstElement &&
    `border-radius: ${radius.l} ${radius.l} 0 0; padding-top: ${pxToRem(
      20
    )};`}
  min-width: 100%;
  color: ${COLORS.LEAD};
  background-color: ${COLORS.WHITE};
`

const TableHeader = styled(Flex)`
  justify-content: space-around;
  min-width: 100%;
  border-bottom: 1px solid ${COLORS.GUIDING_STAR};
  padding-bottom: 10px;
`

const HeaderItemText = styled(Text)`
  padding: 8px;
  border-radius: 20px;
  background-color: #f7f3f3;
`

const TableLesson = ({ start, end, description }) => {
  const { main, area, teacher, groups, type, additional } = description
  return (
    <Box px="m">
      <Table
        width={[pxToRem(320), 'unset', pxToRem(400)]}
        maxWidth={pxToRem(400)}
      >
        <Row firstElement>
          <TableHeader>
            <HeaderItemText
              color={COLORS.CIRPERCEPTIBLE_THROUGH_CLOSE_OBSERVATIONCUS}
              fontWeight="bold"
            >
              {`${start}-${end}`}
            </HeaderItemText>
            <HeaderItemText
              color={COLORS.PERCEPTIBLE_THROUGH_CLOSE_OBSERVATION}
              fontWeight="bold"
            >
              {type}
            </HeaderItemText>
            <HeaderItemText
              color={COLORS.PERCEPTIBLE_THROUGH_CLOSE_OBSERVATION}
              fontWeight="bold"
            >
              {area}
            </HeaderItemText>
          </TableHeader>
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
