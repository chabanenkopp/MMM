import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space } from 'Theme'
import { PATHS, COLORS } from 'constant'
import { transformPath, getCourseData, pxToRem } from 'helpers'
import { Text } from 'components/atoms/Typography'
import { Box, Flex } from 'components/atoms/Layout'
import { MoodleService } from 'services/moodle-service'
import UnfoldTextBar from 'components/molecules/UnfoldTextBar'
import ImageLink from 'components/atoms/ImageLink'
import MobileMenu from 'shared/MobileMenu'
import Header from 'shared/Header'
import listItem from 'assets/images/list-item.svg'
import returnIcon from 'assets/images/return.svg'
import Loading from 'components/atoms/Loading'
import Materials from './Materials'

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

const moodleService = new MoodleService()

class Course extends React.Component {
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
    const { id, isSliderVisible, handleToggleMobileMenuClick } = this.props
    const { studies, isLoading } = this.state
    if (isLoading || studies.length === 0) return <Loading />
    const { allCourses, courseId } = getCourseData(studies, id)
    const dummyCourses = getCourseData(studies, 'year1-1')
    const storage = window.localStorage
    const login = storage.getItem('login')
    return (
      <div>
        <Header
          isVisible={isSliderVisible}
          onMobileMenuButtonClick={handleToggleMobileMenuClick}
          login={login}
          mobileMenuComp={
            <MobileMenu
              isVisible={isSliderVisible}
              onClick={handleToggleMobileMenuClick}
            />
          }
        />
        <Flex
          flexDirection="column"
          maxWidth={pxToRem(800)}
          minHeight="100vh"
          bg={COLORS.DEUTUZIA_WHITE}
          m="0 auto"
          px="m"
        >
          {allCourses.map(({ title, content, ...rest }) => {
            if (rest.id === courseId) {
              return (
                <Box key={title}>
                  <Text key={title} fontSize="xl" color="black" mt="s" ml="s">
                    {title}
                  </Text>
                  <Flex alignItems="center" mt="l" ml="s">
                    <ImageLink
                      img={returnIcon}
                      maxHeight={pxToRem(30)}
                      to={MOODLE}
                    />
                    <Text color={COLORS.PERCEPTIBLE_AT_A_GLANCE} ml="s">
                      All Studies{' '}
                    </Text>
                  </Flex>
                </Box>
              )
            }
            return null
          })}
          {dummyCourses.allCourses.map(({ content, ...props }) => {
            console.log(props.id)
            if (props.id === '1') {
              return content.map(({ week, links }) => (
                <Box mt="l" key={week}>
                  <UnfoldTextBar
                    title={week}
                    component={<Materials links={links} />}
                  />
                </Box>
              ))
            }
            return null
          })}
        </Flex>
      </div>
    )
  }
}

Course.propTypes = {
  id: PropTypes.string.isRequired,
  isSliderVisible: PropTypes.bool,
  handleToggleMobileMenuClick: PropTypes.func,
}

export default Course
