import styled from 'styled-components'
import PropTypes from 'prop-types'
import { transparentize } from 'polished'
import { theme, border, radius } from 'Theme'
import { COLORS } from 'constant'
import { pxToRem } from 'helpers'
import { space, height, fontSize, width, maxWidth } from 'styled-system'

const inputFuncs = [space, height, width, maxWidth, fontSize]

const Input = styled.input`
  height: ${pxToRem(40)};
  border-radius: ${radius.xl};
  color: ${COLORS.STRAWBERRY_SMASH};
  font-size: 16px;
  display: block;
  background-color: ${({ isValid }) =>
    isValid
      ? transparentize(0.35, COLORS.WHITE)
      : transparentize(0.1, COLORS.RED_ORANGE_JUICE)};
  :focus {
    border-color: ${COLORS.MELLOW_MELON};
    outline: none;
  }
  ::placeholder {
    color: ${COLORS.STRAWBERRY_SMASH};
    font-family: Lato;
    font-size: ${theme.fontSizes.m};
  }
  border: ${({ borderParams }) => borderParams || border};
  ${inputFuncs}
`

Input.propTypes = {
  isValid: PropTypes.bool,
  borderParams: PropTypes.string,
}

export default Input
