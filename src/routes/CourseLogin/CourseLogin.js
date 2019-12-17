import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'Theme'
import { COLORS, PATHS } from 'constant'
import { getCourseData, pxToRem } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { DATA } from 'routes/Moodle/data'
import ImageLink from 'components/atoms/ImageLink'
import returnIcon from 'assets/images/return.svg'
import LoginForm from './LoginForm'

const { MOODLE } = PATHS

const GradientWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${COLORS.DEUTUZIA_WHITE};
`

const CourseDataBlock = styled.div`
  margin-top: ${space.l};
  padding: ${space.l} ${space.m} ${space.l} ${space.m};
  border-radius: ${pxToRem(20)};
  box-shadow: 0 ${pxToRem(6)} ${pxToRem(28)} 0 rgba(24, 52, 117, 0.2);
`

const CourseLogin = ({ id }) => {
  const { allCourses, courseId } = getCourseData(DATA, id)
  return (
    <GradientWrapper>
      <Flex flexDirection="column" maxWidth={pxToRem(800)} m="0 auto" px="m">
        <Box mt="l" ml="s">
          <ImageLink img={returnIcon} maxHeight={pxToRem(30)} to={MOODLE} />
        </Box>
        <CourseDataBlock>
          <Text textAlign="center" fontSize="xxl" mb="m">
            Login in to a course:
          </Text>
          {allCourses.map(({ id, title }) => {
            return id === courseId ? (
              <div key={id}>
                <Text
                  textAlign="center"
                  fontSize="xl"
                  fontWeight="semi_bold"
                  color={COLORS.PERCEPTIBLE_AT_A_GLANCE}
                >
                  {title}
                </Text>
              </div>
            ) : null
          })}
        </CourseDataBlock>
        <Box>
          <LoginForm id={id} />
        </Box>
      </Flex>
    </GradientWrapper>
  )
}

CourseLogin.propTypes = {
  id: PropTypes.string.isRequired,
}

export default CourseLogin
