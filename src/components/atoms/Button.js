import PropTypes from 'prop-types'
import styled from 'styled-components'
import { space, height, fontSize } from 'styled-system'
import { theme, radius } from 'Theme'
import { pxToRem } from 'helpers'
import { COLORS } from 'constant'

const getShadow = (shadowColor, isVisible) =>
  shadowColor &&
  isVisible &&
  `box-shadow: 0 ${pxToRem(8)} ${pxToRem(20)} -${pxToRem(12)} ${shadowColor};`

const buttonFuncs = [space, height, fontSize]

const ButtonBase = styled.button`
  border: none;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding-left: ${theme.space.m};
  padding-right: ${theme.space.m};
  height: ${pxToRem(70)} !important;
  min-width: ${theme.space.xxl};
  background-color: ${COLORS.WHITE};
  font-weight: ${theme.fontWeights.bold};
  border-radius: ${radius.m};
  text-decoration: none;
  :focus {
    outline: 0;
  }
`

const Outlined = styled(ButtonBase)`
  ${({ color, borderColor, isShadow }) => `
    border: 1.5px solid ${borderColor};
    color: ${color};
    ${getShadow(color, isShadow)}}
  `}
  ${({ isTransparent }) => isTransparent && `background-color: transparent;`}
  ${buttonFuncs}
`

Outlined.propTypes = {
  color: PropTypes.string,
  borderColor: PropTypes.string,
  isShadow: PropTypes.bool,
  isTransparent: PropTypes.bool,
}

Outlined.defaultProps = {
  borderColor: COLORS.ARAGON_GREEN,
  color: COLORS.ENAMELLED_DRAGON,
}

const Filled = styled(ButtonBase)`
  padding-left: ${theme.space.l};
  padding-right: ${theme.space.l};
  color: ${({ color }) => color || COLORS.WHITE};
  background-color: ${({ backgroundColor }) =>
    backgroundColor || COLORS.ARAGON_GREEN};
  background-image: ${({ gradientFromColor, gradientToColor }) =>
    `linear-gradient(90deg, ${gradientFromColor}, ${gradientToColor})`};
  ${({ gradientFromColor, isShadow }) => getShadow(gradientFromColor, isShadow)}
  ${({ borderRadius }) => `border-radius: ${borderRadius}`}
  ${buttonFuncs};
  transition: background-color 0.5s;
  border: 1px solid ${COLORS.LUXURY};
  :hover {
    background-color: ${COLORS.BUTTERSCOTCH};
  }
`

Filled.propTypes = {
  isShadow: PropTypes.bool,
  color: PropTypes.string,
  gradientFromColor: PropTypes.string,
  gradientToColor: PropTypes.string,
}

Filled.defaultProps = {
  gradientFromColor: COLORS.PERICALLIS_HYBRIDA,
  gradientToColor: COLORS.ULTRA_PINK,
}

export default {
  Outlined,
  Filled,
}
