import styled from 'styled-components'
import {
  space,
  width,
  fontWeight,
  color,
  textAlign,
  display,
  backgroundSize,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  alignItems,
  justifyContent,
  justifyItems,
  flexWrap,
  flexDirection,
  flex,
  order,
  overflow,
  position,
  zIndex,
  gridGap,
  gridColumnGap,
  gridRowGap,
  gridColumn,
  gridRow,
  gridAutoFlow,
  gridAutoColumns,
  gridAutoRows,
  gridTemplateColumns,
  gridTemplateRows,
  gridTemplateAreas,
  gridArea,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat,
} from 'styled-system'

const Box = styled.div(
  [],
  space,
  width,
  fontWeight,
  color,
  textAlign,
  display,
  maxWidth,
  minWidth,
  height,
  maxHeight,
  minHeight,
  flex,
  order,
  overflow,
  position,
  zIndex,
  gridArea,
  backgroundSize,
  backgroundImage,
  backgroundPosition,
  backgroundRepeat
)

const Flex = styled(Box)`
  display: flex;
  ${alignItems}
  ${justifyContent}
  ${flexWrap}
  ${flexDirection}
  ${display}
`

const Grid = styled(Box)`
  display: grid;
  ${alignItems}
  ${justifyContent}
  ${justifyItems}
  ${gridGap}
  ${gridColumnGap}
  ${gridRowGap}
  ${gridColumn}
  ${gridRow}
  ${gridAutoFlow}
  ${gridAutoColumns}
  ${gridAutoRows}
  ${gridTemplateColumns}
  ${gridTemplateRows}
  ${gridTemplateAreas}
`

export { Box, Flex, Grid }
