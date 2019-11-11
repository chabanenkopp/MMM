import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { COLORS } from 'constant'

const ReactLink = styled(NavLink)`
  text-decoration: none;
  cursor: pointer;
  :hover {
    color: ${COLORS.FLAX_FLOWER_BLUE};
  }
`

export default ReactLink
