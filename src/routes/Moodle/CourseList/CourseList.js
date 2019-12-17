import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'Theme'
import { PATHS, COLORS } from 'constant'
import { pxToRem, transformPath } from 'helpers'
import { Flex, Box } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'
import listItem from 'assets/images/list-item.svg'
import Loading from 'components/atoms/Loading'
import { MoodleService } from 'services/moodle-service'
import lock from 'assets/images/lock.svg'

const { MOODLE, COURSELOGIN } = PATHS

const ListIcon = styled.img`
  min-height: ${pxToRem(15)};
  max-height: ${pxToRem(15)};
  margin-right: ${space.m};
`

const LockIcon = styled.img`
  max-height: ${pxToRem(30)};
  margin-left: ${space.s};
  margin-top: ${pxToRem(2)};
`

const ListItems = ({ courses, onClick, type }) => (
  <Box ml="m">
    {courses.map(({ id, title, isLocked }) => (
      <Flex key={id} mt="m" alignItems="center">
        <ListIcon src={listItem} />
        <Text
          onClick={() =>
            onClick(
              `${isLocked ? COURSELOGIN : MOODLE}/${transformPath(type)}-${id}`
            )
          }
          display="contents"
          color={COLORS.MAJOLICA_BLUE}
          fontSize={['xs', 's', 'm']}
          fontWeight="thin"
        >
          {title}
        </Text>
        {isLocked ? <LockIcon src={lock} /> : null}
      </Flex>
    ))}
  </Box>
)

ListItems.propTypes = {
  courses: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired,
  type: PropTypes.string.isRequired,
}

const moodleService = new MoodleService()

class CourseList extends React.Component {
  state = {
    studies: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    const { getStudyList } = moodleService
    getStudyList()
      .then((resp) => {
        this.setState({ isLoading: false, studies: resp })
      })
      .catch((err) => console.log(err))
  }

  render() {
    const {
      history: { push },
    } = this.props
    const { isLoading, studies } = this.state
    if (isLoading) return <Loading />
    return (
      <Flex flexDirection="column" maxWidth={pxToRem(800)} m="0 auto" px="m">
        <Box mb="xl">
          {studies.map(({ type, courses }) => {
            return (
              <Box data-aos="fade-up" mt="l" key={type}>
                <UnfoldTextBar
                  title={type}
                  component={
                    <ListItems courses={courses} onClick={push} type={type} />
                  }
                />
              </Box>
            )
          })}
        </Box>
      </Flex>
    )
  }
}

CourseList.propTypes = {
  history: PropTypes.object.isRequired,
}

export default withRouter(CourseList)
