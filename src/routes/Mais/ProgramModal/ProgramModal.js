import React from 'react'
import PropTypes from 'prop-types'
import { Text } from 'components/atoms/Typography'
import { COLORS, TEL_NUMBER } from 'constant'
import { Flex } from 'components/atoms/Layout'
import { pxToRem, scrollIntoView } from 'helpers'
import Modal from 'components/molecules/Modal'

const headingSuccessText = [
  'Congratulations!',
  'You pre-qualify for',
  'buying a house',
]

const fontSizeText = ['m', 'm', 'l']
const fontSizeHeading = ['xxl', 'xxl', 'xxxl']
const lineHeightText = pxToRem(30)
const modalTextFontFamily = 'Lato'

const ModalTextFailure = () => (
  <Flex flexDirection="column" alignItems="center">
    <Text
      fontSize={fontSizeText}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
      fontFamily={modalTextFontFamily}
    >
      NuNu can only help if you pay more than
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      mb="m"
      lineHeight={lineHeightText}
    >
      $ 2000 monthly for rent.
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      Did you maybe mistype? Try again!
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      If you'd like, you can call us directly at:
    </Text>
    <Text
      as="a"
      href={`tel:${TEL_NUMBER}`}
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      {TEL_NUMBER}
    </Text>
  </Flex>
)
const ModalTextSuccess = () => (
  <Flex flexDirection="column" alignItems="center">
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      If you'd like to hear more about an
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      Opportunity to buy your house with ZERO
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      downpayment, leave us your contact
    </Text>
    <Text
      fontSize={fontSizeText}
      fontFamily={modalTextFontFamily}
      color={COLORS.LUXURY}
      lineHeight={lineHeightText}
    >
      information and we will be with you shortly!
    </Text>
  </Flex>
)

const ModalHeadingFailure = () => (
  <Text
    fontSize={fontSizeHeading}
    color={COLORS.MAJOLICA_BLUE}
    textAlign="center"
    fontWeight="bold"
    lineHeight={pxToRem(44)}
  >
    Thank You!
  </Text>
)
const ModalHeadingSuccess = () => (
  <React.Fragment>
    {headingSuccessText.map((text) => (
      <Text
        fontSize={fontSizeHeading}
        color={COLORS.MAJOLICA_BLUE}
        textAlign="center"
        fontWeight="bold"
        lineHeight={pxToRem(44)}
        key={text}
      >
        {text}
      </Text>
    ))}
  </React.Fragment>
)

const ModalRent = ({ onCloseModalButtonClick, isModalOpen, isSuccess }) => (
  <Modal
    onClose={onCloseModalButtonClick}
    onClick={
      isSuccess
        ? () => {
            onCloseModalButtonClick()
            scrollIntoView('contact-form')
          }
        : onCloseModalButtonClick
    }
    isVisible={isModalOpen}
    buttonLabel={isSuccess ? 'CONTINUE' : 'RECALCULATE'}
    title={isSuccess ? <ModalHeadingSuccess /> : <ModalHeadingFailure />}
    body={isSuccess ? <ModalTextSuccess /> : <ModalTextFailure />}
  />
)

ModalRent.propTypes = {
  isModalOpen: PropTypes.bool.isRequired,
  isSuccess: PropTypes.bool.isRequired,
  onCloseModalButtonClick: PropTypes.func.isRequired,
}

export default ModalRent
