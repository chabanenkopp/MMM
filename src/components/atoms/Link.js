import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from 'constant'

const ReactLink = styled(NavLink)`
  text-decoration: none;
  color: ${COLORS.PERCEPTIBLE_AT_A_GLANCE};
  cursor: pointer;
  :hover {
    color: ${COLORS.FLAX_FLOWER_BLUE};
  }
`

export default ReactLink
