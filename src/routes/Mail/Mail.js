import React from 'react'
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import Draggable from 'react-draggable'
import TextTruncate from 'react-text-truncate'
import { transparentize } from 'polished'
import { space } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS, PATHS } from 'constant'
import { Box, Flex, Grid } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import BottomNavbar from 'shared/BottomNavbar'
import MobileMenu from 'shared/MobileMenu'
import Header from 'shared/Header'
import Loading from 'components/atoms/Loading'
import { EmailListService } from 'services/email-service'
import cancel from 'assets/images/cancel.svg'
import { transformTimestamp } from './helpers'

const { MAIL } = PATHS

const BOUNDS = { left: 0, top: 0, right: 130, bottom: 0 }

const GradientWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  overflow: hidden;
  background-color: ${COLORS.DEUTUZIA_WHITE};
  overflow-y: scroll;
`

const MovableBox = styled(Box)`
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  background-color: ${COLORS.DEUTUZIA_WHITE};
  border-bottom: 1px solid ${transparentize(0.7, COLORS.ROCK_BLUE)};
`

const ImageRemove = styled.img`
  height: ${pxToRem(30)};
  margin-bottom: ${space.s};
  display: block;
`

const UnreadMessageIcon = styled.div`
  height: ${pxToRem(15)};
  width: ${pxToRem(15)};
  ${({ isRead }) =>
    isRead
      ? `background-color: ${COLORS.DEUTUZIA_WHITE}`
      : `background-color: ${COLORS.PERCEPTIBLE_AT_A_GLANCE}`};
  border-radius: 50%;
`

const emailListService = new EmailListService()
class Mail extends React.Component {
  state = {
    emails: [],
    isLoading: false,
  }

  componentDidMount() {
    this.setState({ isLoading: true })
    const { getEmailList } = emailListService
    getEmailList()
      .then((resp) => {
        this.setState({ isLoading: false, emails: resp })
      })
      .catch((err) => console.log(err))
  }

  deleteEmail = (id) => {
    this.setState(({ emails }) => {
      const idx = emails.findIndex((elm) => elm.id === id)
      const newEmails = [...emails.slice(0, idx), ...emails.slice(idx + 1)]
      return { emails: newEmails }
    })
  }

  render() {
    const {
      path,
      isSliderVisible,
      handleToggleMobileMenuClick,
      history: { push },
    } = this.props
    const { emails, isLoading } = this.state
    const storage = window.localStorage
    const login = storage.getItem('login')
    if (isLoading) return <Loading />
    return (
      <GradientWrapper>
        <Header
          isVisible={isSliderVisible}
          onMobileMenuButtonClick={handleToggleMobileMenuClick}
          login={login}
          path={path}
          mobileMenuComp={
            <MobileMenu
              pathName={path}
              isVisible={isSliderVisible}
              onClick={handleToggleMobileMenuClick}
            />
          }
        />
        {emails.map(
          ({ id, isRead, senderName, timestamp, subject, message }) => {
            const date = transformTimestamp(timestamp)
            return (
              <Box
                bg={transparentize(0.2, COLORS.RED_ORANGE_JUICE)}
                height={pxToRem(150)}
                maxHeight={pxToRem(150)}
                key={id}
              >
                <Draggable
                  axis="x"
                  // handle=".handle"
                  // defaultPosition={{ x: 0, y: 0 }}
                  position={null}
                  onStart={this.handleStart}
                  onDrag={this.handleDrag}
                  onStop={this.handleStop}
                  scale={1}
                  bounds={BOUNDS}
                >
                  <Box
                    // className="handle"
                    maxWidth="100vw"
                    onClick={() => push(`${MAIL}/${id}`)}
                  >
                    <MovableBox height={pxToRem(150)} maxHeight={pxToRem(150)}>
                      <Grid gridTemplateColumns="1fr 10fr">
                        <Flex justifyContent="center" mt={pxToRem(22)}>
                          <UnreadMessageIcon isRead={isRead} />
                        </Flex>

                        <Box>
                          <Flex justifyContent="space-between">
                            <Text
                              fontSize={pxToRem(22)}
                              fontWeight="bold"
                              color={COLORS.BLACK}
                              mt="m"
                            >
                              {senderName.length < 19
                                ? senderName
                                : `${senderName.substr(0, 16)}...`}
                            </Text>
                            <Text
                              fontSize="xl"
                              color={COLORS.ROCK_BLUE}
                              mx="l"
                              mt="m"
                            >
                              {date}
                            </Text>
                          </Flex>
                          <Box>
                            <Text
                              fontSize="l"
                              as="div"
                              color={COLORS.BLACK}
                              mr="l"
                              mt="xs"
                            >
                              <TextTruncate
                                line={1}
                                element="div"
                                truncateText="…"
                                text={subject}
                              />
                            </Text>
                            <Text
                              fontSize="l"
                              as="div"
                              color={COLORS.ROCK_BLUE}
                              mr="l"
                              mt="xs"
                            >
                              <TextTruncate
                                line={2}
                                element="div"
                                truncateText="…"
                                text={message}
                              />
                            </Text>
                          </Box>
                        </Box>
                      </Grid>
                    </MovableBox>
                  </Box>
                </Draggable>
                <Flex alignItems="center" height="100%" ml="xl" mb="m">
                  <ImageRemove
                    src={cancel}
                    height={pxToRem(30)}
                    onClick={() => this.deleteEmail(id)}
                  />
                </Flex>
              </Box>
            )
          }
        )}
        <Box mb="xxl" />
        <BottomNavbar path={path} />
      </GradientWrapper>
    )
  }
}

Mail.propTypes = {
  path: PropTypes.string.isRequired,
  isSliderVisible: PropTypes.bool,
  handleToggleMobileMenuClick: PropTypes.func,
  history: PropTypes.object.isRequired,
}

export default withRouter(Mail)
