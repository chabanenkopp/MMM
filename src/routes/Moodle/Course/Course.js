import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'Theme'
import { PATHS, COLORS } from 'constant'
import { transformPath, getCourseData, pxToRem } from 'helpers'
import { Text } from 'components/atoms/Typography'
import { Box, Flex } from 'components/atoms/Layout'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'
import ImageLink from 'components/atoms/ImageLink'
import listItem from 'assets/images/list-item.svg'
import returnIcon from 'assets/images/return.svg'
import Materials from './Materials'
import { DATA } from '../data'

const { MOODLE } = PATHS

const StyledUL = styled.ul`
  text-indent: -1em;
  list-style: inside url(${listItem});
`
const StyledLI = styled.li`
  margin-top: ${space.m};
`

const ListItems = ({ courses, onClick, type }) => (
  <StyledUL>
    {courses.map(({ id, title }) => (
      <StyledLI key={id}>
        <Text
          onClick={() => onClick(`${MOODLE}/${transformPath(type)}-${id}`)}
          display="contents"
          color={COLORS.MAJOLICA_BLUE}
          fontSize={['xs', 's', 'm']}
          fontWeight="thin"
        >
          {title}
        </Text>
      </StyledLI>
    ))}
  </StyledUL>
)

ListItems.propTypes = {
  courses: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

const Course = ({ id }) => {
  const { allCourses, courseId } = getCourseData(DATA, id)
  return (
    <Flex flexDirection="column" maxWidth={pxToRem(800)} m="0 auto" px="m">
      {allCourses.map(({ title, content, ...rest }) => {
        if (rest.id === courseId) {
          return (
            <Box key={title}>
              <Text key={title} fontSize="xl" color="black" mt="xl" ml="s">
                {title}
              </Text>
              <Box mt="l" ml="s">
                <ImageLink
                  img={returnIcon}
                  maxHeight={pxToRem(30)}
                  to={MOODLE}
                />
              </Box>
              {content.map(({ week, links }) => (
                <Box mt="l" key={week}>
                  <UnfoldTextBar
                    title={week}
                    component={<Materials links={links} />}
                  />
                </Box>
              ))}
            </Box>
          )
        }
        return null
      })}
    </Flex>
  )
}

Course.propTypes = {
  id: PropTypes.string.isRequired,
}

export default Course
