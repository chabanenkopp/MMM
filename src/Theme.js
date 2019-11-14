import { css } from 'styled-components'
import { fluidRange } from 'polished'
import { pxToRem } from 'helpers'
import { COLORS } from 'constant'

export const getTransition = (property) =>
  `${property} 0.5s cubic-bezier(0.77,0.2,0.05,1.0)`

export const fontStack = `"Montserrat", sans-serif;`

export const colors = {
  text: COLORS.SHADOWED_STEEL,
  secondaryText: COLORS.CODEX_GREY,
  heading: COLORS.LEAD,
  lightBg: COLORS.ZHEN_ZHU_BAI_PEARL,
  white: COLORS.WHITE,
}

export const space = {
  xxs: pxToRem(2),
  xs: pxToRem(4),
  s: pxToRem(8),
  m: pxToRem(16),
  l: pxToRem(32),
  xl: pxToRem(64),
  xxl: pxToRem(128),
  xxxl: pxToRem(256),
  xxxxl: pxToRem(400),
}

export const fontSizes = {
  xxs: pxToRem(10),
  xs: pxToRem(12),
  s: pxToRem(14),
  m: pxToRem(16),
  l: pxToRem(18),
  xl: pxToRem(20),
  xxl: pxToRem(30),
  xxxl: pxToRem(40),
  xxxxl: pxToRem(45),
}

export const fontWeights = {
  extra_thin: 300,
  thin: 400,
  normal: 500,
  semi_bold: 600,
  bold: 700,
}

export const radius = {
  m: '4px',
  l: '10px',
  xl: '30px',
  pill: '9999px',
}

export const border = `1px solid ${COLORS.WHITE}`

export const globalStyles = css`
  html {
    ${fluidRange({
      prop: 'font-size',
      fromSize: '14px',
      toSize: '18px',
    })}
  }
  body {
    font-family: ${fontStack};
    color: ${colors.text};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: auto;
    min-width: 320px;
    border: 0;
    margin: 0;
  }
`

export const breakpoints = ['375px']

export const theme = {
  colors,
  space,
  fontSizes,
  fontWeights,
  breakpoints,
}
