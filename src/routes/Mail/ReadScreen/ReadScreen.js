import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { transparentize } from 'polished'
import { space } from 'Theme'
import { COLORS, PATHS } from 'constant'
import { pxToRem } from 'helpers'
import { Box, Flex } from 'components/atoms/Layout'
import { Text } from 'components/atoms/Typography'
import MobileMenu from 'shared/MobileMenu'
import Header from 'shared/Header'
import ImageLink from 'components/atoms/ImageLink'
import Loading from 'components/atoms/Loading'
import { EmailListService } from 'services/email-service'
import returnIcon from 'assets/images/return.svg'
import { transformTimestampShort } from '../helpers'

const { MAIL } = PATHS

const GradientWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: ${COLORS.DEUTUZIA_WHITE};
`

const Avatar = styled(Flex)`
  align-items: center;
  justify-content: center;
  height: ${pxToRem(70)};
  width: ${pxToRem(70)};
  min-width: ${pxToRem(70)};
  background-color: ${COLORS.PERCEPTIBLE_AT_A_GLANCE};
  border-radius: 50%;
`
const EmailDataWrapper = styled(Box)`
  padding-bottom: ${space.m};
  border-bottom: 1px solid ${transparentize(0.7, COLORS.ROCK_BLUE)};
`

const IFrameConrainer = styled(Flex)`
  position: relative;
  overflow: hidden;
  padding-top: 56.25%;
  padding-top: 180.25%;
`

const IFrame = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 0;
`

const DateText = styled(Text)`
  min-width: ${pxToRem(60)};
`

const getAvatarLetters = (fullName) => {
  const nameArr = fullName.split(' ')
  if (nameArr.length > 1)
    return (
      nameArr[0].charAt(0).toUpperCase() + nameArr[1].charAt(0).toUpperCase()
    )
  return nameArr[0].charAt(0).toUpperCase()
}

const getMail = (allEmails, passedId) => {
  let targetEmail
  allEmails.some((email) => {
    targetEmail = email
    return email.id === passedId
  })
  return targetEmail
}

const emailListService = new EmailListService()

class ReadScreen extends React.Component {
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
  render() {
    const { id, isSliderVisible, handleToggleMobileMenuClick } = this.props
    const { isLoading, emails } = this.state
    let emailData
    if (emails.length > 0) {
      emailData = getMail(emails, id)
    }
    const storage = window.localStorage
    const login = storage.getItem('login')
    if (isLoading || emails.length === 0) return <Loading />
    const { senderName, recipient, timestamp, subject } = emailData
    return (
      <GradientWrapper>
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
        <Flex alignItems="center" ml="l">
          <ImageLink img={returnIcon} maxHeight={pxToRem(30)} to={MAIL} />{' '}
          <Text color={COLORS.PERCEPTIBLE_AT_A_GLANCE} ml="s">
            All Inboxes{' '}
          </Text>
        </Flex>
        <EmailDataWrapper>
          <Flex justifyContent="space-between" pt="l" pb="m">
            <Flex alignItems="center" ml="l">
              <Avatar>
                <Text fontSize="xl" fontWeight="bold" color={COLORS.WHITE}>
                  {getAvatarLetters(senderName)}
                </Text>
              </Avatar>
              <Box ml="m">
                <Text fontSize={pxToRem(18)} color={COLORS.BLACK}>
                  From:&nbsp;
                  <font color={COLORS.PERCEPTIBLE_AT_A_GLANCE}>
                    <b>
                      {senderName.length <= 17
                        ? senderName
                        : `${senderName.substr(0, 14)}...`}
                    </b>
                  </font>
                </Text>
                <Text fontSize={pxToRem(18)} color={COLORS.BLACK}>
                  To:&nbsp;
                  <font color={COLORS.PERCEPTIBLE_AT_A_GLANCE}>
                    {recipient}
                  </font>
                </Text>
              </Box>
            </Flex>
            <DateText
              fontSize={pxToRem(18)}
              color={COLORS.ROCK_BLUE}
              mr="l"
              mt={pxToRem(10)}
            >
              {transformTimestampShort(timestamp)}
            </DateText>
          </Flex>
        </EmailDataWrapper>
        <Text
          fontSize="xxl"
          fontWeight="bold"
          color={COLORS.BLACK}
          mx="l"
          my="m"
        >
          {subject}
        </Text>
        {/* <Text fontSize="xl" color={COLORS.BLACK} lineHeight="1.7" mx="l" mt="m">
        {message}
      </Text> */}
        <IFrameConrainer>
          <IFrame
            src={`http://34.65.172.206/api/email?id=${id}`}
            title="mail"
            frameborder="0"
          />
        </IFrameConrainer>
      </GradientWrapper>
    )
  }
}

ReadScreen.propTypes = {
  id: PropTypes.string.isRequired,
  isSliderVisible: PropTypes.bool,
  handleToggleMobileMenuClick: PropTypes.func,
}

export default ReadScreen
