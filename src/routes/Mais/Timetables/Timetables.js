import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'
import { transparentize } from 'polished'
import { radius } from 'Theme'
import { COLORS } from 'constant'
import { pxToRem } from 'helpers'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import { PostToServer } from 'services/mais-service'
import withAuthService from 'hoc/withAuthService'
import animationLoading from 'assets/images/loading.svg'
import TableLesson from './Table'

const WeekButtons = styled(Flex)`
  justify-content: space-around;
  align-items: center;
  background-color: ${transparentize(0.15, COLORS.WHITE)};
  border-radius: ${radius.xl};
  margin: 0 auto;
  padding: ${pxToRem(10)} ${pxToRem(20)} ${pxToRem(10)} ${pxToRem(20)};
`

const DayWrapper = styled.div`
  flex: 1;
  border-right: 1px solid ${transparentize(0.3, COLORS.MYTHICAL_ORANGE)};
`

const SliderWrapper = styled.div`
  overflow: hidden;
`

const SlickSlider = styled(Slider)`
  .slick-slide * {
    outline: none;
  }
  .slick-track * {
    outline: none;
  }
`

const SETTINGS = {
  infinite: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 500,
  autoplay: false,
  nextArrow: null,
  prevArrow: null,
  dots: false,
}

class Timetables extends Component {
  state = {
    data: null,
    activeSlideIndex: 0,
    isLoading: true,
  }
  post = new PostToServer()
  componentDidMount() {
    const storage = window.localStorage
    const login = storage.getItem('login')
    const password = storage.getItem('password')
    this.post
      .getTableData({ login, password })
      .then((resp) => {
        this.setState({ isLoading: false, data: resp })
      })
      .catch((err) => console.log(err))
  }
  handleNext = () => {
    this.slider.slickNext()
  }
  handlePrevious = () => {
    this.slider.slickPrev()
  }
  handleGoToSlide = (value) => {
    this.slider.slickGoTo(value)
  }
  render() {
    const { isLoading, activeSlideIndex, data } = this.state
    if (isLoading)
      return (
        <Flex justifyContent="center" alignItems="center" height="100vh">
          <img src={animationLoading} alt="loading" />
        </Flex>
      )
    return (
      <Box py="l">
        <WeekButtons
          width={[pxToRem(320), 'unset', pxToRem(420)]}
          maxWidth={pxToRem(400)}
        >
          {['MO', 'TU', 'WD', 'TH'].map((day, i) => (
            <DayWrapper onClick={() => this.handleGoToSlide(i)} key={day}>
              <Text
                textAlign="center"
                fontSize="xl"
                fontWeight="semi_bold"
                color={
                  activeSlideIndex === i
                    ? COLORS.ANCHORMAN
                    : COLORS.MYTHICAL_ORANGE
                }
              >
                {day}
              </Text>
            </DayWrapper>
          ))}
          <Box flex="1" onClick={() => this.handleGoToSlide(4)}>
            <Text
              textAlign="center"
              fontSize="xl"
              fontWeight="semi_bold"
              color={
                activeSlideIndex === 4
                  ? COLORS.ANCHORMAN
                  : COLORS.MYTHICAL_ORANGE
              }
            >
              FR
            </Text>
          </Box>
        </WeekButtons>
        <SliderWrapper>
          <SlickSlider
            ref={(slider) => {
              this.slider = slider
            }}
            beforeChange={(current, next) => {
              this.setState({ activeSlideIndex: next })
            }}
            {...SETTINGS}
          >
            {data.map(({ lessons, day }, i) => {
              return i !== 5 ? (
                <Flex
                  key={day}
                  flexDirection="column"
                  justifyContent="center"
                  mt="l"
                >
                  {lessons.map(({ start, end, description }) => {
                    const { main, groups } = description
                    return (
                      <Box key={`${main}${groups}`} mb="l">
                        <TableLesson
                          start={start}
                          end={end}
                          description={description}
                        />
                      </Box>
                    )
                  })}
                </Flex>
              ) : null
            })}
          </SlickSlider>
        </SliderWrapper>
      </Box>
    )
  }
}

Timetables.propTypes = {
  setLoading: PropTypes.func,
}

export default withAuthService(Timetables)
