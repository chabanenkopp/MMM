import styled from 'styled-components'
import {
  space,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  textAlign,
  lineHeight,
  display,
} from 'styled-system'

const textFunctions = [
  space,
  color,
  fontSize,
  fontWeight,
  fontFamily,
  textAlign,
  lineHeight,
  display,
]

const textDefaultProps = {
  fontWeight: 'normal',
}

export const Text = styled.p`
  margin: 0;
  ${textFunctions}
`

Text.defaultProps = {
  ...textDefaultProps,
  color: 'text',
  fontSize: 'm',
}

export const H2 = styled.h2`
  ${textFunctions}
`

H2.defaultProps = {
  ...textDefaultProps,
  color: 'heading',
  fontSize: 'xxxl',
}

export const H3 = styled.h3`
  ${textFunctions}
`

H3.defaultProps = {
  ...textDefaultProps,
  color: 'heading',
  fontSize: 'xxl',
}
